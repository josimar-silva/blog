import { notFound } from "next/navigation";

import { BlogPost } from "@/app/__components/blog/blog-post";
import { Footer } from "@/app/__components/footer";
import { Header } from "@/app/__components/header";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug, [
    "title",
    "date",
    "readTime",
    "slug",
    "author",
    "content",
    "tags",
    "category",
  ]);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BlogPost post={{ ...post, content: post.content }} />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
