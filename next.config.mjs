/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Old portal URLs now land on the public site.
  async redirects() {
    return ['/customers', '/investor', '/investor-area', '/login', '/login-customer'].map((source) => ({
      source,
      destination: '/',
      permanent: false,
    }))
  },
}

export default nextConfig
