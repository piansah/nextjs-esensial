import Link from "next/link";
import { Post } from "@/app/types/posts";
import { createComment } from "@/app/actions";

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
      <section className="mt-4">
        <h2 className="text-lg font-bold">Comments</h2>
        <form action={createComment}>
          <textarea name="comment" rows={4} placeholder="Masukan Komentar" />
          <br />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
