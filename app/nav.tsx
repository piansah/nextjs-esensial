"use client";

import Link from "next/link";
import { Setting } from "./types/setting";
import { use } from "react";

export function Nav({settingPromise}:{settingPromise:Promise<Setting>}) {
  const setting = use(settingPromise);

  console.log("Nav setting", setting);

  return (
    <nav className="space-x-4 p-4">
      <div className="text-2xl">{setting.siteName}</div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about/team">Team</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
