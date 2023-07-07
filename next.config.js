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
        API_URL: "http://localhost:3000",
        MONGODB_LOCAL_URL: "mongodb://127.0.0.1:27017/shopDB",
        MONGODB_URL: "mongodb+srv://dilpreet90:gurvansh@cluster0.1qt1w.mongodb.net/?retryWrites=true&w=majority",
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_URL_INTERNAL:"http://127.0.0.1:3000",

        CLOUD_NAME: "de85k1zrs",
        CLOUDINARY_API_KEY: "848652711997862",
        CLOUDINARY_API_SECRET: "DkEu9e8qf3ejTd1XilbcrvEcHxk",

        STRIPE_PUBLIC_KEY: "pk_test_51NMu09SAtJPzp09SoHmEj6bydH4m0CUopFghqgqsAqfdQcfXRY1bq64iDHc42ombA0bJFUP1G6GRgd23vyEut6Ko00jqUXfZso",
        STRIPE_PRIVATE_KEY: "sk_test_51NMu09SAtJPzp09SISazt6CIPWMEUCrPlkDJS6sTpXdtGzMn9d5LfwmVxvpWLJeqaFDh2hONyQSc0TktHVkiDlGS00KrpI6aOv",

        STRIPE_WEBHOOK_SECRET: "whsec_ff8bcdb0b7353b9156ee29ebf4a411b1f7f9e62e89c326043eaf5f828addb123",

        NEXTAUTH_SECRET: "dilpreet90",
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
}

module.exports = nextConfig
