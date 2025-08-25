import { BookshelfHero } from "@/app/__components/bookshelf/bookshelf-hero";
import { BookshelfList } from "@/app/__components/bookshelf/bookshelf-list";
import { Footer } from "@/app/__components/common/footer";
import { Header } from "@/app/__components/common/header";
import { getBooks } from "@/lib/books";

export default async function BookshelfPage() {
  const books = await getBooks();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BookshelfHero />
        <BookshelfList books={books} />
      </main>
      <Footer />
    </div>
  );
}
