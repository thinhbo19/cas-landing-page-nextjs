"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Fixed list of clients
const clients = [
  { id: 1, name: "MOMO", logo: "/partners/Momo.svg" },
  { id: 2, name: "ZALO", logo: "/partners/image.png" },
  { id: 3, name: "SHOPEE", logo: "/partners/Shopee.svg" },
  { id: 4, name: "VIETTELPAY", logo: "/partners/Viettel-Logo.svg" },
];

// Duplicate the clients array for continuous scrolling
const scrollingClients = [...clients, ...clients];

const ClientsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        // Reset position when we've scrolled through the first set of clients
        if (prev >= 100) {
          return 0;
        }
        return prev + 0.2; // Adjust speed here (smaller = slower)
      });
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="py-10 overflow-hidden">
      <div className="flex justify-center">
        <div className="w-full max-w-5xl overflow-hidden">
          <div 
            className="flex items-center space-x-12 md:space-x-16"
            style={{ 
              transform: `translateX(-${scrollPosition}%)`,
              transition: 'transform 0.5s linear'
            }}
          >
            {scrollingClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-xl shadow-md p-6 w-40 h-24 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-16 w-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
