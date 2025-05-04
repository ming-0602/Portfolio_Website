/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//             'encrypted-tbn0.gstatic.com', // For React image
//             'cdn.worldvectorlogo.com', // For NextJS
//             'blog.appseed.us', // For Flask
//             'pypi-camo.freetls.fastly.net', // For FastAPI
//             'ml.globenewswire.com', // For Docker
//             'www.opentext.com', // For AWS
//             'webapp.io', // For Jenkins
//             'www.ovhcloud.com', // For MongoDB
//             'static-00.iconduck.com', // For Kafka
//             'upload.wikimedia.org', // For SvelteKit, JavaScript
//             'logos-download.com', // For Supabase, GIT
//             'www.fast2.tech', // For SQL
//             'www.svgrepo.com', // For NodeJs
//             'images.seeklogo.com', // For Python
//         ],
//     },
// };

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.worldvectorlogo.com',
            },
            {
                protocol: 'https',
                hostname: 'blog.appseed.us',
            },
            {
                protocol: 'https',
                hostname: 'pypi-camo.freetls.fastly.net',
            },
            {
                protocol: 'https',
                hostname: 'ml.globenewswire.com',
            },
            {
                protocol: 'https',
                hostname: 'www.opentext.com',
            },
            {
                protocol: 'https',
                hostname: 'webapp.io',
            },
            {
                protocol: 'https',
                hostname: 'www.ovhcloud.com',
            },
            {
                protocol: 'https',
                hostname: 'static-00.iconduck.com',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'logos-download.com',
            },
            {
                protocol: 'https',
                hostname: 'www.fast2.tech',
            },
            {
                protocol: 'https',
                hostname: 'www.svgrepo.com',
            },
            {
                protocol: 'https',
                hostname: 'www.python.org', // Added for Python logo
            },
            {
                protocol: 'https',
                hostname: 'images.seeklogo.com', // Added for fallback
            },
            {
                protocol: 'https',
                hostname: 'www.pngegg.com',
            }
        ],
    },
    allowedDevOrigins: [
        '192.168.253.54', // Allow cross-origin requests from this IP during development
    ],
};

export default nextConfig;
