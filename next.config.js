/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  /* Permitiendo cargar las imágenes desde los dominios. */
  images: {
    domains: ["avatars.dicebear.com"],
  }
};

module.exports = nextConfig;
