"use client";
import { createLike } from "@/app/actions";
import { useState, useTransition } from "react";

export function LikeButton() {
  const [Pending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  async function handleLike() {
    startTransition(() => {
      createLike();
    });
  }

  return (
    <button
      className="bg-white text-black py-1 px-2 rounded"
      onClick={async () => {
        await handleLike();
        setCount(count + 1);
      }}
    >
      {Pending ? "Like brooow" : "Like"} {count}
    </button>
  );
}
