/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Leave empty if only loading images from 'public' directory
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
