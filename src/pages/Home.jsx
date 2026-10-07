import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const socialLinks = [
    { href: "mailto:asmitgupta309@gmail.com", Icon: BiLogoGmail },
    { href: "https://www.linkedin.com/in/asmitgpt", Icon: IoLogoLinkedin },
    { href: "https://leetcode.com/u/Asmit_Gupta/", Icon: SiLeetcode },
    { href: "https://github.com/pseudorex", Icon: BsGithub },
  ];

  return (
    <div className="min-h-screen pt-20 pb-6 flex items-center" id="home">
      <div className="w-full flex justify-between py-6 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse gap-8 lg:gap-12">

        <motion.div
          className="w-full lg:w-1/2 flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl sm:text-3xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hey, I'm <span className="font-extrabold">Asmit Gupta</span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Backend Developer</span>
            </motion.h2>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="h-[1.2em] flex items-center font-extrabold whitespace-nowrap"
            >
              <TypeAnimation
                sequence={[
                  "FastAPI",
                  1500,
                  "SQLAlchemy",
                  1500,
                  "Redis",
                  1500,
                  "PostgreSQL",
                  1500,
                  "Docker",
                  1500,
                  "Secure APIs",
                  1500,
                ]}
                speed={50}
                deletionSpeed={65}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Backend-focused Computer Science student seeking to design and scale high-performance, secure systems in production environments. I build production-grade APIs with intelligent caching, rate limiting, and observability for real traffic.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map(({ href, Icon }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="w-full max-w-md lg:max-w-xl h-auto object-contain" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
