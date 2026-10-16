import { useState } from 'react';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "sameekshacareers14@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/sameekshasanjay140404";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="bg-[#0c0c14]/70 backdrop-blur-md border border-white/8 p-8 md:p-16 rounded-3xl text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 pointer-events-none"></div>
                <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-3 block">Get In Touch</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Let's talk about your next project.</h2>
                <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8">
                    Feel free to reach out via email or connect with me on LinkedIn for opportunities and collaborations.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <button 
                        onClick={copyEmail}
                        className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition shadow-lg shadow-purple-600/25 flex items-center gap-2 cursor-pointer"
                    >
                        <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                        <span className="text-xs opacity-75">({email})</span>
                    </button>
                    <a 
                        href={linkedinUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-[#0c0c14]/70 backdrop-blur-md hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition border border-white/20"
                    >
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}