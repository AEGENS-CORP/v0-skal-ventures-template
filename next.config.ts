import path from "node:path";
import type { NextConfig } from "next";

const nodemailerAlias = path.resolve(process.cwd(), "lib/vendor/nodemailer.ts");

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      nodemailer: nodemailerAlias,
    };
    return config;
  },
};

export default nextConfig;
