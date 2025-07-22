import { BlogHeader } from "@/app/__components/blog-header"
import { BookshelfHero } from "@/app/__components/bookshelf-hero"
import { BookshelfList } from "@/app/__components/bookshelf-list"
import { BlogFooter } from "@/app/__components/blog-footer"
import { books } from "@/lib/books"

export default function BookshelfPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <BookshelfHero />
        <BookshelfList books={books} />
      </main>
      <BlogFooter />
    </div>
  )
}
