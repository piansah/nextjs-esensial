import Link from "next/link";
import { Post } from "@/app/types/posts";

export const metadata = {
  title: "Posts",
};

async function getPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold">Posts Page</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </article>
      ))}
    </div>
  );
}
