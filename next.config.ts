import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'ezql5rkfrsa2yeen.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
