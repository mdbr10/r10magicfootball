import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/links',
        has: [
          {
            type: 'host',
            value: '^(www\\.)?r10magicfootball\\.com\\$',
          },
        ],
        destination: 'https://www.r10magicfootball.com',
        permanent: false, // true para 308 (permanente), false para 307 (temporário)
      }
    ];
  }
};

export default nextConfig;
