import image from "../portfolio_img.jpeg"; 

export default function Hero() {
    const linkedinUrl = "https://www.linkedin.com/in/sameekshasanjay140404";
    const githubUrl = "https://github.com/Sameeksha1404-debug";
    const email = "sameekshacareers14@gmail.com";

    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        Welcome to my Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Hello, I'm <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Sameeksha Sharma</span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        Full-Stack Developer & Data Analyst passionate about building scalable web applications, robust RESTful APIs, and translating complex datasets into actionable business insights.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a href="#contact" className="bg-white text-gray-900 hover:bg-gray-100 px-7 py-3 rounded-full font-semibold text-sm transition shadow-xl">
                            Hire Me
                        </a>
                        <a href={linkedinUrl} target="_blank" rel="noreferrer" className="bg-[#0c0c14]/70 backdrop-blur-md hover:bg-white/10 px-6 py-3 rounded-full font-semibold text-sm text-white transition border border-white/10">
                            LinkedIn Profile
                        </a>
                    </div>
                    <div className="flex items-center gap-5 pt-4 text-gray-400">
                        <a href={linkedinUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0c0c14]/70 border border-white/10 flex items-center justify-center hover:text-purple-400 hover:border-purple-500/50 transition">in</a>
                        <a href={githubUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0c0c14]/70 border border-white/10 flex items-center justify-center hover:text-purple-400 hover:border-purple-500/50 transition">gh</a>
                        <a href={`mailto:${email}`} className="w-10 h-10 rounded-full bg-[#0c0c14]/70 border border-white/10 flex items-center justify-center hover:text-purple-400 hover:border-purple-500/50 transition">@</a>
                    </div>
                </div>
                <div className="lg:col-span-7 flex justify-center relative">
                    <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-purple-600/30 rounded-full blur-[80px] -z-10"></div>
                    <div className="relative w-72 h-80 md:w-96 md:h-[420px] rounded-3xl overflow-hidden bg-[#0c0c14]/70 backdrop-blur-md p-2 border border-purple-500/30 shadow-[0_0_50px_-10px_rgba(168,85,247,0.25)]">
                        <img 
                            src={image} 
                            alt="Sameeksha Sharma" 
                            className="w-full h-full object-cover rounded-2xl"
                            onError={(e)=>{e.target.style.display='none'; e.target.nextSibling.style.display='flex';}}
                        />
                        <div className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-b from-purple-900/40 to-[#0c0c14] p-6 text-center">
                            <div className="w-24 h-24 rounded-full bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-3xl font-bold text-white mb-4">SS</div>
                            <h3 className="text-xl font-bold text-white">Sameeksha Sharma</h3>
                            <p className="text-xs text-purple-300 mt-1">Full-Stack & Data Analytics</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}