"use server";

type State = {
  error: string;
};

export async function createComment(prevData: State, formData: FormData) {
  const comment = formData.get("comment") as string;

  if (!comment) {
    return { error: "Comment is required" };
  }

  // Simpan komentar ke DB / API
  console.log("New Comment:", comment);

  return { error: "" }; // tidak ada error
}


export async function createLike(prevData: State, formData: FormData) {
  const postId = formData.get("postId") as string;

  if (!postId) {
    return { error: "Post ID is required" };
  }

  // Simpan like ke DB / API
  console.log("New Like:", postId);

  return { error: "" }; // tidak ada error
}
