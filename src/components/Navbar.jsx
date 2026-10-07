import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navItems = ["about", "skills", "education", "projects", "contact"];

  return (
    <>
      {/* Topmost Window Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-black origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Dynamic Island Container */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none p-3 lg:p-4">
        <motion.nav
          layout
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className={`pointer-events-auto transition-all duration-300 flex items-center justify-between ${
            isScrolled
              ? "w-auto gap-4 lg:gap-8 bg-white/95 backdrop-blur-md border-2 border-black rounded-full px-4 lg:px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              : "w-full max-w-7xl px-4 lg:px-12 py-3 bg-transparent border-b border-transparent"
          }`}
        >
          {/* Logo Monogram */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="font-mono text-lg lg:text-xl font-black tracking-[0.25em] text-black shrink-0"
          >
            AG
          </motion.button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-x-5 lg:gap-x-7 font-semibold text-xs lg:text-sm">
            {navItems.map((section) => (
              <motion.li
                key={section}
                className="group relative cursor-pointer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(section)}
                  className="text-zinc-800 hover:text-black transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
                <motion.span
                  className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black block absolute -bottom-1 left-0"
                  layout
                />
              </motion.li>
            ))}
          </ul>

          {/* Resume Action */}
          <div className="flex items-center gap-3">
            <motion.a
              href="/ASMIT%20GUPTA%20RESUME.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative inline-flex items-center gap-1.5 font-bold transition-all text-xs lg:text-sm ${
                isScrolled
                  ? "bg-black text-white hover:bg-zinc-800 px-3.5 py-1.5 rounded-full"
                  : "bg-white text-black border-2 border-black hover:bg-black hover:text-white px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              Resume <TbDownload size={14} />
            </motion.a>

            {/* Mobile Hamburger Trigger */}
            <motion.button
              className="md:hidden text-xl p-1 text-black"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX /> : <HiOutlineMenu />}
            </motion.button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 bg-white/95 backdrop-blur-xl border-2 border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hidden"
          >
            <div className="flex justify-between items-center mb-6 border-b border-zinc-200 pb-3">
              <span className="font-mono font-black text-lg tracking-[0.2em]">NAVIGATION</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl p-1"
                aria-label="Close menu"
              >
                <HiX />
              </button>
            </div>

            <ul className="flex flex-col gap-4 font-bold text-base">
              {navItems.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="w-full text-left py-2 px-3 rounded-xl hover:bg-zinc-100 transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-zinc-200">
              <a
                href="/ASMIT%20GUPTA%20RESUME.pdf"
                download
                className="w-full flex items-center justify-center gap-2 bg-black text-white font-bold py-3 rounded-2xl border-2 border-black"
              >
                Download Resume <TbDownload size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

