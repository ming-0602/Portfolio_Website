// 'use client'
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import Image from "next/image";
// import Head from 'next/head';
// import Navbar from "@/components/Navbar";
// import ProfilePic from '../../public/83706955.jpg'
// import WorkSection from "@/components/WorkSection";
// import ExperienceSection from "@/components/ExperienceSection";
// import BackToTop from "@/components/BacktoTop";
// import Footer from "@/components/Footer";
//
// export default function Home() {
//     const [isLoading, setIsLoading] = useState(true);
//
//     useEffect(() => {
//         document.body.style.overflow = 'hidden';
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//             document.body.style.overflow = 'auto';
//         }, 3000);
//         return () => {
//             clearTimeout(timer);
//             document.body.style.overflow = 'auto';
//         };
//     }, []);
//
//     return (
//         <div className="bg-white flex flex-col">
//             <Head>
//                 <title>Ming Xuan - Portfolio</title>
//             </Head>
//             <AnimatePresence>
//                 {isLoading && (
//                     <motion.div
//                         key="intro"
//                         initial={{opacity: 1}}
//                         exit={{opacity: 0}}
//                         transition={{duration: 0.5}}
//                         className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
//                     >
//                         <motion.div
//                             className="absolute top-0 h-1 bg-black"
//                             initial={{width: '0%'}}
//                             animate={{width: '100%'}}
//                             transition={{duration: 2.5, ease: 'easeInOut'}}
//                         />
//                         <motion.h1
//                             className="text-4xl md:text-6xl font-serif text-black"
//                             initial={{opacity: 0, y: 20}}
//                             animate={{opacity: 1, y: 0}}
//                             exit={{opacity: 0, y: -20}}
//                             transition={{duration: 1, delay: 0.5}}
//                         >
//                             Welcome to my portfolio
//                         </motion.h1>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//             <Navbar className="mb-0 pb-0"/>
//             <BackToTop />
//             {/* Top Section */}
//             <section
//                 className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 min-h-[85vh] md:min-h-[90vh] pt-4 md:pt-8 bg-[#F5F5F5]"
//             >
//                 {/* Left Side: Text Content */}
//                 <div className="w-full xl:w-1/2 flex items-center justify-center py-4 md:py-6">
//                     <div className="space-y-4 md:space-y-6 max-w-[638px]">
//                         <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-black flex flex-col sm:flex-row sm:space-x-4">
//                             <span>Ming Xuan</span>
//                         </h1>
//                         <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black">
//                             Graduate Software Engineer
//                         </h2>
//                         <p className="text-lg sm:text-xl md:text-2xl font-serif text-black">
//                             2025 Grad | Full-Stack Developer
//                         </p>
//                         <a
//                             href="#projects"
//                             className="inline-block bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl hover:bg-gray-800 transition"
//                         >
//                             View Projects
//                         </a>
//                         <a
//                             href="/Ming_Xuan_LEONG_CV.docx"
//                             download
//                             className="inline-block text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl transition text-center"
//                         >
//                             Download CV
//                         </a>
//                     </div>
//                 </div>
//
//                 {/* Right Side: Profile Picture - Hidden on smaller screens */}
//                 <div className="hidden xl:flex w-full md:w-1/2 items-center justify-center">
//                     <div className="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] aspect-square">
//                         <Image
//                             src={ProfilePic}
//                             alt="Ming Xuan Profile Picture"
//                             width={600}
//                             height={600}
//                             className="object-cover w-full h-full rounded-lg"
//                         />
//                     </div>
//                 </div>
//             </section>
//
//             {/* Curve Divider */}
//             <div className="w-full h-24 bg-[#F5F5F5]">
//                 <svg
//                     viewBox="0 0 1440 100"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     preserveAspectRatio="none"
//                     className="w-full h-full"
//                 >
//                     <path
//                         d="M0 100 C360 0 1080 0 1440 100 L1440 100 L0 100 Z"
//                         fill="#ffffff" // Matches the bg-white of the section
//                     />
//                 </svg>
//             </div>
//
//             {/* My Skills Section */}
//             <section className="bg-white py-6 sm:py-8 lg:py-10 mt-0 pt-0">
//                 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                     <motion.h2
//                         className="text-3xl sm:text-4xl font-serif text-gray-900 text-center"
//                         initial={{opacity: 0, y: 20}}
//                         whileInView={{opacity: 1, y: 0}}
//                         transition={{duration: 0.5}}
//                         viewport={{once: true}}
//                     >
//                         My Skills
//                     </motion.h2>
//                     <div className="mt-4 sm:mt-6">
//                         {/* Tech Stack */}
//                         <motion.h3
//                             className="text-xl sm:text-2xl font-serif text-gray-900 text-center"
//                             initial={{opacity: 0, y: 20}}
//                             whileInView={{opacity: 1, y: 0}}
//                             transition={{duration: 0.5, delay: 0.2}}
//                             viewport={{once: true}}
//                         >
//                             Tech Stack
//                         </motion.h3>
//                         <div className="mt-4 flex flex-wrap gap-x-6 gap-y-6 sm:gap-x-8 lg:gap-x-10 justify-center">
//                             {[
//                                 {
//                                     src: "/react.png",
//                                     alt: "React",
//                                     scale: "scale-100",
//                                 },
//                                 {
//                                     src: "https://cdn.worldvectorlogo.com/logos/nextjs-13.svg",
//                                     alt: "NextJS",
//                                     scale: "scale-100",
//                                 },
//                                 {
//                                     src: "https://blog.appseed.us/content/images/2021/08/icons-flask-x500w.png",
//                                     alt: "Flask",
//                                     scale: "scale-150",
//                                 },
//                                 {
//                                     src: "https://pypi-camo.freetls.fastly.net/f6cae0b8a7814abdafd9c6de99569205b1fcc307/68747470733a2f2f666173746170692e7469616e676f6c6f2e636f6d2f696d672f6c6f676f2d6d617267696e2f6c6f676f2d7465616c2e706e67",
//                                     alt: "FastAPI",
//                                     scale: "scale-110",
//                                 },
//                                 {
//                                     src: "https://ml.globenewswire.com/Resource/Download/3c75ee39-4180-4dae-b43f-91b61934d852",
//                                     alt: "Docker",
//                                     scale: "scale-110",
//                                 },
//                                 {
//                                     src: "https://www.opentext.com/assets/images/partners/opentext-aws-logo-cover-416x274.png",
//                                     alt: "AWS",
//                                     scale: "scale-110",
//                                 },
//                                 {
//                                     src: "https://webapp.io/blog/content/images/2021/03/logo-title-opengraph.png",
//                                     alt: "Jenkins",
//                                     scale: "scale-140",
//                                 },
//                                 {
//                                     src: "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2022-03/black.png",
//                                     alt: "MongoDB",
//                                     scale: "scale-110",
//                                 },
//                                 {
//                                     src: "https://static-00.iconduck.com/assets.00/kafka-icon-2048x935-cvu4503l.png",
//                                     alt: "Kafka",
//                                     scale: "scale-110",
//                                 },
//                                 {
//                                     src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Svelte-kit-horizontal.svg/2560px-Svelte-kit-horizontal.svg.png",
//                                     alt: "SvelteKit",
//                                     scale: "scale-110",
//                                 },
//                                 {
//                                     src: "https://logos-download.com/wp-content/uploads/2023/02/Supabase_Logo.png",
//                                     alt: "Supabase",
//                                     scale: "scale-110",
//                                 },
//                                 {
//                                     src: "https://www.fast2.tech/images/connectors/sql-logo.webp",
//                                     alt: "SQL",
//                                     scale: "scale-110",
//                                 },
//                                 {
//                                     src: "https://logos-download.com/wp-content/uploads/2021/01/Git_Logo_full.png",
//                                     alt: "GIT",
//                                     scale: "scale-110",
//                                 },
//                                 {
//                                     src: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
//                                     alt: "NodeJs",
//                                     scale: "scale-270",
//                                 },
//
//
//                             ].map((item, index) => (
//                                 <motion.div
//                                     key={item.alt}
//                                     className="w-[120px] h-[36px] flex items-center justify-center"
//                                     initial={{opacity: 0, y: 20}}
//                                     whileInView={{opacity: 1, y: 0}}
//                                     transition={{duration: 0.5, delay: index * 0.1}}
//                                     viewport={{once: true}}
//                                     whileHover={{scale: 1.1}}
//                                 >
//                                     <Image
//                                         className={`w-full h-full object-contain ${item.scale}`}
//                                         src={item.src}
//                                         alt={item.alt}
//                                     />
//                                 </motion.div>
//                             ))}
//                         </div>
//
//                         {/* Technical Languages */}
//                         <motion.h3
//                             className="text-xl sm:text-2xl font-serif text-gray-900 text-center mt-6"
//                             initial={{opacity: 0, y: 20}}
//                             whileInView={{opacity: 1, y: 0}}
//                             transition={{duration: 0.5, delay: 0.8}}
//                             viewport={{once: true}}
//                         >
//                             Technical Languages
//                         </motion.h3>
//                         <div className="mt-4 flex flex-wrap gap-x-6 gap-y-6 sm:gap-x-8 lg:gap-x-10 justify-center">
//                             {[
//                                 {
//                                     src: "https://images.seeklogo.com/logo-png/18/2/python-logo-png_seeklogo-183760.png",
//                                     alt: "Python",
//                                     scale: "scale-300",
//                                 },
//                                 {
//                                     text: "JAVA",
//                                     alt: "Java",
//                                 },
//                                 {
//                                     src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
//                                     alt: "JavaScript",
//                                     scale: "scale-110",
//                                 },
//
//
//                             ].map((item, index) => (
//                                 <motion.div
//                                     key={item.alt}
//                                     className="w-[120px] h-[36px] flex items-center justify-center"
//                                     initial={{opacity: 0, y: 20}}
//                                     whileInView={{opacity: 1, y: 0}}
//                                     transition={{duration: 0.5, delay: (index + 2) * 0.1}}
//                                     viewport={{once: true}}
//                                     whileHover={{scale: 1.1}}
//                                 >
//                                     {item.src ? (
//                                         <Image
//                                             className={`w-full h-full object-contain ${item.scale}`}
//                                             src={item.src}
//                                             alt={item.alt}
//                                         />
//                                     ) : (
//                                         <span className="text-gray-900 text-4xl font-semibold">{item.text}</span>
//                                     )}
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Projects Section */}
//             <WorkSection />
//
//             <ExperienceSection />
//
//             <Footer />
//         </div>
//     );
// }

