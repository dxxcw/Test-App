/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY:
      process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY,
  },
};

module.exports = nextConfig;
