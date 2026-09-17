/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
 output: 'export',
  images: { unoptimized: true }, 
  basePath: '/operation-liftoff', // Tells Next.js we are in a sub-folder on GitHub
  assetPrefix: '/operation-liftoff/',
};

export default nextConfig;
