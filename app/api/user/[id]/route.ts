export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return Response.json({
    message: "User GET Response",
    user: { id, name: "Pian Smith" },
  });
}
