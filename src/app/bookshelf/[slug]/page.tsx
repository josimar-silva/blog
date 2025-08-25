import { notFound } from "next/navigation";

import { BookReview } from "@/app/__components/bookshelf/book-review";
import { Footer } from "@/app/__components/footer";
import { Header } from "@/app/__components/header";
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
      <Header />
      <BookReview book={book} />
      <Footer />
    </div>
  );
}
