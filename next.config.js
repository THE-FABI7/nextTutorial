/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images:{
    domains: ['avatars.dicebear.com']
  }
};

module.exports = nextConfig;
