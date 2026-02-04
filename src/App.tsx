import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollProgress } from "@/components/animations";
import { useSmoothScroll } from "@/lib/hooks";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { GuildPage } from "@/pages/GuildPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ChroniclesPage } from "@/pages/ChroniclesPage";
import { ScrollPage } from "@/pages/ScrollPage";
import { TeamPage } from "@/pages/TeamPage";

function App() {
    // Enable smooth scrolling with Lenis
    useSmoothScroll({ duration: 1.2 });

    return (
        <>
            <ScrollProgress color="hsl(160 90% 50%)" />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="guild" element={<GuildPage />} />
                        <Route path="art" element={<ServicesPage />} />
                        <Route path="team" element={<TeamPage />} />
                        <Route path="chronicles" element={<ChroniclesPage />} />
                        <Route path="scroll" element={<ScrollPage />} />
                        <Route path="summon" element={<ContactPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;