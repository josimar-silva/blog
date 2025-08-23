import { notFound } from "next/navigation";

import { BlogFooter } from "@/app/__components/blog-footer";
import { BlogHeader } from "@/app/__components/blog-header";
import { BlogPost } from "@/app/__components/blog-post";
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
      <BlogHeader />
      <BlogPost post={{ ...post, content: post.content }} />
      <BlogFooter />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
