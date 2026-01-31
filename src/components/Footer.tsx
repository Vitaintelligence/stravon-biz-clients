"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-16 px-6 z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img 
                                src="/logo.svg" 
                                alt="Stravon" 
                                width={32} 
                                height={32}
                                className="w-8 h-8"
                            />
                            <span className="text-white font-semibold text-xl">Stravon</span>
                        </div>
                        <p className="text-white/50 max-w-md mb-6 text-sm leading-relaxed">
                            Production-ready applications in 7 days. Modern tech, fixed pricing, zero compromises.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-medium mb-4 text-sm">Quick Links</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="#features" className="text-white/50 hover:text-white transition-colors text-sm">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-white/50 hover:text-white transition-colors text-sm">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#reviews" className="text-white/50 hover:text-white transition-colors text-sm">
                                    Reviews
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-medium mb-4 text-sm">Contact</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a
                                    href="https://wa.me/918968037352"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/50 hover:text-white transition-colors text-sm"
                                >
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hello@stravon.com"
                                    className="text-white/50 hover:text-white transition-colors text-sm"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        © {currentYear} Stravon. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs">
                        <a href="#" className="text-white/30 hover:text-white transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="text-white/30 hover:text-white transition-colors">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
