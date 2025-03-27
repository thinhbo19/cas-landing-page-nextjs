"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

// Fixed list of partners
const partners = [
  { id: 1, name: "VPBank", logo: "/partners/logo_150x37-01.svg" },
  { id: 2, name: "HDBank", logo: "/partners/HDBank.svg" },
  { id: 3, name: "Napas", logo: "/partners/Logo-Napas-1.png" },
  { id: 4, name: "Mastercard", logo: "/partners/MC-png-300x180.png" },
  { id: 5, name: "GOT", logo: "/partners/GT-Logo-SVG.svg" },
  { id: 6, name: "VietQR", logo: "/partners/VietQR.svg" },
  { id: 7, name: "QRLINKS", logo: "/partners/LogoQRAsset-9100-300x40.png" },
];

const PartnerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance the carousel
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % partners.length);
    }, 2000); // Slightly slower for better visibility
  }, []);

  useEffect(() => {
    startAutoplay();

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [startAutoplay]);

  return (
    <div className="py-10 relative overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-32 flex items-center justify-center">
          {partners.map((partner, index) => {
            const distance =
              (index - activeIndex + partners.length) % partners.length;
            const normalizedDistance =
              distance > Math.floor(partners.length / 2)
                ? distance - partners.length
                : distance;

            const xPosition = normalizedDistance * 180;
            const zIndex = 10 - Math.abs(normalizedDistance);
            const scale = 1 - Math.abs(normalizedDistance) * 0.15;
            const opacity = 1 - Math.abs(normalizedDistance) * 0.3;

            return (
              <motion.div
                key={partner.id}
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{
                  x: xPosition,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                  filter:
                    normalizedDistance === 0
                      ? "brightness(1)"
                      : "brightness(0.7)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
              >
                <div
                  className={`
                    bg-white rounded-xl shadow-lg p-6 w-48 h-24 flex items-center justify-center
                    ${
                      normalizedDistance === 0
                        ? "border-2 border-[#E5B660]"
                        : "border border-gray-100"
                    }
                  `}
                >
                  <div className="relative h-16 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
