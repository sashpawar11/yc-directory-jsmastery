import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* config options here */
  
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
      domains: ['avatars.githubusercontent.com'],
  },
  
}

export default nextConfig;
