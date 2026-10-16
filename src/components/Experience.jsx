export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-3 block">Career Path</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">My Work Experience & Education</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-[#0c0c14]/70 backdrop-blur-md border border-white/8 p-6 rounded-2xl border-l-4 border-l-purple-500">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white">Data Analytics Intern</h3>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400">May 2025 - Jan 2026</span>
                    </div>
                    <span className="text-sm text-purple-300 block mb-3">Ypsilon IT Solutions Pvt. Ltd.</span>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Analyzed, cleaned, and validated datasets using SQL and Excel. Developed interactive Power BI and Tableau dashboards to track business performance.
                    </p>
                </div>
                <div className="bg-[#0c0c14]/70 backdrop-blur-md border border-white/8 p-6 rounded-2xl border-l-4 border-l-indigo-500">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white">B.Tech in CSE (AI & ML)</h3>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400">2022 - 2026</span>
                    </div>
                    <span className="text-sm text-indigo-300 block mb-3">IPS Academy, Indore (CGPA: 9.5)</span>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Focused on Data Structures & Algorithms, DBMS, Software Engineering, and Web Development.
                    </p>
                </div>
            </div>
        </section>
    );
}