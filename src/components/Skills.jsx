import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPython, FaDocker, FaDatabase, FaLinux, FaBug } from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiRedis, SiGit, SiK6, SiSocketdotio, SiPytest, SiSqlalchemy } from "react-icons/si";
import { FiServer, FiKey } from "react-icons/fi";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "backend", label: "Backend & APIs" },
    { id: "databases", label: "Databases & Caching" },
    { id: "devops", label: "DevOps & Systems" },
    { id: "testing", label: "Testing & Performance" },
  ];

  const [skills] = useState([
    { id: 1, name: "FastAPI", category: "backend", core: true, icon: <SiFastapi size={44} /> },
    { id: 2, name: "PostgreSQL", category: "databases", core: true, icon: <SiPostgresql size={44} /> },
    { id: 3, name: "Redis", category: "databases", core: true, icon: <SiRedis size={44} /> },
    { id: 4, name: "Docker", category: "devops", core: true, icon: <FaDocker size={44} /> },
    { id: 5, name: "SQLAlchemy", category: "databases", core: true, icon: <SiSqlalchemy size={44} /> },
    { id: 6, name: "Python", category: "backend", icon: <FaPython size={44} /> },
    { id: 7, name: "OAuth2 / JWT", category: "backend", icon: <FiKey size={44} /> },
    { id: 8, name: "WebSockets", category: "backend", icon: <SiSocketdotio size={44} /> },
    { id: 9, name: "Uvicorn", category: "backend", icon: <FiServer size={44} /> },
    { id: 10, name: "Alembic", category: "databases", icon: <FaDatabase size={44} /> },
    { id: 11, name: "Linux", category: "devops", icon: <FaLinux size={44} /> },
    { id: 12, name: "Git", category: "devops", icon: <SiGit size={44} /> },
    { id: 13, name: "K6", category: "testing", icon: <SiK6 size={44} /> },
    { id: 14, name: "Locust", category: "testing", icon: <FaBug size={44} /> },
    { id: 15, name: "Pytest", category: "testing", icon: <SiPytest size={44} /> },
  ]);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const [experiences] = useState([
    {
      id: 1,
      company: "Ealth Technologies",
      role: "Software Development Engineer Intern",
      period: "Jan 2026 - Mar 2026",
      description:
        "Optimized search API by eliminating N+1 query patterns using JOIN LOAD in SQLAlchemy, reducing average response time from ~180ms to ~100ms. Moved OTP email delivery to async post-commit for a 99% lower failure response time. Implemented secure JWT/OAuth2 authentication flows with role-based access control.",
    },
    {
      id: 2,
      company: "SIAM, VIT",
      role: "Technical Head",
      period: "Mar 2026 - Present",
      description:
        "Oversaw technical operations, code reviews, and workshops on GitHub, web development, and competitive coding. Built backend infrastructure for Math Premier League with real-time updates, supporting 200+ concurrent participants. Focused on performance, security, and developer workflows.",
    },
  ]);

  return (
    <div className="pt-12 lg:pt-20 pb-0" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Category Filter Tabs with Frosted Glass & Sliding Pill Animation */}
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 mt-8 lg:mt-10 p-1.5 bg-white/75 backdrop-blur-md rounded-full border border-black/15 shadow-sm max-w-fit mx-auto">
          {categories.map((cat) => {
            const count =
              cat.id === "all"
                ? skills.length
                : skills.filter((s) => s.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-colors duration-200 z-10 flex items-center ${
                  isActive ? "text-white" : "text-zinc-700 hover:text-black"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-black rounded-full -z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{cat.label}</span>
                <span
                  className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-white/80 text-zinc-600 border border-black/5"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid with Smooth Spring Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 mt-8 lg:mt-12 w-full place-items-center min-h-[360px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.75, y: -15 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                  mass: 0.8,
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white border-2 border-black rounded-2xl p-4 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-3 lg:gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {skill.core && (
                  <span className="absolute top-2 right-2 text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-black text-white group-hover:bg-white group-hover:text-black border border-black transition-colors">
                    Core
                  </span>
                )}
                <div className="transition-transform group-hover:scale-110 duration-200">
                  {skill.icon}
                </div>
                <p className="text-sm lg:text-base font-bold text-center leading-tight">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full mt-10 py-10 lg:mt-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex flex-col gap-2">
                  <span className="uppercase text-xs tracking-[0.24em] text-[#A2A2A8]">{exp.company}</span>
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
