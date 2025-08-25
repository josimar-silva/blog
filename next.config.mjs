/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'dist/blog',
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
}

export default nextConfig
