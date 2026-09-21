/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/operation-liftoff" : "",
  assetPrefix: isProd ? "/operation-liftoff/" : "",
};

export default nextConfig;