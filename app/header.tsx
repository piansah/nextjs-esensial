import Link from "next/link";
import {getSetting} from "@/app/queries/getSetting";

export async function Header() {
  const setting = await getSetting();
  return (
    <header className="border-b border-white py-2 mb-2">
      <nav className="space-x-4 p-4">
        <div className="text-2xl">{setting.siteName}</div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/team">Team</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
