import { notFound } from "next/navigation";

import { BlogFooter } from "@/app/__components/blog-footer";
import { BlogHeader } from "@/app/__components/blog-header";
import { BookReview } from "@/app/__components/book-review";
import { getBookBySlug, getBooks } from "@/lib/books";

export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book) => ({ slug: book.slug }));
}

export default async function BookReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = await getBookBySlug(params.slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BookReview book={book} />
      <BlogFooter />
    </div>
  );
}
