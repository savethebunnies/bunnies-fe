import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export async function GET(req, { params }) {
  try {
    const { id } = params;
    console.log(id, "서버에 보낼 id");
    const rabbit = await prisma.rabbit.findUnique({ where: { id } });
    return NextResponse.json(rabbit, { status: 200 });
  } catch (error) {
    console.error("Error fetching rabbit:", error);
    return NextResponse.json(
      { message: "Failed to fetch rabbit.", error: error.message },
      { status: 500 } // Internal Server Error
    );
  }
}
