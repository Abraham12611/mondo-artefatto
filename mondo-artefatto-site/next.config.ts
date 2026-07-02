import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    qualities: [90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
  },
};

export default nextConfig;
