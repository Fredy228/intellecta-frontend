/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_URL: process.env.NEXT_URL,
    SERVER_URL: process.env.SERVER_URL,
    SERVER_WEBSOCKET: process.env.SERVER_WEBSOCKET,
    SERVER_AUTH_URL: process.env.SERVER_AUTH_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "intellecta.com.ua",
      },
      {
        protocol: "https",
        hostname: "fredytest.kyiv.ua",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
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
