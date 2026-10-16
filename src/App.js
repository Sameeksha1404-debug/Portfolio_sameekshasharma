import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-[#030307] text-gray-100 relative selection:bg-purple-500 selection:text-white font-sans">
            {/* Background Glow Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[140px] pointer-events-none rounded-full"></div>
            <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[160px] pointer-events-none rounded-full"></div>

            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}
