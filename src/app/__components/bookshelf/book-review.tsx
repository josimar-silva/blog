/**
 * MIT License
 *
 * Copyright (c) 2025 Josimar Silva
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

"use client";

import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ExternalLink,
  FileText,
  Star,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/app/__components/ui/badge";
import { Button } from "@/app/__components/ui/button";
import { Card, CardContent } from "@/app/__components/ui/card";
import { MarkdownContent } from "@/app/__components/ui/markdown-content";

interface BookReviewProps {
  book: {
    title: string;
    author: string;
    type: "Book" | "Paper";
    category: string;
    dateRead: string;
    rating: number;
    status: "Completed" | "In Progress" | "Abandoned";
    pages: number;
    isbn?: string;
    publisher?: string;
    yearPublished?: number;
    venue?: string;
    citations?: string;
    notes: string;
    keyTakeaways: string[];
    difficulty: string;
    timeToRead: string;
    links: {
      amazon?: string;
      goodreads?: string;
      arxiv?: string;
      paperswithcode?: string;
      publisher?: string;
      github?: string;
      online?: string;
    };
    relatedBooks?: string[];
    relatedPapers?: string[];
    quotes?: string[];
  };
}

export function BookReview({ book }: Readonly<BookReviewProps>) {
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
      />
    ));

  return (
    <article className="py-8">
      <div className="container px-4 md:px-6 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/bookshelf">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Bookshelf
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            {book.type === "Book" ? (
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            ) : (
              <FileText className="h-5 w-5 text-muted-foreground" />
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

          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
            {book.title}
          </h1>
          <p className="text-2xl text-muted-foreground mb-6">
            by {book.author}
          </p>

          {/* Metadata Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Date Read</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(book.dateRead).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Length</p>
                <p className="text-sm text-muted-foreground">
                  {book.pages} pages
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {renderStars(book.rating)}
              </div>
              <span className="text-lg font-medium">{book.rating}/5</span>
            </div>
          </div>

          {/* Publication Info */}
          {(book.publisher || book.venue) && (
            <div className="text-sm text-muted-foreground mb-6">
              {book.type === "Book" && book.publisher && book.yearPublished && (
                <p>
                  Published by {book.publisher} in {book.yearPublished}
                  {book.isbn && ` • ISBN: ${book.isbn}`}
                </p>
              )}
              {book.type === "Paper" && book.venue && (
                <p>
                  Published in {book.venue}
                  {book.citations && ` • ${book.citations} citations`}
                </p>
              )}
            </div>
          )}

          {/* External Links */}
          <div className="flex flex-wrap gap-2">
            {book.links.amazon && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={book.links.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Amazon
                </Link>
              </Button>
            )}
            {book.links.goodreads && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={book.links.goodreads}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Goodreads
                </Link>
              </Button>
            )}
            {book.links.arxiv && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={book.links.arxiv}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  arXiv
                </Link>
              </Button>
            )}
            {book.links.github && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={book.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            )}
            {book.links.publisher && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={book.links.publisher}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Publisher
                </Link>
              </Button>
            )}
            {book.links.online && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={book.links.online}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read Online
                </Link>
              </Button>
            )}
          </div>
        </header>

        {/* Review Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Review */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">My Review</h2>
                <MarkdownContent content={book.notes} />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Takeaways */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Key Takeaways</h3>
                <ul className="space-y-3">
                  {book.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {takeaway}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Related Reading */}
            {((book.relatedBooks && book.relatedBooks.length > 0) ||
              (book.relatedPapers && book.relatedPapers.length > 0)) && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Related Reading
                  </h3>
                  <div className="space-y-2">
                    {book.relatedBooks?.map((relatedBook, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        • {relatedBook}
                      </p>
                    ))}
                    {book.relatedPapers?.map((relatedPaper, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        • {relatedPaper}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
