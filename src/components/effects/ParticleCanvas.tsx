import { useEffect, useRef } from 'react';

export function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let mouse = { x: 0, y: 0 };
        let particles: any[] = [];

        // Brick/Particle Class
        class Brick {
            x: number;
            y: number;
            z: number;
            sizeW: number;
            sizeH: number;
            vx: number;
            vy: number;
            color: string;
            opacity: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 0.5; // Depth
                this.sizeW = (Math.random() * 20 + 10) * this.z;
                this.sizeH = (Math.random() * 10 + 5) * this.z;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.color = Math.random() > 0.9
                    ? 'var(--color-quantum)'
                    : (Math.random() > 0.9 ? 'var(--color-psych)' : '#1a1a1a');
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                // Mouse repulsion
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;

                if (distance < maxDist) {
                    const force = (maxDist - distance) / maxDist;
                    const angle = Math.atan2(dy, dx);
                    this.vx -= Math.cos(angle) * force * 0.5;
                    this.vy -= Math.sin(angle) * force * 0.5;
                }

                // Movement
                this.x += this.vx;
                this.y += this.vy;

                // Friction and return to drift
                this.vx *= 0.99;
                this.vy *= 0.99;
                if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.01;
                if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.01;

                // Wraparound
                if (this.x < -50) this.x = width + 50;
                if (this.x > width + 50) this.x = -50;
                if (this.y < -50) this.y = height + 50;
                if (this.y > height + 50) this.y = -50;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);

                // Simple parallax
                const scrollY = window.scrollY;
                ctx.translate(0, -scrollY * 0.1 * this.z);

                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color.startsWith('var')
                    ? getComputedStyle(document.documentElement).getPropertyValue(this.color.substring(4, this.color.length - 1)) || '#00FF9D'
                    : this.color;

                // Draw brick
                ctx.beginPath();
                ctx.rect(0, 0, this.sizeW, this.sizeH);
                ctx.fill();

                // Wireframe border
                if (this.color !== '#1a1a1a') {
                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    // Shadow not performant on many particles, simplified
                }

                ctx.restore();
            }
        }

        const resize = () => {
            if (document.documentElement) {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }
        };

        // Init one-time
        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // Populate
        for (let i = 0; i < 150; i++) {
            particles.push(new Brick());
        }

        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 opacity-60 pointer-events-none"
        />
    );
}
