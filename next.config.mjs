/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/terminos", destination: "/aviso-legal", permanent: true }]
  },
}

export default nextConfig
