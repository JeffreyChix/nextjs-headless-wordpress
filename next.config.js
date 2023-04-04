/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["the-headless-blog.local", "api-headless-blog.000webhostapp.com"],
  },
};

module.exports = nextConfig;
