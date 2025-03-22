import type { NextConfig } from 'next';
import allowedDomains from './allowedDomains';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: allowedDomains.map(
      (domain) => ({
        protocol: 'https',
        hostname: domain,
      }),
      {
        protocol: 'http',
        hostname: 'assets.aceternity.com',
      }
    ),
  },
};

export default nextConfig;
