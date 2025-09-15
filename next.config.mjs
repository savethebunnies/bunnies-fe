/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://3.39.22.34:3000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
