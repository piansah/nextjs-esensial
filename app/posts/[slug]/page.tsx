import { Post } from "@/app/types/posts";

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
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
