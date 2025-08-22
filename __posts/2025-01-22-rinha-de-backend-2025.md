---
title: "Test code"
excerpt: "Reflections on building a backend challenge solution with Rust and Gemini CLI, exploring how LLMs can be powerful development tools when used wisely."
date: "2025-01-21"
readTime: "8 min read"
category: "Development"
tags: ["Rust", "Backend", "AI", "LLMs", "Development Tools"]
author: "John Doe"
image: "/assets/blog/posts/placeholder.svg?height=400&width=800"
featured: false
---


The third edition of Rinha de Backend presented another fascinating opportunity to dive deep into backend architecture and performance optimization. This time around, I chose Rust as my weapon of choice, partly inspired by recent conversations about the language and partly driven by curiosity about how modern AI tools could assist in the development process.

## Why Rust?

The decision to use Rust wasn't made in isolation. It came on the heels of attending a Rust meetup where the language's performance characteristics and memory safety guarantees were discussed at length. For a backend challenge that emphasizes performance and reliability, Rust seemed like a natural fit.

Rust's zero-cost abstractions and fearless concurrency model make it particularly well-suited for high-performance backend services. The language forces you to think carefully about memory management and concurrent access patterns—exactly the kind of considerations that matter in a performance-focused challenge like Rinha de Backend.

~~~rust
use actix_web::{HttpResponse, Responder, ResponseError, post, web};
use log::warn;

use crate::adapters::web::errors::ApiError;
use crate::adapters::web::schema::{PaymentRequest, PaymentResponse};
use crate::domain::payment::Payment;
use crate::domain::payment_producer::PaymentProducer;

#[post("/payments")]
pub async fn payments(
	payload: web::Json<PaymentRequest>,
	payment_producer: web::Data<Box<dyn PaymentProducer>>,
) -> impl Responder {
	let payment = Payment {
		correlation_id: payload.correlation_id,
		amount:         payload.amount,
		requested_at:   None,
		processed_at:   None,
		processed_by:   None,
	};

	match payment_producer.send(payment).await {
		Ok(_) => HttpResponse::Ok().json(PaymentResponse {
			payment: payload.0,
			status:  "queued".to_string(),
		}),
		Err(e) => {
			warn!("Error processing payment: {e:?}");
			ApiError::InternalServerError.error_response()
		}
	}
}
~~~