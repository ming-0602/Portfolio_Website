// // WorkSection.jsx
// import Image from 'next/image';
// import Link from 'next/link';
//
// // Icons for links
// const GlobeIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
//     </svg>
// );
//
// const GitHubIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
//         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//     </svg>
// );
//
// const NPMIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
//         <path d="M0 0v24h24v-24h-24zm6.89 6.55h10.22v10.9h-5.11v-8.18h-2.55v8.18h-2.56v-10.9zm10.22 5.45h2.56v-2.73h-2.56v2.73z" />
//     </svg>
// );
//
// const ProjectCard = ({ title, description, imageUrl, links }) => {
//     return (
//         <div className="overflow-hidden bg-white rounded-lg shadow-lg">
//             {/* Image container with fade effect, showing full image */}
//             <div className="relative w-full h-56 p-4 rounded-xl overflow-hidden">
//                 <Image
//                     src={imageUrl}
//                     alt={title}
//                     fill
//                     className="object-contain p-2 rounded-lg overflow-hidden" // Kept p-2, added rounded-xl for clarity
//                     style={{ borderRadius: '12px' }} // Explicitly set border-radius
//                 />
//                 {/* Overlay div with fade mask */}
//                 <div
//                     className="absolute inset-0 pointer-events-none"
//                     style={{
//                         background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 75%)',
//                     }}
//                 />
//             </div>
//
//             {/* Content */}
//             <div className="p-6">
//                 <h3 className="mb-3 text-2xl font-bold text-gray-800">{title}</h3>
//                 <p className="mb-6 text-gray-700 text-justify">{description}</p>
//
//                 {/* Links */}
//                 <div className="flex space-x-4 mt-auto">
//                     {links.map((link, index) => (
//                         <Link href={link.url} key={index} className="text-gray-700 hover:text-gray-900 ">
//                             {link.type === 'website' && <GlobeIcon />}
//                             {link.type === 'github' && <GitHubIcon />}
//                             {link.type === 'npm' && <NPMIcon />}
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// const WorkSection = () => {
//     const projects = [
//         {
//             title: "AI-Driven Fraud Detection in Blockchain P2P Lending Systems",
//             description: "An AI-powered fraud detection system designed for blockchain-based peer-to-peer (P2P) lending platforms. It uses machine learning to identify fraudulent activities such as geographical fraud, loan stacking, and synthetic identities while integrating with Ethereum smart contracts to ensure secure, tamper-proof storage of lending data. The system enhances transparency and risk management in decentralized finance (DeFi).",
//             imageUrl: "/images/AI_Fraud.png",
//             links: [
//                 {type: 'github', url: 'https://github.com/FYP-AI-Blockchain-Fraud-Detection-P2P'},
//             ]
//         },
//         {
//             title: "Real-Time Stock Analytics Pipeline with Kafka and Cassandra",
//             description: "Developed a real-time stock analytics pipeline using Apache Kafka and Cassandra to stream and process high-volume stock data with low latency. Leveraged Kafka’s event-driven architec-ture to ensure reliable, fault-tolerant data ingestion. Delivered real-time insights through a FastAPI-powered REST API, supporting use cases like financial analysis and algorithmic trading. Dockerized for easy deployment and scalability.",
//             imageUrl: "/images/stock_analytics.png",
//             links: [
//                 {type: 'website', url: '#'},
//                 {type: 'github', url: '#'},
//                 {type: 'npm', url: '#'}
//             ]
//         },
//         {
//             title: "Cookiemunch",
//             description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
//             imageUrl: "/images/cookiemunch.png",
//             links: [
//                 {type: 'website', url: '#'},
//                 {type: 'github', url: '#'},
//                 {type: 'npm', url: '#'}
//             ]
//         },
//         {
//             title: "Project 4",
//             description: "Example of a fourth project to show how the grid automatically flows to the next row.",
//             imageUrl: "/images/placeholder.png",
//             links: [
//                 {type: 'website', url: '#'},
//                 {type: 'github', url: '#'}
//             ]
//         },
//         {
//             title: "Project 5",
//             description: "Example of a fifth project to demonstrate responsive grid layout.",
//             imageUrl: "/images/placeholder.png",
//             links: [
//                 {type: 'website', url: '#'},
//                 {type: 'github', url: '#'}
//             ]
//         },
//         {
//             title: "Project 6",
//             description: "Example of a sixth project showcasing how the grid automatically handles multiple rows.",
//             imageUrl: "/images/placeholder.png",
//             links: [
//                 {type: 'website', url: '#'},
//                 {type: 'npm', url: '#'}
//             ]
//         }
//     ];
//
//     return (
//         <section className="py-16 bg-gray-50">
//             <div className="container px-4 mx-auto">
//                 <div className="mb-12 text-center">
//                     <h2 className="mb-2 text-5xl font-bold text-gray-900">My Work</h2>
//                     <p className="text-xl text-gray-700">A collection of projects I've worked on.</p>
//                 </div>
//
//                 <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//                     {projects.map((project, index) => (
//                         <ProjectCard key={index} {...project} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default WorkSection;

