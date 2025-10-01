import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/ui/nav.jsx";
import { QueryProvider } from "@/components/providers/query-provider";
import NextAuthSessionProvider from "@/components/providers/session-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://savethebunnies.kr"),

  title: "세이브 더 버니즈",
  description: "유기토끼 지원 커뮤니티 세더버",

  openGraph: {
    type: "website",
    url: "https://savethebunnies.kr",
    siteName: "세이브 더 버니즈",
    title: "세이브 더 버니즈",
    description: "유기토끼 지원 커뮤니티 세더버",
    images: [
      {
        url: "https://savethebunnies-images.s3.ap-northeast-2.amazonaws.com/images/bunnies_img.png",
        width: 1200,
        height: 630,
        alt: "세더버 유기토끼 커뮤니티",
      },
    ],
    locale: "ko_KR",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  keywords: ["세더버", "세이브 더 버니즈", "유기토끼", "입양", "임보"],
};

export default async function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`mx-auto mt-[var(--nav-height)] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthSessionProvider>
          <QueryProvider>
            <Nav />
            {children}
          </QueryProvider>
        </NextAuthSessionProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
