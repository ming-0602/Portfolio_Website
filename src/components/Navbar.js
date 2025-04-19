'use client'

import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between py-4 px-4 sm:px-6 border-b border-gray-200 bg-white">
            {/* Logo */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 whitespace-nowrap">
                Ming Xuan’s Portfolio
            </div>

            {/* Navigation Links - Hidden on mobile, visible on md and up */}
            <div className="hidden lg:flex items-center space-x-6 lg:space-x-10">
                <a href="#experience" className="text-lg md:text-xl lg:text-2xl font-serif text-gray-900 hover:text-gray-700">
                    Experience
                </a>
                <a href="#projects" className="text-lg md:text-xl lg:text-2xl font-serif text-gray-900 hover:text-gray-700">
                    Projects
                </a>
                <a href="#contact" className="text-lg md:text-xl lg:text-2xl font-serif text-gray-900 hover:text-gray-700">
                    Contact
                </a>
                <a
                    href="https://github.com/ming-0602"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-300 text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-xl text-lg md:text-xl lg:text-2xl font-serif hover:bg-zinc-400 transition"
                >
                    GitHub
                </a>
            </div>

            {/* Hamburger Button - Visible on mobile only */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-900 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu - Expands when hamburger is clicked */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 flex flex-col items-center space-y-4 py-4 md:hidden">
                    <a href="#experience" className="text-xl font-serif text-gray-900 hover:text-gray-700" onClick={() => setIsOpen(false)}>
                        Experience
                    </a>
                    <a href="#projects" className="text-xl font-serif text-gray-900 hover:text-gray-700" onClick={() => setIsOpen(false)}>
                        Projects
                    </a>
                    <a href="#contact" className="text-xl font-serif text-gray-900 hover:text-gray-700" onClick={() => setIsOpen(false)}>
                        Contact
                    </a>
                    <a
                        href="https://github.com/ming-0602"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-300 text-gray-900 px-6 py-3 rounded-xl text-xl font-serif hover:bg-zinc-400 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        GitHub
                    </a>
                </div>
            )}
        </nav>
    );
}