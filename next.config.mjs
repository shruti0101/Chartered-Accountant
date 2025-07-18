/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // ✅ Disable Next.js Image Optimization
  },
};

export default nextConfig;
