export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c14]/70 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></span>
                    Sameeksha Sharma
                </a>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <a href="#about" className="hover:text-purple-400 transition">About Us</a>
                    <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
                    <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
                    <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
                    <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
                </div>
                <a href="#contact" className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-lg shadow-purple-600/20">
                    Let's Talk
                </a>
            </div>
        </nav>
    );
}