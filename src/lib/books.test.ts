import { books, getBookBySlug, getBooks } from "./books"

describe("books", () => {
  it("should have a non-empty list of books", () => {
    expect(books.length).toBeGreaterThan(0)
  })

  it("should return all books", async () => {
    const allBooks = await getBooks()
    expect(allBooks.length).toBe(books.length)
  })

  it("should return a book by slug", async () => {
    const slug = "designing-data-intensive-applications"
    const book = await getBookBySlug(slug)
    expect(book).not.toBeNull()
    expect(book?.slug).toBe(slug)
  })

  it("should return null for a non-existent slug", async () => {
    const slug = "non-existent-slug"
    const book = await getBookBySlug(slug)
    expect(book).toBeNull()
  })
})
