"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Expanded Message */}
            {isExpanded && (
                <div className="absolute bottom-20 right-0 w-72 p-5 bg-white border border-black/10 shadow-2xl mb-2">
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="absolute top-3 right-3 text-black/30 hover:text-black"
                    >
                        <X className="w-4 h-4" />
                    </button>
                    <div className="flex items-start gap-3">
                        <img 
                            src="/logo.svg" 
                            alt="Stravon" 
                            width={32} 
                            height={32}
                            className="w-8 h-8 flex-shrink-0"
                        />
                        <div>
                            <div className="font-medium text-black mb-1 text-sm">Stravon</div>
                            <p className="text-sm text-black/60 mb-3 leading-relaxed">
                                Ready to build your app in 7 days?
                            </p>
                            <a
                                href="https://wa.me/918968037352?text=Hey%20i%20want%20to%20build%20my%20application%0A%0AI'm-%20%0AI'm%20looking%20to%20build-%20%0AMy%20budget-%20"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-medium hover:bg-black/90 transition-colors"
                            >
                                <MessageCircle className="w-3.5 h-3.5" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group relative w-14 h-14 bg-white hover:bg-white/90 shadow-xl flex items-center justify-center transition-all duration-200"
            >
                <MessageCircle className="w-6 h-6 text-black relative z-10" />
                
                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-black flex items-center justify-center text-white text-[10px] font-medium">
                    1
                </span>
            </button>
        </div>
    );
}
