import React, { useState } from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiChevronDown, 
  FiChevronUp, 
  FiCpu, 
  FiShield, 
  FiActivity, 
  FiDatabase, 
  FiZap, 
  FiCheck, 
  FiAlertCircle, 
  FiTrendingUp, 
  FiUsers, 
  FiClock 
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "QueryShield",
    subtitle: "Adaptive Rate Limiting & Intelligent Caching Middleware",
    description: "A production-grade FastAPI middleware that protects backend databases from abuse while dramatically improving API performance through smart caching and endpoint-aware rate limiting.",
    link: "https://github.com/pseudorex/QueryShield",
    techStack: ["FastAPI", "PostgreSQL", "Redis", "Python", "Locust"],
    problems: [
      "DDoS attacks overwhelming databases",
      "Expensive analytical queries running repeatedly",
      "Cache pollution from cold endpoints",
      "Inability to distinguish attack traffic from legitimate users"
    ],
    stats: [
      { 
        label: "Cache Hit Ratio", 
        value: "98.6%", 
        desc: "Only 361 DB hits out of 30,047 requests in multi-IP stress test",
        icon: <FiZap className="text-amber-400" size={20} />
      },
      { 
        label: "Avg Speedup", 
        value: "33×", 
        desc: "Redis responses 30–36× faster than PostgreSQL (10ms vs 372ms)",
        icon: <FiTrendingUp className="text-emerald-400" size={20} />
      },
      { 
        label: "Attack Blocked", 
        value: "86%", 
        desc: "DDoS simulation with single-IP flood throttled at 86%",
        icon: <FiShield className="text-rose-400" size={20} />
      },
      { 
        label: "System Stability", 
        value: "Zero 500s", 
        desc: "Sustained 250 RPS burst load with complete stability",
        icon: <FiActivity className="text-cyan-400" size={20} />
      }
    ],
    technicalHighlights: [
      "Adaptive Threshold-Based Caching: Only hot endpoints cached, preventing memory waste",
      "Sliding 1-Hour Window: Real-time hot endpoint detection using Redis sorted sets",
      "Dynamic TTL Scaling: TTL based on query execution cost × endpoint popularity"
    ],
    testResults: {
      title: "Stress Test Results (Locust)",
      headers: ["Test Scenario", "Requests", "Throttled", "DB Hits", "Cache Hit %", "Median Latency"],
      rows: [
        ["Single-IP DDoS", "45,050", "86%", "175 (0.39%)", "97.1%", "11ms"],
        ["Multi-IP (10 IPs)", "30,047", "14%", "361 (1.2%)", "98.6%", "120ms"]
      ]
    },
    whyMatters: "The system doesn't just block traffic — it's intelligent. It crushes malicious single-source floods (86% throttled) while serving legitimate distributed traffic smoothly (only 14% throttled, 98.6% cached). All results are fully reproducible with included Locust test scripts."
  },
  {
    id: 2,
    title: "Hackmates",
    subtitle: "Backend System for Team Formation",
    description: "A production-style backend built with FastAPI, focused on scalability, caching, and real-time communication for hackathon team matching.",
    link: "https://github.com/pseudorex/Hackmates",
    techStack: ["FastAPI", "Redis", "PostgreSQL", "WebSockets", "Docker"],
    problems: [
      "Friction in hackathon team formation",
      "Slow real-time updates of team compositions",
      "Database congestion during high-volume team matching operations",
      "Unsecured communication channels and missing history"
    ],
    stats: [
      { 
        label: "Architecture", 
        value: "Modular", 
        desc: "Clean service/route separation for maintainable scale",
        icon: <FiCpu className="text-indigo-400" size={20} />
      },
      { 
        label: "Real-time updates", 
        value: "WebSocket", 
        desc: "Socket.IO implementation for live team changes",
        icon: <FiActivity className="text-emerald-400" size={20} />
      },
      { 
        label: "Caching", 
        value: "Redis", 
        desc: "Distributed caching and robust API rate limiting",
        icon: <FiZap className="text-amber-400" size={20} />
      },
      { 
        label: "Database", 
        value: "Alembic", 
        desc: "Properly indexed PostgreSQL with migration tracking",
        icon: <FiDatabase className="text-blue-400" size={20} />
      }
    ],
    technicalHighlights: [
      "Modular FastAPI architecture with clean service/route separation",
      "Redis for distributed caching & rate limiting",
      "PostgreSQL with proper indexing and query optimization",
      "WebSockets (Socket.IO) for real-time team updates",
      "Alembic for database migrations",
      "Token-based authentication with JWT"
    ],
    whyMatters: "Hackmates provides the foundational real-time architecture needed for collaborative hackathon matching. By separating routing logic and implementing pub-sub capabilities, the backend handles complex team-merging states with low latency."
  },
  {
    id: 3,
    title: "Math Premier League (MPL)",
    subtitle: "High-Performance Quiz Backend",
    description: "A high-performance FastAPI backend for competitive quiz platforms with WebSocket communication, concurrent question assignment, and production-grade load testing. Built to handle extreme concurrent loads with zero failures.",
    link: "https://github.com/pseudorex/MPL_normal",
    techStack: ["FastAPI", "PostgreSQL", "WebSockets", "SQLAlchemy", "K6", "Uvicorn"],
    problems: [
      "Race conditions in concurrent question assignment",
      "Real-time leaderboard synchronization across hundreds of teams",
      "Data integrity and duplicate question allocation under extreme load"
    ],
    stats: [
      { 
        label: "Registrations", 
        value: "280+ Teams", 
        desc: "Handled 4,156 teams in 30 seconds with 100% success rate",
        icon: <FiUsers className="text-purple-400" size={20} />
      },
      { 
        label: "P95 Response", 
        value: "<500ms", 
        desc: "363ms average response under 100 concurrent users",
        icon: <FiClock className="text-cyan-400" size={20} />
      },
      { 
        label: "Assignments", 
        value: "0 Duplicates", 
        desc: "Pessimistic locking + database constraints prevent race conditions",
        icon: <FiShield className="text-emerald-400" size={20} />
      },
      { 
        label: "System Uptime", 
        value: "100%", 
        desc: "Maintained absolute stability under extreme 150 VU stress test",
        icon: <FiZap className="text-amber-400" size={20} />
      }
    ],
    technicalHighlights: [
      "Zero race conditions in question assignment under concurrent load",
      "Real-time WebSocket updates with no message loss",
      "Pessimistic locking with SELECT FOR UPDATE for atomic operations",
      "Database constraints ensuring referential integrity"
    ],
    testResults: {
      title: "Load Test Results (K6)",
      headers: ["Test Scenario", "VUs", "Duration", "Success Rate", "Avg Response", "P95 Response", "Throughput"],
      rows: [
        ["Team Registration", "100", "30.5s", "100%", "363ms", "499ms", "272 req/s"],
        ["Admin Operations", "60", "32.4s", "100%", "4.77s", "7.83s", "12 req/s"],
        ["Full System Test", "150", "46.8s", "100%", "6.47s", "33.73s", "5 req/s"]
      ]
    },
    whyMatters: "Most quiz backends fail under concurrent load due to race conditions in question assignment. This system uses pessimistic locking and transactional integrity to guarantee zero duplicates even when 100+ teams request questions simultaneously."
  }
];

