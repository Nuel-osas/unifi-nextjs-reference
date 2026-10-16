import type { NextConfig } from "next";
const config: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  devIndicators: false,
  turbopack: { root: process.cwd() },
};
export default config;
