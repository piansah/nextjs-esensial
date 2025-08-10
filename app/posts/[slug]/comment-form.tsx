"use client";

import { createComment } from "@/app/actions";
import { useActionState } from "react";

const initialState = {
  error: "",
};

export function CommentForm() {
  const [state, formAction, pending] = useActionState(
    createComment,
    initialState
  );

  return (
    <form className="flex flex-col w-72" action={formAction}>
      {state?.error && (
        <div className="text-red-500" role="alert">
          {state.error}
        </div>
      )}

      <textarea
        placeholder="Masukan Komentar"
        className="w-full h-40 border border-white mb-2 text-white"
        name="comment"
      />

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        disabled={pending}
      >
        {pending ? "Mengirim..." : "Send"}
      </button>
    </form>
  );
}
