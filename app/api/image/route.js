import aws from "aws-sdk";
import { NextResponse } from "next/server";

// Presigned URL 생성 및 응답
export async function POST(request) {
  const fileName = request.nextUrl.searchParams.get("file");
  const fileType = request.nextUrl.searchParams.get("type");

  if (!fileName) {
    return NextResponse.json(
      { message: "File name (query parameter 'file') is missing." },
      { status: 400 }
    );
  }
  try {
    aws.config.update({
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
      region: "ap-northeast-2",
      signatureVersion: "v4",
    });

    const s3 = new aws.S3();
    const url = s3.createPresignedPost({
      Bucket: process.env.BUCKET_NAME,
      Fields: {
        key: `temp/${fileName}`,
        "Content-Disposition": "inline",
        "Content-Type": `${fileType}`,
      },
      Expires: 60,
      Conditions: [
        ["content-length-range", 0, 5242880],
        { "Content-Disposition": "inline" },
        ["eq", "$Content-Type", `${fileType}`],
      ],
    });

    //{ url: S3의 Post 엔드포인트, fields: 보안 서명 정보 })를 JSON 형태로 클라이언트에게 응답
    return NextResponse.json(url, { status: 200 });
  } catch (error) {
    console.error("S3 Presigned URL creation failed:", error);
    return NextResponse.json(
      { message: "Failed to create presigned URL.", error: error.message },
      { status: 500 }
    );
  }
}
