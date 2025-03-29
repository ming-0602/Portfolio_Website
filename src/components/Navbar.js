export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
            {/* Logo */}
            <div className="text-4xl font-serif text-gray-900">
                Ming Xuan’s Portfolio
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-10">
                <a href="#experience" className="text-2xl font-serif text-gray-900">
                    Experience
                </a>
                <a href="#projects" className="text-2xl font-serif text-gray-900">
                    Projects
                </a>
                <a href="#contact" className="text-2xl font-serif text-gray-900">
                    Contact
                </a>
                <a
                    href="https://github.com/ming-0602"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-300 text-gray-900 px-6 py-3 rounded-xl text-2xl font-serif hover:bg-zinc-400 transition"
                >
                    GitHub
                </a>
            </div>
        </nav>
    );
}