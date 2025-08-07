// next.config.js
const nextConfig = {
  async redirects() {
    return [
      {
        source: 'https://r10magicfootball.com/:path*',
        destination: 'https://www.r10magicfootball.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
