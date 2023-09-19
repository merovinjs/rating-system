import { NextResponse } from "next/server";
import { createUser } from "../../../../prisma/user";
import { NextApiRequest } from "next";
interface CustomRequest extends NextApiRequest {
  json: () =>
    | Promise<{ email: string; name: string; password: string }>
    | { email: string; name: string; password: string };
}
export const POST = async (request: CustomRequest) => {
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
