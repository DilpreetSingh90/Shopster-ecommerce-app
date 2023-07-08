/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true }
        return config
      },
    env:{

    },
    images: {
        domains: ["res.cloudinary.com"],
    },
}

module.exports = nextConfig
