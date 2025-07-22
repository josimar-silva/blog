import { BlogHeader } from "@/app/__components/blog-header"
import { BookReview } from "@/app/__components/book-review"
import { BlogFooter } from "@/app/__components/blog-footer"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const getBookBySlug = (slug: string) => {
  const books = {
    "designing-data-intensive-applications": {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      type: "Book" as const,
      category: "Systems Design",
      dateRead: "2024-12-15",
      rating: 5,
      status: "Completed" as const,
      pages: 590,
      isbn: "978-1449373320",
      publisher: "O'Reilly Media",
      yearPublished: 2017,
      notes: `An exceptional deep dive into the fundamentals of distributed systems and data architecture. Kleppmann masterfully explains complex concepts like consistency, partitioning, and replication with clear examples and real-world case studies.

This is my second time reading this book, and I discovered new insights about CAP theorem and eventual consistency patterns that I missed the first time around. The author's background at LinkedIn and his work on Apache Kafka really shows through in the practical examples and real-world scenarios.

What sets this book apart is how it bridges the gap between academic research and practical implementation. Kleppmann doesn't just explain how systems work, but why they were designed that way and what trade-offs were made. The chapter on consensus algorithms (Raft, Paxos) is particularly well done.

The book is dense but incredibly rewarding. Each chapter builds upon the previous ones, creating a comprehensive understanding of how modern data systems work at scale. Essential reading for any backend engineer working with distributed systems.

**Favorite Chapters:**
- Chapter 5: Replication - Excellent explanation of different replication strategies
- Chapter 7: Transactions - Deep dive into ACID properties and isolation levels  
- Chapter 9: Consistency and Consensus - Complex algorithms explained clearly

**Areas for Improvement:**
The book could benefit from more recent examples of cloud-native architectures and serverless patterns, though the fundamental principles still apply.`,
      keyTakeaways: [
        "Understanding the trade-offs between consistency and availability in distributed systems",
        "How different database architectures solve specific problems",
        "The importance of thinking about data as streams rather than static entities",
        "Why most 'NoSQL' solutions eventually reinvent SQL-like features",
        "How to reason about system failures and design for resilience",
        "The fundamental challenges of distributed consensus",
      ],
      recommendedFor: "Backend engineers, system architects, anyone working with distributed data systems at scale",
      difficulty: "Advanced",
      timeToRead: "3-4 weeks",
      links: {
        amazon: "https://amazon.com/dp/1449373321",
        goodreads: "https://goodreads.com/book/show/23463279",
        publisher: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
      },
      relatedBooks: [
        "Building Microservices by Sam Newman",
        "Release It! by Michael Nygard",
        "The Art of Scalability by Martin Abbott",
      ],
      quotes: [
        "The limits of my language mean the limits of my world. - Ludwig Wittgenstein (quoted in the book)",
        "A system cannot be successful if it is too strongly influenced by a single person.",
      ],
    },
    "the-pragmatic-programmer": {
      title: "The Pragmatic Programmer",
      author: "David Thomas, Andrew Hunt",
      type: "Book" as const,
      category: "Software Engineering",
      dateRead: "2024-11-20",
      rating: 4,
      status: "Completed" as const,
      pages: 352,
      isbn: "978-020161622X",
      publisher: "Addison-Wesley",
      yearPublished: 2019,
      notes: `A timeless classic that holds up remarkably well despite the original being written over 20 years ago. The principles of DRY, orthogonality, and 'programming by coincidence' are as relevant today as ever.

The 20th anniversary edition I read includes updates for modern development practices, but the core philosophy remains unchanged: be a craftsperson, think critically about your tools, and never stop learning.

Some sections feel dated (particularly the tools discussion), but the fundamental principles of software craftsmanship are eternal. The authors' emphasis on personal responsibility and continuous improvement resonates strongly with my own development philosophy.

**What I Appreciated:**
- Practical advice that applies regardless of language or framework
- The focus on mindset and approach rather than specific technologies
- Real-world examples that illustrate abstract concepts
- The emphasis on communication and teamwork

**What Felt Dated:**
- Some tool recommendations are no longer relevant
- The examples use older programming languages
- Missing discussion of modern practices like CI/CD and cloud deployment

Overall, this book shaped how I think about software development and professionalism. It's a book I'll likely revisit every few years.`,
      keyTakeaways: [
        "Don't Repeat Yourself (DRY) - but understand when duplication is acceptable",
        "The importance of orthogonal design in reducing system complexity",
        "How to think critically about tools and avoid cargo cult programming",
        "The value of learning one new language every year",
        "Why good enough software is often better than perfect software",
        "The importance of taking responsibility for your code and career",
      ],
      recommendedFor:
        "All developers, especially those early in their careers looking to develop good habits and mindset",
      difficulty: "Beginner to Intermediate",
      timeToRead: "2-3 weeks",
      links: {
        amazon: "https://amazon.com/dp/020161622X",
        goodreads: "https://goodreads.com/book/show/4099.The_Pragmatic_Programmer",
        publisher: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
      },
      relatedBooks: [
        "Clean Code by Robert C. Martin",
        "Code Complete by Steve McConnell",
        "The Mythical Man-Month by Frederick Brooks",
      ],
      quotes: [
        "Care about your craft. Why spend your life developing software unless you care about doing it well?",
        "Don't live with broken windows.",
        "You can't write perfect software. Did that hurt? It shouldn't.",
      ],
    },
    "attention-is-all-you-need": {
      title: "Attention Is All You Need",
      author: "Vaswani et al.",
      type: "Paper" as const,
      category: "Machine Learning",
      dateRead: "2024-10-08",
      rating: 5,
      status: "Completed" as const,
      pages: 15,
      venue: "NIPS 2017",
      citations: "50000+",
      notes: `The paper that launched a thousand LLMs and fundamentally changed how we think about sequence modeling. Reading this after working with transformer-based models for a while gave me a much deeper appreciation for the elegance of the attention mechanism.

The authors' key insight that recurrence and convolution are unnecessary for sequence modeling was revolutionary. By relying entirely on attention mechanisms, they created an architecture that is both more parallelizable and more effective at capturing long-range dependencies.

**Technical Brilliance:**
The mathematical formulation is surprisingly accessible for such a groundbreaking paper. The self-attention mechanism is beautifully simple: Query, Key, and Value matrices that allow the model to focus on relevant parts of the input sequence.

**Impact on the Field:**
This paper didn't just introduce a new architecture; it fundamentally shifted the entire field of NLP. Every major language model since 2017 has been based on transformers.

**Implementation Notes:**
I implemented a simplified version while reading this paper, which really helped me understand the mechanics. The multi-head attention allows the model to focus on different types of relationships simultaneously.

The positional encoding solution is particularly clever - using sine and cosine functions to give the model information about sequence order without requiring recurrence.`,
      keyTakeaways: [
        "Self-attention can capture long-range dependencies more effectively than RNNs",
        "The transformer architecture's parallelizability makes it much more efficient to train",
        "Multi-head attention allows the model to focus on different aspects simultaneously",
        "Position encoding is crucial for sequence understanding without recurrence",
        "Attention weights provide interpretability into what the model is focusing on",
        "The architecture scales remarkably well with increased model size and data",
      ],
      recommendedFor:
        "ML engineers, researchers interested in NLP and transformer architectures, anyone working with language models",
      difficulty: "Advanced",
      timeToRead: "1-2 days (plus implementation time)",
      links: {
        arxiv: "https://arxiv.org/abs/1706.03762",
        paperswithcode: "https://paperswithcode.com/paper/attention-is-all-you-need",
        github: "https://github.com/tensorflow/tensor2tensor",
      },
      relatedPapers: [
        "BERT: Pre-training of Deep Bidirectional Transformers",
        "GPT: Improving Language Understanding by Generative Pre-Training",
        "T5: Exploring the Limits of Transfer Learning",
      ],
      quotes: [
        "Attention is all you need.",
        "The Transformer follows this overall architecture using stacked self-attention and point-wise, fully connected layers.",
      ],
    },
  }

  return books[slug as keyof typeof books] || null
}

export default function BookReviewPage({ params }: { params: { slug: string } }) {
  const book = getBookBySlug(params.slug)

  if (!book) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BookReview book={book} />
      <BlogFooter />
    </div>
  )
}
