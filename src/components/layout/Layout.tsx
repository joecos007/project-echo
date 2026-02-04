import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { OracleInterface } from "@/components/chat/OracleInterface";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { ParticleCanvas } from "@/components/effects/ParticleCanvas";
import { useEffect } from "react";

export function Layout() {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
            <CustomCursor />
            <ParticleCanvas />

            <Header />

            <main className="pt-24 flex-1">
                <Outlet />
            </main>

            <Footer />
            <OracleInterface />
        </div>
    );
}
