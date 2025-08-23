export const books = [
  {
    id: 1,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    type: "Book" as const,
    category: "Systems Design",
    dateRead: "2024-12-15",
    rating: 5,
    status: "Completed" as const,
    pages: 590,
    slug: "designing-data-intensive-applications",
    notes:
      "An exceptional deep dive into the fundamentals of distributed systems and data architecture. Kleppmann masterfully explains complex concepts like consistency, partitioning, and replication with clear examples and real-world case studies. This is my second time reading it, and I discovered new insights about CAP theorem and eventual consistency patterns. Essential reading for any backend engineer working with distributed systems.",
    keyTakeaways: [
      "Understanding the trade-offs between consistency and availability in distributed systems",
      "How different database architectures solve specific problems",
      "The importance of thinking about data as streams rather than static entities",
      "Why most 'NoSQL' solutions eventually reinvent SQL-like features",
    ],
    recommendedFor:
      "Backend engineers, system architects, anyone working with distributed data",
    links: {
      amazon: "https://amazon.com/dp/1449373321",
      goodreads: "https://goodreads.com/book/show/23463279",
    },
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "David Thomas, Andrew Hunt",
    type: "Book" as const,
    category: "Software Engineering",
    dateRead: "2024-11-20",
    rating: 4,
    status: "Completed" as const,
    pages: 352,
    slug: "the-pragmatic-programmer",
    notes:
      "A timeless classic that holds up remarkably well despite being written over 20 years ago. The principles of DRY, orthogonality, and 'programming by coincidence' are as relevant today as ever. Some sections feel dated (the tools discussion), but the core philosophy of craftsmanship and continuous learning resonates strongly. The updated 20th anniversary edition addresses some modern concerns but maintains the original's practical wisdom.",
    keyTakeaways: [
      "Don't Repeat Yourself (DRY) - but understand when duplication is acceptable",
      "The importance of orthogonal design in reducing system complexity",
      "How to think critically about tools and avoid cargo cult programming",
      "The value of learning one new language every year",
    ],
    recommendedFor: "All developers, especially those early in their careers",
    links: {
      amazon: "https://amazon.com/dp/020161622X",
      goodreads:
        "https://goodreads.com/book/show/4099.The_Pragmatic_Programmer",
    },
  },
  {
    id: 3,
    title: "Attention Is All You Need",
    author: "Vaswani et al.",
    type: "Paper" as const,
    category: "Machine Learning",
    dateRead: "2024-10-08",
    rating: 5,
    status: "Completed" as const,
    pages: 15,
    slug: "attention-is-all-you-need",
    notes:
      "The paper that launched a thousand LLMs. Reading this after working with transformer-based models for a while gave me a much deeper appreciation for the elegance of the attention mechanism. The authors' insight that recurrence and convolution are unnecessary for sequence modeling was revolutionary. The mathematical formulation is surprisingly accessible, and the experimental results speak for themselves.",
    keyTakeaways: [
      "Self-attention can capture long-range dependencies more effectively than RNNs",
      "The transformer architecture's parallelizability makes it much more efficient to train",
      "Multi-head attention allows the model to focus on different aspects simultaneously",
      "Position encoding is crucial for sequence understanding without recurrence",
    ],
    recommendedFor:
      "ML engineers, researchers interested in NLP and transformer architectures",
    links: {
      arxiv: "https://arxiv.org/abs/1706.03762",
      paperswithcode:
        "https://paperswithcode.com/paper/attention-is-all-you-need",
    },
  },
];

export const getBookBySlug = async (slug: string) => {
  const book = books.find((book) => book.slug === slug);
  return Promise.resolve(book || null);
};

export const getBooks = async () => Promise.resolve(books);
