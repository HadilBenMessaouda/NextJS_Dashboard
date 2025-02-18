import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    return config;
  },
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
