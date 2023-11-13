import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const response = await req.json();
    const { email, password } = response;

    if (!email || !password) {
      return NextResponse.json(
        {
          error: "Email or Password field cannot be empty",
        },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return NextResponse.json(
        { error: "Email already exists!" },
        { status: 400 }
      );
    }

    const passwordHashed = await bcrypt.hash(password, 10);
    const createUser = await prisma.user.create({
      data: {
        email: email,
        password: passwordHashed,
      },
    });
    return NextResponse.json(createUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