'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Head from 'next/head';
import Navbar from "@/components/Navbar";
// import ProfilePic from '../../public/83706955.jpg'
import ProfilePic from '../../public/upscalemedia-transformed (1).jpeg'
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import BackToTop from "@/components/BacktoTop";
import Footer from "@/components/Footer";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';
        }, 3000);
        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="bg-white flex flex-col">
            <Head>
                <title>Ming Xuan Leong - Portfolio</title>
            </Head>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="intro"
                        initial={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
                    >
                        <motion.div
                            className="absolute top-0 h-1 bg-black"
                            initial={{width: '0%'}}
                            animate={{width: '100%'}}
                            transition={{duration: 2.5, ease: 'easeInOut'}}
                        />
                        <motion.h1
                            className="text-4xl md:text-6xl font-serif text-black"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 1, delay: 0.5}}
                        >
                            Welcome to my portfolio
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
            <Navbar className="mb-0 pb-0"/>
            <BackToTop />
            {/* Top Section */}
            <section
                className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 min-h-[85vh] md:min-h-[90vh] pt-4 md:pt-8 bg-[#F5F5F5]"
            >
                {/* Left Side: Text Content */}
                <div className="w-full xl:w-1/2 flex items-center justify-center py-4 md:py-6">
                    <div className="space-y-4 md:space-y-6 max-w-[638px]">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-black flex flex-col sm:flex-row sm:space-x-4">
                            <span>Ming Xuan Leong</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black">
                            Graduate Software Engineer
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl font-serif text-black">
                            2025 Grad | Full-Stack Developer
                        </p>
                        <a
                            href="#projects"
                            className="inline-block bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl hover:bg-gray-800 transition"
                        >
                            View Projects
                        </a>
                        <a
                            href="/Ming_Xuan_LEONG_CV.docx"
                            download
                            className="inline-block text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl transition text-center"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Right Side: Profile Picture - Hidden on smaller screens */}
                <div className="hidden xl:flex w-full md:w-1/2 items-center justify-center">
                    <div className="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] aspect