export default function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-black px-5 lg:px-28 py-10 lg:py-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-10 space-y-6 lg:pb-6 pb-3">
        {projects.map((project) => {
          const isProjectExpanded = !!expanded[project.id];
          return (
            <motion.div
              key={project.id}
              className="w-full max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:p-10 shadow-black/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 10, delay: project.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-6">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="space-y-3 lg:max-w-[70%]">
                    <p className="text-xs text-[#A1A1AA] tracking-[0.24em] uppercase">
                      Project {String(project.id).padStart(2, "0")}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm lg:text-md font-semibold text-emerald-400">
                      {project.subtitle}
                    </p>
                    <p className="text-[#D4D4D8] text-sm lg:text-base leading-relaxed mt-2">
                      {project.description}
                    </p>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-white/10 text-white/80 border border-white/5 rounded-full px-3 py-0.5 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col gap-4 items-center lg:items-end justify-between lg:justify-start">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 transition-all font-semibold rounded-full px-5 py-2.5 text-xs lg:text-sm"
                    >
                      View GitHub
                      <TbExternalLink size={16} />
                    </a>
                    
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-white/80 hover:text-white font-medium text-xs lg:text-sm border border-white/20 hover:border-white/40 transition-all rounded-full px-5 py-2.5 bg-white/5"
                    >
                      {isProjectExpanded ? "Less Details" : "Case Study"}
                      {isProjectExpanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                    </button>
                  </div>
                </div>

                {/* Collapsible Breakdown Panel */}
                <AnimatePresence>
                  {isProjectExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 pt-6 mt-4 space-y-6">
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {project.stats.map((stat, idx) => (
                            <div 
                              key={idx}
                              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/10 transition-all group"
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                                  {stat.label}
                                </span>
                                <div className="p-1.5 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                                  {stat.icon}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xl lg:text-2xl font-extrabold text-white mb-1">
                                  {stat.value}
                                </h4>
                                <p className="text-xs text-white/60 leading-normal">
                                  {stat.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Problems Solved */}
                        {project.problems && (
                          <div className="space-y-3">
                            <h4 className="text-md lg:text-lg font-bold text-white flex items-center gap-2">
                              <FiAlertCircle className="text-rose-400" />
                              The Problems It Solves
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs lg:text-sm text-white/70">
                              {project.problems.map((prob, idx) => (
                                <li key={idx} className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                                  <span className="text-rose-400 mt-0.5">•</span>
                                  <span>{prob}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Highlights checklist */}
                        {project.technicalHighlights && (
                          <div className="space-y-3">
                            <h4 className="text-md lg:text-lg font-bold text-white flex items-center gap-2">
                              <FiCheck className="text-emerald-400" />
                              Technical Highlights
                            </h4>
                            <ul className="grid grid-cols-1 gap-2.5 text-xs lg:text-sm text-white/70">
                              {project.technicalHighlights.map((hl, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="p-0.5 bg-emerald-500/20 text-emerald-400 rounded mt-0.5 flex items-center justify-center shrink-0">
                                    <FiCheck size={12} />
                                  </span>
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Load Test Tables */}
                        {project.testResults && (
                          <div className="space-y-3">
                            <h4 className="text-md lg:text-lg font-bold text-white flex items-center gap-2">
                              <FiActivity className="text-cyan-400" />
                              {project.testResults.title}
                            </h4>
                            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
                              <table className="w-full border-collapse text-left text-xs lg:text-sm">
                                <thead>
                                  <tr className="bg-white/10 text-white font-semibold">
                                    {project.testResults.headers.map((header) => (
                                      <th key={header} className="p-3 border-b border-white/10 whitespace-nowrap">
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {project.testResults.rows.map((row, rIdx) => (
                                    <tr 
                                      key={rIdx} 
                                      className="border-b border-white/5 hover:bg-white/5 transition-colors duration-150 last:border-b-0"
                                    >
                                      {row.map((cell, cIdx) => (
                                        <td key={cIdx} className="p-3 text-white/80 whitespace-nowrap">
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Why this matters callout */}
                        {project.whyMatters && (
                          <div className="bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 border-l-4 border-emerald-500 rounded-r-2xl p-4 mt-4">
                            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
                              Why This Matters
                            </h5>
                            <p className="text-xs lg:text-sm text-white/80 leading-relaxed font-light">
                              {project.whyMatters}
                            </p>
                          </div>
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

