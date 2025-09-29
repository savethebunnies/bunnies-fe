/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 3. bodySizeLimit 설정
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://3.39.22.34:3000/api/:path*",
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        hostname: "savethebunnies-images.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
  // },
  webpack(config, { dev }) {
    if (dev) config.cache = false;

    config.module.rules.unshift({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
