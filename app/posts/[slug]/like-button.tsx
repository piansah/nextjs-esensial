"use client";
import { createLike } from "@/app/actions";

export function LikeButton() {
  async function handleLike() {
    const prevData = { error: "" }; // or use the actual previous state if available
    const formData = new FormData();
    formData.append("postId", "your-post-id"); // Replace with the actual post ID
    await createLike(prevData, formData);
  }

  return (
    <button
      className="bg-white text-black py-1 px-2 rounded"
      onClick={handleLike}
    >
      Like
    </button>
  );
}
