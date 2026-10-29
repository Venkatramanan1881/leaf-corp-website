/** @type {import('next').NextConfig} */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = root;
    return config;
  },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'static.wixstatic.com', pathname: '/media/**' }],
  },
};
export default nextConfig;
