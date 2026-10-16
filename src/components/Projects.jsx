export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "College Event Aggregator",
            category: "Full-Stack Web App",
            tech: "React.js, Vite, Firebase Firestore, Tailwind CSS",
            desc: "Centralized event management platform supporting multiple departments with role-based access for students, teachers, and administrators. Built reusable React components and integrated Firebase Firestore for secure data storage."
        },
        {
            id: 2,
            title: "Pizza Ordering Application",
            category: "Web Application",
            tech: "React.js, HTML5, CSS3, JavaScript (ES6+), MongoDB",
            desc: "Full-stack job and food ordering workflow with modular component architecture, real-time search, multi-filter functionality using useMemo, and sub-100ms interaction responsiveness."
        },
        {
            id: 3,
            title: "Laravel CRUD Student System",
            category: "Backend & Web App",
            tech: "React, PHP, Laravel, MySQL, Vite",
            desc: "Designed and integrated a database-driven student management application workflow with complete CRUD functionality using Laravel Routes, Models, and Controllers[span_8](start_span)[span_8](end_span)."
        },
        {
            id: 4,
            title: "Netflix Content Analysis Dashboard",
            category: "Data Analytics",
            tech: "Power BI, Excel, Data Cleaning",
            desc: "Multi-page dashboard with navigation panels, KPIs, maps, bar charts, and treemaps highlighting United States leadership with 2819 titles and temporal release trends."
        },
        {
            id: 5,
            title: "HR Sales Analytics Dashboard",
            category: "Data Analytics",
            tech: "Tableau, Excel, Data Extraction",
            desc: "Interactive HR analytics dashboard monitoring key workforce KPIs including attrition rate, average monthly income, and employee satisfaction identifying peak turnover trends[span_10](start_span)[span_10](end_span)."
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-3 block">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">I Make Incredible Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div key={project.id} className="bg-[#0c0c14]/70 backdrop-blur-md border border-white/8 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/40 transition duration-300 group">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono text-purple-400">0{idx+1}</span>
                                <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">{project.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition">{project.title}</h3>
                            <p className="text-sm text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
                        </div>
                        <div>
                            <div className="text-xs font-medium text-gray-300 bg-black/40 p-3 rounded-xl border border-white/5 mb-4">
                                <strong className="text-purple-400 block mb-1">Technologies used:</strong>
                                {project.tech}
                            </div>
                            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition">
                                <span>View Details</span> &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}