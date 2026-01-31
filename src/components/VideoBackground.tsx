"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 192;

export default function VideoBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const width = window.innerWidth;
            const height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            render();
        };

        const images: HTMLImageElement[] = [];
        const frames = { currentIndex: 0 };

        const render = () => {
            const img = images[frames.currentIndex];
            if (!img || !img.complete || img.naturalWidth === 0) return;

            const logicalWidth = window.innerWidth;
            const logicalHeight = window.innerHeight;
            const imgWidth = img.naturalWidth;
            const imgHeight = img.naturalHeight;

            // Cover logic: Fill entire viewport, crop if needed
            const scale = Math.max(logicalWidth / imgWidth, logicalHeight / imgHeight);
            const drawWidth = imgWidth * scale;
            const drawHeight = imgHeight * scale;
            const x = (logicalWidth - drawWidth) / 2;
            const y = (logicalHeight - drawHeight) / 2;

            context.clearRect(0, 0, logicalWidth, logicalHeight);
            context.drawImage(img, x, y, drawWidth, drawHeight);
        };

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const frameId = i.toString().padStart(4, "0");
            img.src = `/frames/${frameId}.jpg`;
            img.onload = () => {
                if (frameId === "0001") {
                    frames.currentIndex = 0;
                    render();
                }
            };
            images.push(img);
        }

        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
                const frameIndex = Math.min(
                    FRAME_COUNT - 1,
                    Math.floor(self.progress * (FRAME_COUNT - 1))
                );
                if (images[frameIndex]?.complete && images[frameIndex].naturalWidth !== 0) {
                    frames.currentIndex = frameIndex;
                    requestAnimationFrame(render);
                }
            },
        });

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 opacity-30"
        />
    );
}
