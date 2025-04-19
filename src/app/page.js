'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import ProfilePic from '../../public/83706955.jpg'

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
                <title>Ming Xuan - Portfolio</title>
            </Head>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
                    >
                        <motion.div
                            className="absolute top-0 h-1 bg-black"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2.5, ease: 'easeInOut' }}
                        />
                        <motion.h1
                            className="text-4xl md:text-6xl font-serif text-black"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Welcome to my portfolio
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
            <Navbar className="mb-0 pb-0" />
            {/* Top Section */}
            <section
                className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 min-h-[85vh] md:min-h-[90vh] pt-4 md:pt-8"
            >
                {/* Left Side: Text Content */}
                <div className="w-full xl:w-1/2 flex items-center justify-center py-4 md:py-6">
                    <div className="space-y-4 md:space-y-6 max-w-[638px]">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-black flex flex-col sm:flex-row sm:space-x-4">
                            <span>Ming Xuan</span>
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
                    </div>
                </div>

                {/* Right Side: Profile Picture - Hidden on smaller screens */}
                <div className="hidden xl:flex w-full md:w-1/2 items-center justify-center">
                    <div className="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] aspect-square">
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

            {/* Bottom Section*/}
            <section className="bg-white py-6 sm:py-8 lg:py-10 border-t border-gray-200 mt-0 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl sm:text-4xl font-serif text-gray-900">
                        Tooling and Techs
                    </h2>
                    <div className="border border-black p-4 mt-4 sm:mt-6">
                        <div
                            className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-6 sm:max-w-xl sm:grid-cols-6 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px]">
                                    <img
                                        className="w-full h-full object-contain"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Lnm0K-Cbz4eTj44xNdkW0c1dk4Jl2Xe1qw&s"
                                        alt="React"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px]">
                                    <img
                                        className="w-full h-full object-contain"
                                        src="https://cdn.worldvectorlogo.com/logos/nextjs-13.svg"
                                        alt="NextJS"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px]">
                                    <img
                                        src="https://images.seeklogo.com/logo-png/18/2/python-logo-png_seeklogo-183760.png"
                                        alt="Python"
                                        className="w-full h-full scale-300 object-contain"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-start-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px] flex items-center justify-center">
                                    <span className="text-gray-900 text-4xl font-semibold">JAVA</span>
                                </div>
                            </div>
                            <div
                                className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px]">
                                    <img
                                        className="w-full h-full scale-150 object-contain"
                                        src="https://blog.appseed.us/content/images/2021/08/icons-flask-x500w.png"
                                        alt="Flask"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-6 sm:max-w-xl sm:grid-cols-6 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px]">
                                    <img
                                        className="w-full h-full scale-110 object-contain"
                                        src="https://pypi-camo.freetls.fastly.net/f6cae0b8a7814abdafd9c6de99569205b1fcc307/68747470733a2f2f666173746170692e7469616e676f6c6f2e636f6d2f696d672f6c6f676f2d6d617267696e2f6c6f676f2d7465616c2e706e67"
                                        alt="FastAPI"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px]">
                                    <img
                                        className="w-full h-full scale-140 object-contain"
                                        src="https://webapp.io/blog/content/images/2021/03/logo-title-opengraph.png"
                                        alt="Jenkins"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px]">
                                    <img
                                        className="w-full h-full scale-110 object-contain"
                                        src="https://ml.globenewswire.com/Resource/Download/3c75ee39-4180-4dae-b43f-91b61934d852"
                                        alt="Docker"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-start-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px]">
                                    <img
                                        className="w-full h-full scale-110 object-contain"
                                        src="https://www.opentext.com/assets/images/partners/opentext-aws-logo-cover-416x274.png"
                                        alt="AWS"
                                    />
                                </div>
                            </div>
                            <div
                                className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 flex items-center justify-center">
                                <div className="w-[120px] h-[36px]">
                                    <img
                                        className="w-full h-full object-contain"
                                        src="https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2022-03/black.png"
                                        alt="MongoDB"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}