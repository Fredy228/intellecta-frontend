/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_URL: process.env.NEXT_URL,
    SERVER_URL: process.env.SERVER_URL,
    SERVER_WEBSOCKET: process.env.SERVER_WEBSOCKET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    TURN_SERVER_URL: process.env.TURN_SERVER_URL,
    TURN_SERVER_USER: process.env.TURN_SERVER_USER,
    TURN_SERVER_PASSWORD: process.env.TURN_SERVER_PASSWORD,
  },
  images: {
    remotePatterns: [
      {
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