-square">
                        <Image
                            src={ProfilePic}
                            alt="Ming Xuan Profile Picture"
                            width={600}
                            height={600}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Curve Divider */}
            <div className="w-full h-24 bg-[#F5F5F5]">
                <svg
                    viewBox="0 0 1440 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <path
                        d="M0 100 C360 0 1080 0 1440 100 L1440 100 L0 100 Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>

            {/* My Skills Section */}
            <section className="bg-white py-6 sm:py-8 lg:py-10 mt-0 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-serif text-gray-900 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        My Skills
                    </motion.h2>
                    <div className="mt-4 sm:mt-6">
                        {/* Tech Stack */}
                        <motion.h3
                            className="text-xl sm:text-2xl font-serif text-gray-900 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Tech Stack
                        </motion.h3>
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-6 sm:gap-x-8 lg:gap-x-10 justify-center">
                            {[
                                {
                                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Lnm0K-Cbz4eTj44xNdkW0c1dk4Jl2Xe1qw&s",
                                    alt: "React",
                                    scale: "scale-100",
                                },
                                {
                                    src: "https://cdn.worldvectorlogo.com/logos/nextjs-13.svg",
                                    alt: "NextJS",
                                    scale: "scale-100",
                                },
                                {
                                    src: "https://blog.appseed.us/content/images/2021/08/icons-flask-x500w.png",
                                    alt: "Flask",
                                    scale: "scale-150",
                                },
                                {
                                    src: "https://pypi-camo.freetls.fastly.net/f6cae0b8a7814abdafd9c6de99569205b1fcc307/68747470733a2f2f666173746170692e7469616e676f6c6f2e636f6d2f696d672f6c6f676f2d6d617267696e2f6c6f676f2d7465616c2e706e67",
                                    alt: "FastAPI",
                                    scale: "scale-110",
                                },
                                {
                                    src: "https://ml.globenewswire.com/Resource/Download/3c75ee39-4180-4dae-b43f-91b61934d852",
                                    alt: "Docker",
                                    scale: "scale-110",
                                },
                                {
                                    src: "https://www.opentext.com/assets/images/partners/opentext-aws-logo-cover-416x274.png",
                                    alt: "AWS",
                                    scale: "scale-110",
                                },
                                {
                                    src: "https://webapp.io/blog/content/images/2021/03/logo-title-opengraph.png",
                                    alt: "Jenkins",
                                    scale: "scale-140",
                                },
                                {
                                    src: "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2022-03/black.png",
                                    alt: "MongoDB",
                                    scale: "scale-110",
                                },
                                {
                                    src: "https://static-00.iconduck.com/assets.00/kafka-icon-2048x935-cvu4503l.png",
                                    alt: "Kafka",
                                    scale: "scale-110",
                                },
                                {
                                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Svelte-kit-horizontal.svg/2560px-Svelte-kit-horizontal.svg.png",
                                    alt: "SvelteKit",
                                    scale: "scale-110",
                                },
                                {
                                    src: "https://logos-download.com/wp-content/uploads/2023/02/Supabase_Logo.png",
                                    alt: "Supabase",
                                    scale: "scale-110",
                                },
                                {
                                    src: "https://www.fast2.tech/images/connectors/sql-logo.webp",
                                    alt: "SQL",
                                    scale: "scale-110",
                                },
                                {
                                    src: "https://logos-download.com/wp-content/uploads/2021/01/Git_Logo_full.png",
                                    alt: "GIT",
                                    scale: "scale-110",
                                },
                                {
                                    src: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
                                    alt: "NodeJs",
                                    scale: "scale-270",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.alt}
                                    className="w-[120px] h-[36px] flex items-center justify-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Image
                                        className={`w-full h-full object-contain ${item.scale}`}
                                        src={item.src}
                                        alt={item.alt}
                                        width={120}
                                        height={36}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Technical Languages */}
                        <motion.h3
                            className="text-xl sm:text-2xl font-serif text-gray-900 text-center mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Technical Languages
                        </motion.h3>
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-6 sm:gap-x-8 lg:gap-x-10 justify-center">
                            {[
                                {
                                    // src: "https://www.pngegg.com/en/png-cmbei",
                                    text: "Python",
                                    alt: "Python",
                                    // scale: "scale-300",
                                },
                                {
                                    text: "JAVA",
                                    alt: "Java",
                                },
                                {
                                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
                                    alt: "JavaScript",
                                    scale: "scale-110",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.alt}
                                    className="w-[120px] h-[36px] flex items-center justify-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item.src ? (
                                        <Image
                                            className={`w-full h-full object-contain ${item.scale}`}
                                            src={item.src}
                                            alt={item.alt}
                                            width={120}
                                            height={36}
                                        />
                                    ) : (
                                        <span className="text-gray-900 text-4xl font-semibold">{item.text}</span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <WorkSection />

            <ExperienceSection />

            <Footer />
        </div>
    );
}