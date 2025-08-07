/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "r10magicfootball.com",
          },
        ],
        destination: "https://www.r10magicfootball.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
