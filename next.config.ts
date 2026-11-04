import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle, used by the Docker image.
  output: "standalone",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
