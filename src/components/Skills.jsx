import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaDocker, FaDatabase, FaLinux, FaBug } from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiRedis, SiGit, SiK6, SiSocketdotio, SiPytest, SiSqlalchemy, SiJsonwebtokens } from "react-icons/si";
import { FiServer, FiKey } from "react-icons/fi";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Python", icon: <FaPython size={50} /> },
    { id: 2, name: "FastAPI", icon: <SiFastapi size={50} /> },
    { id: 3, name: "SQLAlchemy", icon: <SiSqlalchemy size={50} /> },
    { id: 4, name: "PostgreSQL", icon: <SiPostgresql size={50} /> },
    { id: 5, name: "Redis", icon: <SiRedis size={50} /> },
    { id: 6, name: "OAuth2 / JWT", icon: <FiKey size={50} /> },
    { id: 7, name: "Docker", icon: <FaDocker size={50} /> },
    { id: 8, name: "Git", icon: <SiGit size={50} /> },
    { id: 9, name: "WebSockets", icon: <SiSocketdotio size={50} /> },
    { id: 10, name: "K6", icon: <SiK6 size={50} /> },
    { id: 11, name: "Locust", icon: <FaBug size={50} /> },
    { id: 12, name: "Alembic", icon: <FaDatabase size={50} /> },
    { id: 13, name: "Uvicorn", icon: <FiServer size={50} /> },
    { id: 14, name: "Pytest", icon: <SiPytest size={50} /> },
    { id: 15, name: "Linux", icon: <FaLinux size={50} /> },
  ]);


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

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

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
