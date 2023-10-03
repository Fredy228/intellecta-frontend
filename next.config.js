/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_URL: process.env.NEXT_URL,
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    domains: [
      "localhost",
      "static.thairath.co.th",
      "195.138.86.82",
      "fredytest.kyiv.ua",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

module.exports = nextConfig;
