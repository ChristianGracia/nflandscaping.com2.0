/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: process.env.NODE_ENV === "production",
};
