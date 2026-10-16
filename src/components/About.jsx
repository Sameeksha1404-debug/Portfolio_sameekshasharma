export default function About() {
    return (
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="bg-[#0c0c14]/70 backdrop-blur-md border border-white/8 p-8 md:p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="max-w-3xl">
                    <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-3 block">About Me</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Creativity Is My Passion</h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                        I am a B.Tech graduate in Computer Science & Engineering (AI & ML) from IPS Academy, Indore, with an outstanding CGPA of 9.5. I specialize in bridging software development and data intelligence—building robust web apps with React and Node, alongside deriving insights using Power BI, Tableau, and SQL.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                            <span className="text-xs text-gray-400 block">Degree</span>
                            <span className="text-white font-semibold">B.Tech in CSE (AI & ML)</span>
                        </div>
                        <div>
                            <span className="text-xs text-gray-400 block">Institution</span>
                            <span className="text-white font-semibold">IPS Academy, Indore</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}