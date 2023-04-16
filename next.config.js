/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ntpicon', 'www.google.com'], // adicione o hostname aqui
  },
}

module.exports = nextConfig
