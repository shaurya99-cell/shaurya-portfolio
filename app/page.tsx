"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Zap,
  ChevronUp,
} from "lucide-react";

const scrollReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const skills = [
  "Python",
  "C++",
  "JavaScript",
  "React",
  "SQL",
  "Power BI",
  "HTML",
  "CSS",
  "Git",
  "Data Analysis",
  "DBMS",
  "Problem Solving",
  "Java",
  "Tableau",
];

const projects = [
  {
    title: "Student Management System",
    desc: "A complete academic management solution built with Python & MySQL to manage attendance, records, and grades.",
    tech: ["Python", "MySQL", "DBMS"],
  },
  {
    title: "Sales Data Analytics Dashboard",
    desc: "Performed business data analysis using Pandas and Matplotlib to generate actionable business insights.",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
];

const achievements = [
  "Participated in Codestorm'25 Hackathon",
  "Volunteer at SIET Tech Fest 2025",
  "Active Member of Coding Club",
  "BCA Student focused on AI & Development",
  "Deloitte Data Analyst Job Simulation",
  "Full Stack Web Development",
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode, mounted]);

  const sectionClass = darkMode
    ? "border-white/10 bg-white/5 text-white"
    : "border-black/10 bg-white/70 text-black";

  if (!mounted) {
    return null;
  }

  return (
    <div
      id="top"
      className={`min-h-screen overflow-hidden pt-24 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-white via-slate-100 to-cyan-50 text-black"
      }`}
    >
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0ea5e9_0%,transparent_25%),radial-gradient(circle_at_bottom_left,#06b6d4_0%,transparent_25%)] opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className={`fixed bottom-6 right-6 z-[1000] w-14 h-14 rounded-full backdrop-blur-2xl border border-cyan-400/30 flex items-center justify-center hover:scale-110 transition duration-300 cursor-pointer ${
          darkMode ? "bg-black/60 text-white" : "bg-white/80 text-black"
        }`}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-24 z-[1000] w-14 h-14 rounded-full backdrop-blur-2xl border border-cyan-400/30 flex items-center justify-center hover:scale-110 transition duration-300 cursor-pointer ${
          darkMode ? "bg-black/60 text-white" : "bg-white/80 text-black"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-20 py-6 backdrop-blur-2xl z-[999] border-b shadow-[0_8px_30px_rgba(0,0,0,0.2)] ${
          darkMode
            ? "bg-black/40 border-white/10"
            : "bg-white/70 border-black/10"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-black tracking-widest bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text hover:scale-105 transition duration-300 cursor-pointer"
        >
          SHAURYA.
        </button>

        <div
          className={`hidden md:flex gap-8 text-sm uppercase tracking-[3px] ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
        variants={scrollReveal}
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <div className="max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6 backdrop-blur-lg">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span
                className={`${darkMode ? "text-cyan-300" : "text-cyan-700"} text-sm tracking-wide`}
              >
                BCA STUDENT - FUTURE SOFTWARE ENGINEER
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black leading-none mb-6">
              <span className="block">SHAURYA</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 text-transparent bg-clip-text">
                PATHAK
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 text-transparent bg-clip-text font-medium">
              Motivated BCA student passionate about AI, Data Analytics, and
              Full Stack Development. Building futuristic digital experiences
              while continuously leveling up coding skills.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:shauryapathak9918@gmail.com"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(6,182,212,0.5)] inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Hire Me
              </a>

              <a
                href="https://github.com/shaurya99-cell"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-2xl border backdrop-blur-lg hover:border-cyan-400 hover:text-cyan-400 transition duration-300 inline-flex items-center justify-center gap-2 ${
                  darkMode ? "border-white/20" : "border-black/10"
                }`}
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

            <div
              className={`relative w-full max-w-md rounded-[40px] border p-8 overflow-hidden backdrop-blur-2xl shadow-2xl ${sectionClass}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600" />

              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-bold">Developer Profile</h3>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-2xl font-black text-white">
                  SP
                </div>
              </div>

              <div className="space-y-6">
                {[
                  "Data Analyst + Full Stack Development",
                  "BCA - 2024 - 2027",
                  "Build Impactful Tech Products",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-2xl border transition ${sectionClass}`}
                  >
                    <h4 className="font-semibold text-lg">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
        variants={scrollReveal}
        className="px-6 md:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div
            className={`rounded-[32px] border backdrop-blur-xl p-10 ${sectionClass}`}
          >
            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Turning Ideas Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Digital Reality
              </span>
            </h2>

            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed text-lg`}
            >
              I am a passionate BCA student from India with strong interest in
              modern technology, software engineering, artificial intelligence,
              and data analysis. I love creating projects, learning new
              technologies, and building futuristic user experiences inspired
              by top IITian developers.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              ["6.8", "Current BCA CGPA"],
              ["10+", "Technical Skills"],
              ["2+", "Projects Completed"],
            ].map(([title, subtitle], index) => (
              <div
                key={index}
                className={`rounded-[30px] border p-8 backdrop-blur-xl ${sectionClass}`}
              >
                <h3 className="text-3xl font-bold mb-2">{title}</h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
        variants={scrollReveal}
        className="px-6 md:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
              Skills
            </p>
            <h2 className="text-5xl font-black">Tech Arsenal</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`rounded-[24px] border backdrop-blur-xl p-6 text-center hover:-translate-y-2 transition duration-500 ${sectionClass}`}
              >
                <div className="text-3xl mb-4 flex justify-center">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-lg">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
        variants={scrollReveal}
        className="px-6 md:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
              Projects
            </p>
            <h2 className="text-5xl font-black">Featured Work</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-[36px] border p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 ${sectionClass}`}
              >
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed mb-6`}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-full text-sm border ${
                        darkMode
                          ? "border-white/10 bg-white/10 text-cyan-300"
                          : "border-black/10 bg-white/60 text-cyan-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
        variants={scrollReveal}
        className="px-6 md:px-20 py-24"
      >
        <div
          className={`max-w-7xl mx-auto rounded-[40px] border p-10 md:p-16 backdrop-blur-2xl ${sectionClass}`}
        >
          <div className="mb-12 text-center">
            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
              Achievements
            </p>
            <h2 className="text-5xl font-black">Journey So Far</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`rounded-[24px] border p-6 transition duration-300 hover:-translate-y-1 ${sectionClass}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white shrink-0">
                    {index + 1}
                  </div>
                  <p
                    className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg`}
                  >
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
        variants={scrollReveal}
        className="px-6 md:px-20 py-24 pb-32"
      >
        <div
          className={`max-w-5xl mx-auto text-center rounded-[40px] border p-12 md:p-20 relative overflow-hidden backdrop-blur-2xl ${sectionClass}`}
        >
          <div className="relative z-10">
            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-balance">
              {"Let's Build The Future Together"}
            </h2>

            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg max-w-2xl mx-auto mb-10`}
            >
              Open for internships, collaborations, and exciting tech
              opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:shauryapathak9918@gmail.com"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300 inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/shaurya-pathak-405611331"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-2xl border hover:border-cyan-400 hover:text-cyan-400 transition duration-300 inline-flex items-center gap-2 ${
                  darkMode ? "border-white/20" : "border-black/10"
                }`}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer
        className={`border-t py-8 text-center text-sm ${darkMode ? "border-white/10 text-gray-400" : "border-black/10 text-gray-500"}`}
      >
        Designed & Developed by Shaurya Pathak - 2026
      </footer>
    </div>
  );
}
