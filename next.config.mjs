/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 👈 This enables static export
  images: {
    unoptimized: true, // ✅ disables server-based image optimization
  },
};

export default nextConfig;