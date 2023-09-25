/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "static.thairath.co.th", "195.138.86.82"],
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
