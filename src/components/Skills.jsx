export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-3 block">Expertise</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#0c0c14]/70 backdrop-blur-md border border-white/8 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-white mb-4 text-purple-400">Frontend</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• HTML5, CSS3, JavaScript (ES6+)</li>
                        <li>• React.js & Vite</li>
                        <li>• Tailwind CSS & Material UI</li>
                        <li>• Responsive Design & Flexbox/Grid</li>
                    </ul>
                </div>
                <div className="bg-[#0c0c14]/70 backdrop-blur-md border border-white/8 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-white mb-4 text-purple-400">Backend & DB</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Node.js & RESTful APIs</li>
                        <li>• PHP & Laravel Framework</li>
                        <li>• Firebase Firestore & MongoDB</li>
                        <li>• MySQL Database Management</li>
                    </ul>
                </div>
                <div className="bg-[#0c0c14]/70 backdrop-blur-md border border-white/8 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-white mb-4 text-purple-400">Data Analytics</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Microsoft Power BI</li>
                        <li>• Tableau</li>
                        <li>• Advanced SQL & Excel</li>
                        <li>• Python Data Analysis</li>
                    </ul>
                </div>
                
            </div>
        </section>
    );
}