import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/links',
        has: [
          {
            type: 'host',
            value: '^(www\\.)?manualdobruxo\\.com\\.br$',
          },
        ],
        destination: 'https://www.manualdobruxo.com.br',
        permanent: false, // true para 308 (permanente), false para 307 (temporário)
      }
    ];
  }
};

export default nextConfig;
