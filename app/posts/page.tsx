import Link from "next/link";
import { Post } from "@/app/types/posts";

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
    </div>
  );
}
