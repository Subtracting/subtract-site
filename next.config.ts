import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const mdx = withMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = mdx({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
});

export default nextConfig;

