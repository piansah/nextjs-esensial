"use server";

type State = {
  error: string;
};

export async function createComment(prevData: State, formData: FormData) {
  const comment = formData.get("comment") as string;

  if (!comment) {
    return { error: "Comment is required" };
  }

  return { error: "" }; // tidak ada error
}


export async function createLike(postId: string) {
  await new Promise((resolve) => setTimeout(() => resolve(true), 1000)); // Simulate network delay
  console.log("Like post:", postId);
}
