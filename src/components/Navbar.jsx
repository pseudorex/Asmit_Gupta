import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle dynamic pill mode when scrolling
      setIsScrolled(window.scrollY > 30);

      // Detect active section on scroll
      const allSections = ["home", "about", "skills", "education", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = allSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(allSections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(allSections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 85,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Topmost Window Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-black origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating Dynamic Island Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none p-3 lg:p-4">
        <motion.nav
          layout
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            layout: { type: "spring", stiffness: 280, damping: 28 },
            opacity: { duration: 0.25 },
            y: { type: "spring", stiffness: 300, damping: 25 },
          }}
          className={`pointer-events-auto flex items-center justify-between mx-auto ${
            isScrolled
              ? "w-auto max-w-fit gap-3 md:gap-6 bg-white/90 backdrop-blur-xl border-2 border-black rounded-full px-4 lg:px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              : "w-full max-w-7xl px-4 lg:px-8 py-3 bg-white/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-2 border-black/10 md:border-transparent rounded-full md:rounded-2xl"
          }`}
        >
          {/* Logo / Brand Name */}
          <motion.button
            layout
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="font-extrabold tracking-tight text-black shrink-0 px-2 py-1 rounded-lg focus:outline-none cursor-pointer text-sm lg:text-base whitespace-nowrap flex items-center gap-1"
            aria-label="Scroll to home"
          >
            <span>Asmit Gupta</span>
          </motion.button>

          {/* Desktop Nav Links with Dynamic Pill Indicator */}
          <motion.ul
            layout
            className="hidden md:flex items-center gap-x-1 lg:gap-x-2 font-semibold text-xs lg:text-sm p-1"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.li
                  key={item.id}
                  className="relative"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative z-10 px-3.5 py-1.5 rounded-full transition-colors duration-200 text-xs lg:text-sm font-medium ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-zinc-700 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-black rounded-full -z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Resume & Mobile Trigger */}
          <motion.div layout className="flex items-center gap-2 lg:gap-3">
            <motion.a
              layout
              href="/ASMIT%20GUPTA%20RESUME.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative inline-flex items-center gap-1.5 font-bold transition-all text-xs lg:text-sm ${
                isScrolled
                  ? "bg-black text-white hover:bg-zinc-800 px-3.5 py-1.5 rounded-full border border-black shadow-sm"
                  : "bg-white text-black border-2 border-black hover:bg-black hover:text-white px-3.5 py-1.5 rounded-lg md:rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              Resume{" "}
              <TbDownload
                size={14}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </motion.a>

            {/* Mobile Hamburger Trigger */}
            <motion.button
              layout
              className="md:hidden text-xl p-1.5 text-black rounded-lg hover:bg-black/5"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX /> : <HiOutlineMenu />}
            </motion.button>
          </motion.div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu & Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden pointer-events-auto"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="fixed inset-x-4 top-20 z-50 bg-white/95 backdrop-blur-2xl border-2 border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hidden pointer-events-auto"
            >
              <div className="flex justify-between items-center mb-5 border-b border-zinc-200 pb-3">
                <span className="font-extrabold text-lg tracking-tight">Asmit Gupta</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl p-1 text-black hover:bg-zinc-100 rounded-lg"
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>

              <ul className="flex flex-col gap-2 font-bold text-base">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left py-2.5 px-4 rounded-2xl flex items-center justify-between transition-colors ${
                          isActive
                            ? "bg-black text-white"
                            : "text-zinc-800 hover:bg-zinc-100"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 pt-4 border-t border-zinc-200">
                <a
                  href="/ASMIT%20GUPTA%20RESUME.pdf"
                  download
                  className="w-full flex items-center justify-center gap-2 bg-black text-white font-bold py-3 rounded-2xl border-2 border-black hover:bg-zinc-800 transition-colors"
                >
                  Download Resume <TbDownload size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
