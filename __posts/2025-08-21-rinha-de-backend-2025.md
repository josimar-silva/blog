---
title: "Lessons from Rinha de Backend 2025"
excerpt: "My notes and thoughts on building a solution for Zanfranceschi's backend coding challenge with Rust and Gemini CLI."
date: "2025-08-21"
category: "Software Engineering"
tags: ["Rust", "Backend", "AI", "LLMs", "Development Tools"]
author: "Josimar Silva"
authorPhoto: "/assets/blog/authors/josimar-silva.png"
image: "/assets/blog/posts/rinha-de-backend-2025.png"
featured: true
---
## Preface

I had two main goals when approaching this back-end coding challenge:
### Experiment with LLM-assisted software development

Like many of my peers, I find myself stuck between two extremes: AI Doomers and AI Tech Bros.

This coding challenge was a good opportunity to try for myself what LLM-assisted software development looks like, get my own empirical results, and see how it fits into my workflow.
### Get a glimpse of Rust back-end development capabilities

Having worked with JVM-based languages (Java, Kotlin, Gosu, etc.) most of my career, I often get curious to see what other programming languages are out there that can be suitable for back-end development or other specific use cases (CLIs, etc.).

## Why Rust?

Rust piqued my interest after stumbling upon Erik Doernenburg's "[Ready for Rust](https://www.youtube.com/watch?v=WgLlwjZNEtY)" talk.
The StackOverflow Developer Survey may have played a role as well, but Erik's talk stuck with me.

