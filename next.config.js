const isChallengeF = process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.endsWith('/challengeF');
const basePath = isChallengeF ? '/challengeF' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
