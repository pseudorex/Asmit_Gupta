import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between items-center flex-col lg:flex-row gap-8 lg:gap-12 py-8 lg:py-12" id="about">
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img className="w-full max-w-md lg:max-w-xl h-auto object-contain" src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          Backend-focused Computer Science student seeking to design and scale high-performance, secure systems in production environments. I build production-ready APIs with intelligent caching, rate limiting, and observability.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Currently pursuing Integrated M.Tech in Computer Science and Engineering at Vellore Institute of Technology, Vellore. Previously completed Class 12th from Birla Vidyamandir, Nainital with 94.6%.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My focus areas include FastAPI, SQLAlchemy, Redis, PostgreSQL, OAuth2, and JWT. I enjoy building backend systems that stay fast under load and remain secure in production.
        </p>

        {/* Fun Facts Section */}
        <div className="mt-6 lg:mt-8 pt-5 border-t border-zinc-200">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3">
            Fun Facts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-black/10 bg-zinc-50 hover:border-black hover:bg-black hover:text-white transition-all group cursor-default">
              <span className="text-xl">🦉</span>
              <span className="text-xs sm:text-sm text-zinc-700 group-hover:text-white font-medium">
                Peak coding hours: 2:00 AM – 5:00 AM
              </span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-black/10 bg-zinc-50 hover:border-black hover:bg-black hover:text-white transition-all group cursor-default">
              <span className="text-xl">🫖</span>
              <span className="text-xs sm:text-sm text-zinc-700 group-hover:text-white font-medium">
                Chai-driven developer: powered by endless hot tea
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
