"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface SkillCardProps {
  title: string
  skills: string[]
  Icon: LucideIcon
  index: number
}

export default function SkillCard({ title, skills, Icon, index }: SkillCardProps) {
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
      className="group p-6 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-purple-500" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 text-sm bg-black/30 backdrop-blur-sm border border-gray-800 rounded-full text-gray-300 hover:border-purple-500/50 transition-colors duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

