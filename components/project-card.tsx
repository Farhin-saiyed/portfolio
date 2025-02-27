"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  index: number
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.17, 0.55, 0.55, 1],
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 mb-4">{description}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm bg-black/30 backdrop-blur-sm rounded-full text-white border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