After writing a CLI with Rust, I got curious to see how it would perform in back-end scenarios. 
It was around this time that the yearly "Rinha de Backend" (aka "Backend Coding Challenge"), organized by [Francisco Zanfranceschi](https://www.linkedin.com/in/francisco-zanfranceschi/), appeared on my LinkedIn timeline.

It seemed like the perfect opportunity to learn about Rust's back-end capabilities.

## Why Gemini CLI?

I've used the terminal side-by-side with my IDE of choice for most of my professional years. It became my comfort zone. Having an LLM client that meets me where I am was a hard requirement.

Furthermore, its free model was good enough for most tasks based on some earlier experiences using it.

So I decided to stick with it for this challenge and use it more aggressively compared to the previous one-time, short-task scenarios I'd used it for.

## Coding Challenge Scenario

This year's 2025 coding challenge [scenario](https://github.com/zanfranceschi/rinha-de-backend-2025/blob/main/INSTRUCOES.md) was to develop a back-end application to orchestrate payment requests to upstream payment processors. Each processor had distinct processing fees, and throughout the life-cycle of the performance tests, processors could be slow, rate-limited, or unresponsive.

The solution needed to be resilient and decide which payment processor a given payment should be processed by, using processing fees, health/liveness data, and server responsiveness as a way of maximizing profit from processed transactions.

Points were based on how much profit a given solution was able to provide, with a bonus for request performance and a penalty for inconsistencies in payment reporting.

The final leaderboard of the coding challenge can be found [here](https://rinha2025.andersongomes.dev.br/).

The Github repository with my solution submitted to coding challenge is available [here](https://github.com/josimar-silva/rinha-de-backend-2025).

## My Thoughts and Notes

### On Rust for back-end development

Having worked with garbage collected languages pretty much all my career definitely shows when using a system programming language like Rust.

Although caring about resources in garbage-collected languages is still a must, with languages like Rust the stakes are a bit higher and the consequences are pretty visible whenever you mismanage Rust's ownership model. 
The Rust compiler acts as a senior Rust developer, pointing out silly mistakes in the code that would lead to bigger problems later.

The Rust ecosystem for back-end development is surprisingly alive. 
There are quite a few options of back-end frameworks with various levels of maturity.
I went with [Actix Web](https://actix.rs/) due to its maturity and good documentation, which makes it easier for a non-Rust developer to onboard.

The Actix Web API reminds me of [ExpressJS](https://expressjs.com/), which made it easier to familiarize myself with its way of working.

Since Rust [does not have exceptions](https://doc.rust-lang.org/book/ch09-00-error-handling.html), error handling proved to be surprisingly satisfying by using Rust's pattern matching:

~~~rust
match purge_use_case.execute().await {
	Ok(_) => {
		HttpResponse::Ok().body("Payments purged successfully")
	}
	Err(e) => {
		HttpResponse::InternalServerError()
			.body(format!("Failed to purge payments: {e}"))
	}
}
~~~

Overall, Rust delivered on its promise of reliability and performance.
The learning curve was steep, but the tooling and ecosystem made it manageable.

### On LLM-Assisted Development

#### LLMs as a power tool

Earlier this year, [Elder Moraes](https://eldermoraes.com/) managed to provide us with an amazing opportunity to talk with [Robert C. Martin (aka Uncle Bob)](http://cleancoder.com/files/about.md) as part of the [Confraria Dev](https://confrariadev.com/cdv/).

When asked about the role of AI in the software development, Uncle Bob's answer stuck with me:

> LLMs are power tools. Understand how they work, use them, don't trust them.

The reasoning is straightforward: LLMs can be helpful in our work as Software Engineers, but without the base knowledge of what you're doing, you risk cutting a thumb off. Metaphorically speaking, though after watching Gemini delete an entire test class, I'm not letting it anywhere near my table saw.

#### You in the driver's seat

One thing that became pretty clear through this process is that as a Software Engineer, you still need to be in the driver's seat, making sure the solution is going in the right direction.

LLMs here act as an autopilot. They may do some adjustments to speed and direction, but you should be the one ensuring it's safe and going in the correct direction.

This means focusing on architecture, quality, resilience, and ensuring that the solution solves the proposed problem.

#### Software Engineering Standards are a must

All the Software Engineering practices that have been around for most of our field's existence proved to be a must when working with LLM-assisted development:

- CI/CD practices;
- SOLID principles;
- Atomic Commits;
- Automated Tests;
- Static Code Analysis;

These practices ensure that the output of the model will be scrutinized and validated against high software engineering standards and fast feedback.

For example, by automating the [performance tests](https://github.com/josimar-silva/rinha-de-backend-2025/blob/main/.github/workflows/perf-tests.yaml) and performance [data collection](https://github.com/josimar-silva/rinha-de-backend-2025/blob/main/perf.md), I got to have fast feedback on any change/optimization that affects the back-end performance.
This proved valuable to guide the model to places where the solution had a bottleneck and it could be improved further.

#### As stubborn as it gets

One of the biggest annoyances through this project was how stubborn these tools can be.
At times it would disregard guardrails defined in the [GEMINI.md](https://google-gemini.github.io/gemini-cli/docs/cli/gemini-md.html) and [do its own thing](https://www.linkedin.com/posts/jukkaniiranen_the-big-problem-of-vibe-coding-isnt-the-activity-7352779572339191809-H5su?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAjGttQB6oGVmubL-KGJO8cWIbkoRHRWaM8).

The highlight was it deleting a whole test class because it could not fix the failing test. 
When confronted with the solution, I got the classic: "You are absolutely right!"

At times it felt like I was experiencing "*LLM-induced gaslighting*". 
I found myself double-checking Rust documentation multiple times to be sure I wasn't going crazy and the model was actually wrong.

### On Rinha de Backend 3rd edition

Although there were a few common design and architecture choices, it was quite interesting
to see how Engineers from all levels and creeds come up with solutions to a single problem 
using various stacks and strategies.

It was also inspiring to see young Software Engineers, with fire in their eyes, think outside the box and push solutions to their limits.

Kudos to [Francisco Zanfranceschi](https://www.linkedin.com/in/francisco-zanfranceschi/) for organizing it and preparing such an engaging scenario for this year's challenge.

## Conclusion

So, where does this leave me after spending weeks wrestling with Rust and an occasionally stubborn LLM?

Rust was surprisingly pleasant to work with. 
Yes, the compiler yells at you constantly, but it's the kind of yelling that actually helps. 
It's like having a meticulous code reviewer who catches your mistakes before they become production incidents. 
The ecosystem is solid, the tooling is good, and I can see myself reaching for Rust again when the problem calls for it. 
That said, I'm not about to rewrite everything in Rust. 
The JVM stack still pays my bills and does the job well.

The LLM experiment was enlightening in a different way. Uncle Bob nailed it with the power tools analogy. 
Gemini CLI was genuinely helpful, especially for getting up to speed with unfamiliar APIs and debugging obscure compiler errors. But there were moments where it went off the rails completely, like deleting entire test classes or confidently suggesting solutions that made no sense. The gaslighting moments were real, and I lost count of how many times I had to double-check the Rust docs just to confirm I wasn't losing my mind.

What actually made this work was not the LLM itself, but having solid engineering practices in place. Automated tests, performance benchmarks, CI/CD pipelines. These things catch the nonsense before it becomes a problem. Without them, I'd be in trouble.

Position #194 out of 432 submissions feels about right for a first attempt with an unfamiliar stack and a LLM as a pair programmer. 
More than the ranking though, I got what I came for: hands-on experience with both Rust and LLM-assisted development, minus the hype and doom-posting from either camp.

Big thanks to [Francisco Zanfranceschi](https://www.linkedin.com/in/francisco-zanfranceschi/) for putting together such a well-designed challenge. 

See you same time next year?