import Image from 'next/image';
import Link from 'next/link';

// Icons for links
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const NPMIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M0 0v24h24v-24h-24zm6.89 6.55h10.22v10.9h-5.11v-8.18h-2.55v8.18h-2.56v-10.9zm10.22 5.45h2.56v-2.73h-2.56v2.73z" />
    </svg>
);

const ProjectCard = ({ title, description, imageUrl, links }) => {
    return (
        <div className="overflow-hidden bg-white rounded-lg shadow-lg flex flex-col">
            {/* Image container with fade effect, showing full image */}
            <div className="relative w-full h-56 p-4 rounded-xl overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-contain p-2 rounded-lg overflow-hidden"
                    style={{ borderRadius: '12px' }}
                />
                {/* Overlay div with fade mask */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 75%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-3 text-2xl font-bold text-gray-800">{title}</h3>
                <p className="mb-6 text-gray-700 text-justify flex-grow">{description}</p>

                {/* Links */}
                <div className="flex space-x-4 mt-auto">
                    {links.map((link, index) => (
                        <Link href={link.url} key={index} className="text-gray-700 hover:text-gray-900">
                            {link.type === 'website' && <GlobeIcon />}
                            {link.type === 'github' && <GitHubIcon />}
                            {link.type === 'npm' && <NPMIcon />}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const WorkSection = () => {
    const projects = [
        {
            title: "AI-Driven Fraud Detection in Blockchain P2P Lending Systems",
            description: "An AI-powered fraud detection system designed for blockchain-based peer-to-peer (P2P) lending platforms. It uses machine learning to identify fraudulent activities such as geographical fraud, loan stacking, and synthetic identities while integrating with Ethereum smart contracts to ensure secure, tamper-proof storage of lending data. The system enhances transparency and risk management in decentralized finance (DeFi).",
            imageUrl: "/images/AI_Fraud.png",
            links: [
                {type: 'github', url: 'https://github.com/FYP-AI-Blockchain-Fraud-Detection-P2P'},
            ]
        },
        {
            title: "Real-Time Stock Analytics Pipeline with Kafka and Cassandra",
            description: "Developed a real-time stock analytics pipeline using Apache Kafka and Cassandra to stream and process high-volume stock data with low latency. Leveraged Kafka’s event-driven architecture to ensure reliable, fault-tolerant data ingestion. Delivered real-time insights through a FastAPI-powered REST API, supporting use cases like financial analysis and algorithmic trading. Dockerized for easy deployment and scalability.",
            imageUrl: "/images/stock_analytics.png",
            links: [

                {type: 'github', url: 'https://github.com/ming-0602/Real-Time-Stock-Analytics-Pipeline-with-Kafka-and-Cassandra'},

            ]
        },
        {
            title: "Clothing E-Commerce Platform",
            description: "Built a scalable e-commerce web application using FlaskAPI, Next.js, and PostgreSQL. Applied software design patterns, microservices, and N-Tier architecture to enhance code maintainability and modularity. Reduced system coupling to support smooth feature rollouts, and optimized backend API performance to significantly improve product listing load times and overall user experience.",
            imageUrl: "/images/Clothing.png",
            links: [

                {type: 'github', url: 'https://github.com/ming-0602/SoftwareDesignPatternProjectECommerceWebsite'},

            ]
        },
        {
            title: "Real-Time Webhook Notification System – WAZP 3D (Internship)",
            description: "Developed and deployed a real-time webhook-based notification system for 3D printers using Supabase, Google Cloud, and SvelteKit. Reduced response time from 5 seconds to under 1 second and automated alerts via email and SMS, handling 30+ daily events. Leveraged asynchronous processing and serverless architecture to boost efficiency by 40% and cut cloud costs by 30%, while maintaining 99.9% uptime and scalable performance.",
            imageUrl: "/images/octo-E-messages.png",
            links: [

                {type: 'github', url: 'https://github.com/ming-060211/Octo-E-Messages?tab=readme-ov-file'}
            ]
        },
        // {
        //     title: "Project 5",
        //     description: "Example of a fifth project to demonstrate responsive grid layout.",
        //     imageUrl: "/images/placeholder.png",
        //     links: [
        //         {type: 'website', url: '#'},
        //         {type: 'github', url: '#'}
        //     ]
        // },
        // {
        //     title: "Project 6",
        //     description: "Example of a sixth project showcasing how the grid automatically handles multiple rows.",
        //     imageUrl: "/images/placeholder.png",
        //     links: [
        //         {type: 'website', url: '#'},
        //         {type: 'npm', url: '#'}
        //     ]
        // }
    ];

    return (
        <section id="projects" className="py-16 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="mb-2 text-5xl font-bold text-gray-900">My Work</h2>
                    <p className="text-xl text-gray-700">A collection of projects I've worked on.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;