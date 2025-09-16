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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        {
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        }, // <Icon />
        { type: "asset/resource" }, // icon.svg?url  → URL 문자열
      ],
    });
    return config;
  },
};

export default nextConfig;
