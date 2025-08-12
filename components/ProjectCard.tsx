import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '@/app/types/project'

export default function ProjectCard({ index, project }: { index: number; project: Project }) {
  return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col overflow-hidden relative
                   border-black rounded-xl
                   bg-linear-0 from-black to-zinc-900
      ">
        {/* Image */}
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={300}
            className="w-full h-44 object-cover p-4
                       opacity-90
                       rounded-lg invert hover:invert-0

            "
          />
          <h2 className="text-2xl font-bold text-zinc-400 absolute top-9 right-0 bg-black rounded-l-lg p-3
                         border-2 border-black
                         ">
            {project.title}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 pt-0 mb-2 space-y-4">
          <p className="text-lg tracking-wide text-white opacity-80">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 m-2 ml-0 absolute bottom-0">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="bg-black text-sm text-zinc-600 px-2 py-1 rounded-lg ring-2 ring-white/20 hover:invert"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
  )}
