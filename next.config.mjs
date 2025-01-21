/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => [
        {
            source: "/api/:path*",
            destination: "http://127.0.0.1:5001/api/:path*", // Proxy to Backend
        },
    ]
};

export default nextConfig;
