import React from 'react';
import { FiMail, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <div 
      className="bg-black text-white px-5 lg:px-28 py-16 lg:py-24 border-t border-white/10" 
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Column: Contact Header & Links */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="uppercase text-xs tracking-[0.24em] text-[#A2A2A8] font-bold">
              05 / SECTION
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Contact <span className="font-light text-zinc-400">Me</span>
            </h2>
            <p className="text-[#D4D4D8] text-sm lg:text-base leading-relaxed mt-4">
              Open to backend development opportunities and collaborations. Building production-grade concurrent systems — let's connect.
            </p>
          </div>

          {/* Cards Stack */}
          <div className="space-y-4">
            {/* Email Card */}
            <a 
              href="mailto:asmitgupta309@gmail.com" 
              className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-2xl p-4"
            >
              <div className="p-3 bg-white/5 rounded-lg text-zinc-400 group-hover:text-white transition-colors">
                <FiMail size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.2em] text-[#A2A2A8] font-bold uppercase">Email</span>
                <span className="text-sm lg:text-base text-white font-semibold transition-colors mt-0.5">
                  asmitgupta309@gmail.com
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/asmitgpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-2xl p-4"
            >
              <div className="p-3 bg-white/5 rounded-lg text-zinc-400 group-hover:text-white transition-colors flex items-center justify-center w-[44px] h-[44px]">
                <span className="font-serif font-black italic text-lg leading-none lowercase">in</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.2em] text-[#A2A2A8] font-bold uppercase">LinkedIn</span>
                <span className="text-sm lg:text-base text-white font-semibold transition-colors mt-0.5">
                  linkedin.com/in/asmitgpt
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/pseudorex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-2xl p-4"
            >
              <div className="p-3 bg-white/5 rounded-lg text-zinc-400 group-hover:text-white transition-colors">
                <FiGithub size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.2em] text-[#A2A2A8] font-bold uppercase">GitHub</span>
                <span className="text-sm lg:text-base text-white font-semibold transition-colors mt-0.5">
                  github.com/pseudorex
                </span>
              </div>
            </a>

            {/* LeetCode Card */}
            <a 
              href="https://leetcode.com/u/Asmit_Gupta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-2xl p-4"
            >
              <div className="p-3 bg-white/5 rounded-lg text-zinc-400 group-hover:text-white transition-colors flex items-center justify-center w-[44px] h-[44px]">
                <span className="font-bold text-lg leading-none">#</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.2em] text-[#A2A2A8] font-bold uppercase">LeetCode</span>
                <span className="text-sm lg:text-base text-white font-semibold transition-colors mt-0.5">
                  300+ problems solved
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Opportunities & Facts */}
        <div className="flex flex-col gap-6 justify-center">
          
          {/* Card 1: Available for Opportunities */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] lg:text-xs tracking-[0.24em] text-emerald-400 font-bold uppercase">
                Available for opportunities
              </span>
            </div>
            <p className="text-[#D4D4D8] text-xs lg:text-sm leading-relaxed font-light">
              Currently pursuing Integrated M.Tech at VIT (2022-2027) and open to backend development internships, part-time roles, full-time roles, and open-source collaborations. Based in Vellore, India.
            </p>
          </div>

          {/* Card 2: Quick Facts */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:bg-white/10 transition-all">
            <h3 className="text-[10px] lg:text-xs tracking-[0.24em] text-white font-extrabold uppercase">
              Quick Facts
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3 text-xs lg:text-sm text-[#D4D4D8]">
                <span>📍</span>
                <span>Vellore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3 text-xs lg:text-sm text-[#D4D4D8]">
                <span>🎓</span>
                <span>Integrated M.Tech @ VIT</span>
              </li>
              <li className="flex items-center gap-3 text-xs lg:text-sm text-[#D4D4D8]">
                <span>💼</span>
                <span>SDE Intern @ Ealth Technologies</span>
              </li>
              <li className="flex items-center gap-3 text-xs lg:text-sm text-[#D4D4D8]">
                <span>⚡</span>
                <span>FastAPI · SQLAlchemy · Redis · Docker</span>
              </li>
              <li className="flex items-center gap-3 text-xs lg:text-sm text-[#D4D4D8]">
                <span>✳️</span>
                <span>300+ LeetCode · System Design enthusiast</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
