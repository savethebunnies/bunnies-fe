import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/ui/nav.jsx";
// import NextAuthSessionProvider from "@/components/providers/session-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "세이브 더 버니즈",
  description:
    "세더버는 2024년에 뜻을 함께하는 소수의 사람들이 모여 만든 유기토끼 지원 커뮤니티입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`mx-auto mt-[var(--nav-height)] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <NextAuthSessionProvider> */}
        <Nav />
        {children}
        {/* </NextAuthSessionProvider> */}
      </body>
    </html>
  );
}
