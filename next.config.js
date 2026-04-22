/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sweetnight.in',
        pathname: '/storage/**',
      },
    ],
  },
};

module.exports = nextConfig;
