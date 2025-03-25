export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
            {/* Logo */}
            <div className="text-4xl font-normal text-gray-900">
                Ming Xuan’s Portfolio
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-10">
                <a href="#experience" className="text-2xl font-normal text-gray-900">
                    Experience
                </a>
                <a href="#projects" className="text-2xl font-normal text-gray-900">
                    Projects
                </a>
                <a href="#contact" className="text-2xl font-normal text-gray-900">
                    Contact
                </a>
                <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-300 text-gray-900 px-6 py-3 rounded-xl text-2xl font-normal hover:bg-zinc-400 transition"
                >
                    GitHub
                </a>
            </div>
        </nav>
    );
}