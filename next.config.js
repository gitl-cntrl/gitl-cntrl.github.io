/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/challengeF',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/challengeF',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
