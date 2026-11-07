/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    deviceSizes: [480, 768, 1024, 1440, 1920],
    imageSizes: [64, 128, 256, 384]
  }
};

export default nextConfig;
