import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ParticleCanvas } from "@/components/effects/ParticleCanvas";
import { CustomCursor } from "@/components/effects/CustomCursor";

export function App() {
    return (
        <div className="relative">
            <CustomCursor />
            <ParticleCanvas />

            <Header />

            <main>
                <HeroSection />
                <VisionSection />
                <TimelineSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
}

export default App;