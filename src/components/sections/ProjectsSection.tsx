import { RiGridFill, RiListUnordered } from "@remixicon/react";

const projects = [
    {
        title: "NEO SHIBUYA TOWER",
        type: "RESIDENTIAL // TOKYO",
        color: "text-quantum",
        barColor: "bg-quantum",
        image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974&auto=format&fit=crop"
    },
    {
        title: "VOID PLAZA",
        type: "COMMERCIAL // DUBAI",
        color: "text-psych",
        barColor: "bg-psych",
        image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1964&auto=format&fit=crop"
    },
    {
        title: "THE MONOLITH",
        type: "CULTURAL // NEW YORK",
        color: "text-neon",
        barColor: "bg-neon",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
    }
];

export function ProjectsSection() {
    return (
        <section id="art" className="py-24 px-6 md:px-12 bg-black relative">
            <div className="flex justify-between items-end mb-16 max-w-[1920px] mx-auto">
                <h2 className="font-display font-semibold text-5xl tracking-tighter">
                    PROJECT<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum to-cyan">MATRIX</span>
                </h2>
                <div className="hidden md:flex gap-2">
                    {/* View Toggle Buttons (Mock) */}
                    <button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <RiGridFill className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <RiListUnordered className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1920px] mx-auto">
                {projects.map((project) => (
                    <div key={project.title} className="group relative h-[50vh] min-h-[400px] border border-white/10 overflow-hidden cursor-none">
                        {/* Background Image */}
                        <img
                            src={project.image}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            alt={project.title}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-60"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                <span className={`w-2 h-2 ${project.barColor} rounded-full animate-pulse`}></span>
                                <span className={`font-mono text-[10px] tracking-widest ${project.color}`}>{project.type}</span>
                            </div>
                            <h3 className="font-display font-semibold text-3xl mb-2 tracking-tight">{project.title}</h3>
                            <div className={`h-[1px] w-0 group-hover:w-full ${project.barColor} transition-all duration-700 ease-out`}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
