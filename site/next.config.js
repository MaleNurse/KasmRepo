/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'MaleNurse Kasm Repo',
    description: 'Custom Kasm images',
    icon: 'https://malenurse.github.io/KasmRepo/1.0/wine.png ',
    listUrl: 'https://malenurse.github.io/KasmRepo/',
    contactUrl: 'https://github.com/malenurse/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/KasmRepo/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
