import Link from "next/link";
import { Post } from "@/app/types/posts";
import { CommentForm } from "@/app/posts/[slug]/comment-form";
import { LikeButton } from "@/app/posts/[slug]/like-button";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3001/posts");
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </article>
      ))}
      <hr className="my-4"/>
      <LikeButton />
      <section className="mt-4">
        <h2 className="text-lg font-bold">Comments</h2>
        <CommentForm />
      </section>
    </div>
  );
}
