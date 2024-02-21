/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'uploadthing.com',
            'utfs.io',
            'img.cler.com',
            'subdomain',
            'files.stripe.com',
        ],
    },
    reactstrictMode: false,
};

export default nextConfig;
