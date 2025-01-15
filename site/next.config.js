/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'MaleNurse Kasm Repo',
    description: 'Custom Kasm images',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/malenurse/KasmRepo/',
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
