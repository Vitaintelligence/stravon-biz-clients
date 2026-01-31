"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Story", href: "#story" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Reviews", href: "#reviews" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
                ? "bg-black/80 backdrop-blur-2xl border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2">
                        <img 
                            src="/logo.svg" 
                            alt="Stravon" 
                            width={32} 
                            height={32}
                            className="w-8 h-8"
                        />
                        <span className="text-white font-semibold text-lg tracking-tight">Stravon</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/60 hover:text-white text-sm font-normal transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/918968037352?text=Hey%20i%20want%20to%20build%20my%20application%0A%0AI'm-%20%0AI'm%20looking%20to%20build-%20%0AMy%20budget-%20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-200"
                        >
                            Start Project
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10">
                    <div className="px-6 py-6 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-white/60 hover:text-white text-base font-normal py-3"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/918968037352?text=Hey%20i%20want%20to%20build%20my%20application%0A%0AI'm-%20%0AI'm%20looking%20to%20build-%20%0AMy%20budget-%20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center px-5 py-3 bg-white text-black text-sm font-medium mt-4"
                        >
                            Start Project
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
