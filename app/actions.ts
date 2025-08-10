"use server";

export async function createComment(fromData: FormData) {
  console.log(fromData.get("comment"));
}
