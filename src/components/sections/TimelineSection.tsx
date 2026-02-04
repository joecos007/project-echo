
const timelineEvents = [
    {
        year: "2018",
        title: "FOUNDATION LAUNCH",
        description: "Initialize_Protocol_Alpha. The first brick laid in the Metaverse of assistance.",
        color: "text-cyan",
        borderColor: "border-cyan",
        shadowColor: "shadow-[0_0_20px_var(--color-cyan)]",
        bgHover: "group-hover:bg-cyan"
    },
    {
        year: "2022",
        title: "GLOBAL SYNAPSE",
        description: "Expansion of neural architecture networks across 7 continents.",
        color: "text-neon",
        borderColor: "border-neon",
        shadowColor: "shadow-[0_0_20px_var(--color-neon)]",
        bgHover: "group-hover:bg-neon"
    },
    {
        year: "2025",
        title: "SINGULARITY",
        description: "Full integration of physical and digital living spaces.",
        color: "text-psych",
        borderColor: "border-psych",
        shadowColor: "shadow-[0_0_20px_var(--color-psych)]",
        bgHover: "group-hover:bg-psych"
    }
];

export function TimelineSection() {
    return (
        <section id="chronicles" className="py-32 relative overflow-hidden bg-void">
            {/* Central Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-quantum to-transparent opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="font-display font-semibold text-center text-3xl mb-20 tracking-tight">GROWTH VECTOR</h2>

                <div className="space-y-32">
                    {timelineEvents.map((event, index) => (
                        <div key={event.year} className={`flex justify-between items-center group ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>

                            {/* Year & Title */}
                            <div className={`w-1/2 ${index % 2 === 1 ? 'pl-12 text-left' : 'pr-12 text-right'} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}>
                                <h3 className={`font-display text-4xl mb-2 text-foreground group-hover:${event.color}`}>{event.year}</h3>
                                <p className="font-mono text-sm tracking-widest">{event.title}</p>
                            </div>

                            {/* Central Node */}
                            <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 ${event.borderColor} rotate-45 group-hover:scale-150 ${event.bgHover} transition-all duration-300 group-hover:${event.shadowColor}`}></div>

                            {/* Description */}
                            <div className={`w-1/2 ${index % 2 === 1 ? 'pr-12 text-right' : 'pl-12 text-left'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                                <p className="font-mono text-xs text-muted-foreground max-w-xs inline-block">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
