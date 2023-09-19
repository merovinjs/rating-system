import { NextResponse } from "next/server";
import { createUser } from "../../../../prisma/user";
export const POST = async (request: {
  json: () =>
    | PromiseLike<{ email: string; name: string; password: string }>
    | { email: string; name: string; password: string };
}) => {
  const { email, name, password } = await request.json();

  const newPost = await createUser(email, name, password);
  try {
    return new NextResponse(JSON.stringify(newPost), {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("error", { status: 500 });
  }
};
