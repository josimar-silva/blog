"use client"

import { useState } from "react"
import { Badge } from "@/app/__components/ui/badge"
import { Button } from "@/app/__components/ui/button"
import { Card, CardContent } from "@/app/__components/ui/card"
import { BookOpen, Calendar, ExternalLink, FileText, Star } from "lucide-react"
import Link from "next/link"

interface Book {
  id: number
  title: string
  author: string
  type: "Book" | "Paper"
  category: string
  dateRead: string
  rating: number
  status: "Completed" | "In Progress" | "Abandoned"
  pages: number
  notes: string
  keyTakeaways: string[]
  recommendedFor: string
  slug: string
  links: {
    amazon?: string
    goodreads?: string
    arxiv?: string
    paperswithcode?: string
    online?: string
  }
}

interface BookshelfListProps {
  books: Book[]
}

export function BookshelfList({ books }: BookshelfListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All"),

  // Get unique categories
   categories = ["All", ...Array.from(new Set(books.map((book) => book.category)))],

  // Filter books by category
   filteredBooks = selectedCategory === "All" ? books : books.filter((book) => book.category === selectedCategory),

  // Sort by date read (most recent first)
   sortedBooks = filteredBooks.sort((a, b) => new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime()),

   renderStars = (rating: number) => Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />
    ))

  return (
    <section className="pb-16 md:pb-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-colors px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                <span className="ml-2 text-xs opacity-70">
                  ({category === "All" ? books.length : books.filter((book) => book.category === category).length})
                </span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Books List */}
        <div className="space-y-8">
          {sortedBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {book.type === "Book" ? (
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <FileText className="h-4 w-4 text-muted-foreground" />
                        )}
                        <Badge variant="outline">{book.type}</Badge>
                        <Badge variant="secondary">{book.category}</Badge>
                        <Badge
                          variant={
                            book.status === "Completed"
                              ? "default"
                              : book.status === "In Progress"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {book.status}
                        </Badge>
                      </div>

                      <h2 className="text-2xl font-bold mb-1">{book.title}</h2>
                      <p className="text-lg text-muted-foreground mb-3">by {book.author}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(book.dateRead).toLocaleDateString()}</span>
                        </div>
                        <span>•</span>
                        <span>{book.pages} pages</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">{renderStars(book.rating)}</div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-2">
                      {book.links.amazon && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={book.links.amazon} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Amazon
                          </Link>
                        </Button>
                      )}
                      {book.links.goodreads && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={book.links.goodreads} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Goodreads
                          </Link>
                        </Button>
                      )}
                      {book.links.arxiv && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={book.links.arxiv} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            arXiv
                          </Link>
                        </Button>
                      )}
                      {book.links.online && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={book.links.online} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Read Online
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Notes Preview */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed">{book.notes.substring(0, 200)}...</p>
                  </div>

                  {/* Read Full Review Button */}
                  <Button variant="ghost" asChild className="w-full justify-center">
                    <Link href={`/bookshelf/${book.slug}`}>Read Full Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            {selectedCategory === "All"
              ? `Showing all ${books.length} books and papers`
              : `Showing ${sortedBooks.length} items in "${selectedCategory}"`}
          </p>
        </div>
      </div>
    </section>
  )
}
