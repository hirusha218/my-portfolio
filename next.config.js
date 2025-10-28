/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
}

module.exports = nextConfig
