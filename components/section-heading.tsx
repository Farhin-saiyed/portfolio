"use client"

import { motion } from "framer-motion"

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: [0.17, 0.55, 0.55, 1],
      }}
      className="mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">{title}</span>
      </h2>
    </motion.div>
  )
}

