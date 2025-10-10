import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export async function POST(request) {
  try {
    const body = await request.json();

    // 예시: body에서 title과 content를 추출
    const {
      name,
      condition,
      gender,
      age,
      weight,
      character,
      location,
      date,
      ect,
      neutered,
      images,
    } = body;

    // 2. 데이터 유효성 검사 (필수)
    if (
      !name ||
      !age ||
      !condition ||
      !gender ||
      !weight ||
      !character ||
      !location ||
      !neutered ||
      !date ||
      !images
    ) {
      return NextResponse.json(
        {
          message:
            "필수 입력 항목(condition, gender, weight, character, location, date, images)이 누락되었습니다.",
        },
        { status: 400 } // Bad Request
      );
    }

    // 3. Prisma를 사용하여 Supabase DB에 데이터 생성
    const newPost = await prisma.rabbit.create({
      data: {
        name,
        age,
        condition,
        gender,
        neutered,
        weight,
        character,
        location,
        date,
        ect: ect || null,
        images: JSON.parse(images),
      },
    });

    // 4. 성공 응답 반환
    return NextResponse.json(newPost, { status: 201 }); // 201 Created
  } catch (error) {
    console.error("Error creating post:", error);

    // 5. 에러 응답 반환
    return NextResponse.json(
      { message: "Failed to create post.", error: error.message },
      { status: 500 } // Internal Server Error
    );
  }
}

export async function GET() {
  try {
    // 1. Prisma를 사용하여 Supabase DB에서 모든 Rabbit 레코드 조회
    const rabbits = await prisma.rabbit.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(rabbits, { status: 200 });
  } catch (error) {
    console.error("Error fetching rabbits:", error);

    // 5. 에러 응답 반환
    return NextResponse.json(
      { message: "Failed to fetch rabbits.", error: error.message },
      { status: 500 } // Internal Server Error
    );
  }
}
