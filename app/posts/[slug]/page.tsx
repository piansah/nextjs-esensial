import { Post } from "@/app/types/posts";
import { CommentForm } from "@/app/posts/[slug]/comment-form";
import { LikeButton } from "@/app/posts/[slug]/like-button";
import { CommentsSection } from "./comments";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
  };
}

async function getPost(slug: string): Promise<Post> {
  const res = await fetch(`http://localhost:3001/posts?slug=${slug}`);
  const [post] = await res.json();
  return post;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div>
      <article>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p>{post.content}</p>
      </article>
      <hr className="my-4" />
      <LikeButton />
      <section className="mt-4">
        <h2 className="text-lg font-bold">Comments</h2>
        <Suspense fallback={<p>Loading comments...</p>}>
          <CommentsSection />
        </Suspense>
        <CommentForm />
      </section>
    </div>
  );
}
