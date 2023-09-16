/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tekup.vn',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig
