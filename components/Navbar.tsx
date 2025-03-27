"use client";

import { Layout, Button, Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const { Header } = Layout;

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      setScrolled(currentScrollY > 10);
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down - hide navbar
        setVisible(false);
      } else {
        // Scrolling up or at top - show navbar
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { key: "home", label: "Trang chủ", href: "/" },
    { key: "products", label: "Sản phẩm & Dịch vụ", href: "/products" },
    { key: "news", label: "Tin tức", href: "/news" },
    { key: "contact", label: "Liên hệ", href: "/contact" },
    { key: "about", label: "Về Chúng tôi", href: "/about" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: visible ? 0 : -100 
      }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50"
    >
      <Header
        className={`fixed w-full z-50 px-0 transition-all duration-500 ${"backdrop-blur-md shadow-lg"}`}
        style={{
          height: scrolled ? "70px" : "80px",
          lineHeight: scrolled ? "70px" : "80px",
          padding: 0,
          backgroundColor: scrolled ? "rgba(79, 79, 79, 0.9)" : "#4f4f4f",
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="transition-opacity">
              <Image
                src="/logo.png"
                alt="CAS Corporation"
                width={scrolled ? 70 : 80}
                height={scrolled ? 50 : 60}
                priority
                className="object-contain transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu - Hidden on Small Screens */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.key}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={item.href}
                  className={`relative font-medium transition-colors uppercase text-white group`}
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  <span
                    className={pathname === item.href ? "text-[#F6D088]" : ""}
                  >
                    {item.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F6D088] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Button - Hidden on Small Screens */}
          <div className="hidden lg:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                size="large"
                className="transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #F6D088 0%, #E5B660 100%)",
                  border: "none",
                  color: "#0A1929",
                  fontWeight: "500",
                  height: "44px",
                  padding: "0 28px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 14px 0 rgba(246, 208, 136, 0.39)",
                }}
              >
                Tư vấn ngay
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Only Visible on Small Screens */}
          <div className="lg:hidden flex">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                type="text"
                style={{ color: "white" }}
                icon={<MenuOutlined style={{ fontSize: "24px" }} />}
                onClick={() => setDrawerOpen(true)}
                className="hover:rotate-90 transition-all duration-300"
              />
            </motion.div>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {drawerOpen && (
              <Drawer
                placement="right"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
                width={300}
                className="lg:hidden"
                closeIcon={
                  <CloseOutlined
                    style={{ color: "white", fontSize: "20px" }}
                    className="hover:rotate-90 transition-all duration-300"
                  />
                }
                styles={{
                  header: {
                    background: "#4f4f4f",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  },
                  body: {
                    padding: 0,
                    background:
                      "linear-gradient(135deg, #4f4f4f 0%, #3a3a3a 100%)",
                  },
                  mask: { backdropFilter: "blur(4px)" },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full text-white p-6"
                >
                  <nav className="flex flex-col gap-6">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`text-lg font-medium transition-colors uppercase flex items-center group`}
                          onClick={() => setDrawerOpen(false)}
                        >
                          <span
                            className={`relative ${
                              pathname === item.href
                                ? "text-[#F6D088]"
                                : "text-white"
                            }`}
                          >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F6D088] transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                  <motion.div
                    className="mt-auto pt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      type="primary"
                      size="large"
                      className="w-full hover:scale-105 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, #F6D088 0%, #E5B660 100%)",
                        border: "none",
                        color: "#0A1929",
                        fontWeight: "500",
                        height: "44px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 14px 0 rgba(246, 208, 136, 0.39)",
                      }}
                    >
                      Tư vấn ngay
                    </Button>
                  </motion.div>
                </motion.div>
              </Drawer>
            )}
          </AnimatePresence>
        </div>
      </Header>
    </motion.div>
  );
};

export default Navbar;
