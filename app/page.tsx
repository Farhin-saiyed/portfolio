"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/nav-bar"
import SectionHeading from "@/components/section-heading"
import SkillCard from "@/components/skill-card"
import ExperienceItem from "@/components/experience-item"
import Reveal from "@/components/reveal"
import { Code2, Database, Layout, Download } from "lucide-react"
import ProjectCard from "@/components/project-card"

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Farhin_Saiyed_Resume.pdf"
    link.download = "Farhin_Saiyed_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (isLoading) {
    return null
  }

  return (
    <main className="bg-black">
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center gradient-bg">
        <div className="text-center max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.17, 0.55, 0.55, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Farhin Saiyed
              </span>{" "}
              👋
            </h1>
            <div className="h-[80px] mb-4">
              <TypeAnimation
                sequence={["Data Analyst", 2000, "Full Stack Developer", 2000]}
                wrapper="h2"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-xl md:text-2xl text-gray-300"
              />
            </div>
            <Reveal>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Passionate about transforming complex data into actionable insights and building innovative web
                solutions. Let&apos;s create something amazing together.
              </p>
            </Reveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
            <motion.div
              className="w-1 h-2 bg-white rounded-full mx-auto mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Data-driven professional with expertise in SQL, Tableau, ETL and advanced analytics tools, committed
                  to delivering actionable insights that drive business decisions and operational efficiencies.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-300">Based in Scarborough, ON</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    <span className="text-gray-300">Available for new opportunities</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <h4 className="font-medium mb-2 text-purple-400">Data Analysis</h4>
                    <p className="text-gray-300">
                      Transform complex data into actionable insights using SQL, Tableau, and advanced analytics tools.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <h4 className="font-medium mb-2 text-cyan-400">Full Stack Development</h4>
                    <p className="text-gray-300">
                      Build scalable web applications using modern technologies like React, Node.js, and cloud
                      platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              index={0}
              title="E-commerce Dashboard"
              description="A comprehensive dashboard for managing online store operations with real-time analytics and inventory tracking."
              image="/placeholder.svg?height=300&width=400"
              technologies={["React", "Node.js", "MongoDB", "Express", "Chart.js"]}
              liveUrl="https://your-project-url.com"
              githubUrl="https://github.com/yourusername/project"
            />
            <ProjectCard
              index={1}
              title="Data Visualization Platform"
              description="Interactive platform for visualizing complex datasets using advanced charting libraries and real-time updates."
              image="/placeholder.svg?height=300&width=400"
              technologies={["Python", "D3.js", "Flask", "PostgreSQL", "Redis"]}
              liveUrl="https://your-project-url.com"
              githubUrl="https://github.com/yourusername/project"
            />
            <ProjectCard
              index={2}
              title="AI-Powered Analytics"
              description="Machine learning solution for predictive analytics and automated reporting using advanced AI algorithms."
              image="/placeholder.svg?height=300&width=400"
              technologies={["Python", "TensorFlow", "scikit-learn", "FastAPI", "React"]}
              liveUrl="https://your-project-url.com"
              githubUrl="https://github.com/yourusername/project"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Skills & Technologies" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <SkillCard
              index={0}
              title="Frontend Development"
              Icon={Layout}
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
              ]}
            />
            <SkillCard
              index={1}
              title="Backend Development"
              Icon={Database}
              skills={["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]}
            />
            <SkillCard
              index={2}
              title="Tools & Platforms"
              Icon={Code2}
              skills={["Git", "GitHub", "VS Code", "Vercel", "AWS", "Firebase", "Docker", "Linux"]}
            />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Experience" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants}>
              <ExperienceItem
                title="Data Analyst"
                company="Vision AI"
                period="June 2022 – Present"
                description={[
                  "Developed and maintained Tableau dashboards, visualizing key business metrics and improving decision-making by presenting complex data in accessible formats.",
                  "Generated detailed reports and dashboards using SQL and Excel to track business performance, resulting in a 25% improvement in reporting efficiency.",
                  "Collaborated with cross-functional teams to analyze business needs and implement data-driven solutions.",
                  "Applied advanced analytical methods to identify trends, forecast performance, and support strategic initiatives.",
                  "Effectively communicated findings to non-technical stakeholders, ensuring alignment and understanding across teams.",
                ]}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ExperienceItem
                title="Full Stack Web Developer"
                company="Saurabh Web Solutions"
                period="June 2018 – Dec 2019"
                description={[
                  "Architected and implemented RESTful APIs with Node.js, enhancing frontend-backend communication efficiency by 35%.",
                  "Executed server-side validation and robust error handling to ensure data integrity and maintain application stability.",
                  "Optimized database schemas for MySQL, achieving 25% increase in data processing efficiency.",
                  "Improved system performance by 45% through database optimization techniques.",
                  "Led the development of a CRM system, increasing client retention by 25%.",
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Education" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                title: "Post Graduate Certification in Data Analytics for Business Decision Making",
                school: "Durham College, Oshawa, ON",
                period: "Sept 2021 - Apr 2022",
              },
              {
                title: "Post Graduate Certification in Artificial Intelligence",
                school: "Georgian College, Barrie, ON",
                period: "Jan 2021 - Aug 2021",
              },
              {
                title: "Bachelors of Computer Engineering",
                school: "Gujarat Technological University, India",
                period: "Jun 2013 - May 2017",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-gray-800 rounded-lg p-6 bg-black/30"
              >
                <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                <p className="text-gray-400">{edu.school}</p>
                <p className="text-gray-400">{edu.period}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading title="Let's Connect" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.17, 0.55, 0.55, 1] }}
            className="space-y-8"
          >
            <p className="text-gray-300 text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>

            <div className="flex flex-col items-center gap-6">
              <motion.a
                href="mailto:farhin194@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Say Hello
              </motion.a>

              <div className="flex gap-6">
                <motion.a
                  href="https://github.com/Farhin-Saiyed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/farhin-saiyed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

