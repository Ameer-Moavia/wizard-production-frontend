import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" }
    ],
    
  },
  eslint: {
    // ✅ Ignore lint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Ignores type errors during build
    ignoreBuildErrors: true,
  },
};


export default nextConfig;
