import { NextResponse } from "next/server";
import { getUserLogin } from "../../../../prisma/user";

export const POST = async (request) => {
  const { email, password } = await request.json();

  const newPost = await getUserLogin(email, password);
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
