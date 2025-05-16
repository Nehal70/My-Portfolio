import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {}, // ✅ no more alias, no `true`
  },
};

export default nextConfig;
