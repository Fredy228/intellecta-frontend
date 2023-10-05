/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_URL: process.env.NEXT_URL,
    SERVER_URL: process.env.SERVER_URL,
    TURN_SERVER_URL: process.env.TURN_SERVER_URL,
    TURN_SERVER_USER: process.env.TURN_SERVER_USER,
    TURN_SERVER_PASSWORD: process.env.TURN_SERVER_PASSWORD,
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
