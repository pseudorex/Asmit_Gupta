import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "Integrated M.Tech in Computer Science and Engineering",
      institution: "Vellore Institute of Technology, Vellore",
      period: "2024 – 2029",
      status: "Present",
      score: "CGPA: 9.4",
      scoreType: "cgpa",
      icon: <FaGraduationCap className="text-xl lg:text-2xl" />,
      description:
        "Specializing in Backend Systems, Distributed Architecture, Database Internals, and High-Performance API Engineering.",
    },
    {
      id: 2,
      title: "Class XII (Senior Secondary)",
      institution: "Birla Vidyamandir, Nainital",
      period: "2024",
      status: "Completed",
      score: "Percentage: 94.6%",
      scoreType: "percentage",
      icon: <FaSchool className="text-xl lg:text-2xl" />,
      description:
        "Completed Senior Secondary education with a strong foundation in Physics, Chemistry, Mathematics, and Computer Science.",
    },
  ];

  return (
    <div className="px-5 lg:px-28 py-12 lg:py-16" id="education">
      <motion.h2
        className="text-2xl lg:text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="font-extrabold">Education</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-12 max-w-5xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="group relative bg-white border-2 border-black rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 12,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div>
              {/* Top Row: Icon + Score Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 bg-zinc-100 group-hover:bg-zinc-800 text-black group-hover:text-white rounded-xl transition-colors border border-black/10">
                  {edu.icon}
                </div>
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs lg:text-sm font-bold bg-black text-white group-hover:bg-white group-hover:text-black border border-black transition-colors">
                  {edu.score}
                </span>
              </div>

              {/* Title & Institution */}
              <h3 className="font-extrabold text-lg lg:text-xl text-black group-hover:text-white transition-colors">
                {edu.title}
              </h3>
              <p className="text-zinc-600 group-hover:text-zinc-300 text-sm font-semibold mt-1 transition-colors">
                {edu.institution}
              </p>

              {/* Description */}
              <p className="text-zinc-500 group-hover:text-zinc-300 text-xs lg:text-sm leading-relaxed mt-4 font-normal transition-colors">
                {edu.description}
              </p>
            </div>

            {/* Bottom Row: Timeline & Status */}
            <div className="flex items-center justify-between border-t border-zinc-200 group-hover:border-zinc-800 pt-4 mt-6 text-xs lg:text-sm transition-colors">
              <span className="text-zinc-500 group-hover:text-zinc-400 font-medium">
                {edu.period}
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-zinc-700 group-hover:text-zinc-200">
                {edu.status === "Present" && (
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                )}
                {edu.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
