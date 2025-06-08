import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  /* config options here */

  domains: ['fakestoreapi.com'],

  // Untuk NextAuth.js
  serverActions: true,
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}

export default nextConfig
