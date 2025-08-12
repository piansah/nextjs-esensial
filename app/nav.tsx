import Link from "next/link";

export function Nav() {

  return (
    <nav className="space-x-4 p-4">
      <Link href="/">Home</Link>
      <Link href="/about/team">Team</Link>
      <Link href="/forbidden">Forbidden</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/about">About</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/api/user">User API</Link>
    </nav>
  );
}
