import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GEMINI_TOKEN: process.env.GEMINI_TOKEN,
  },
  reactCompiler: true,
};

export default nextConfig;
