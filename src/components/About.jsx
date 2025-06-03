import { motion } from "framer-motion"
import {
  Code,
  Database,
  Figma,
  GitGraphIcon as Git,
  FileCode,
  Cpu,
  Braces,
  Layers,
  LayoutGrid,
  Boxes,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const MotionCard = motion(Card)

  const skills = [
    {
      icon: <Code className="h-10 w-10 text-blue-500" />,
      title: "Problem Solving",
      description: "Analytical thinking and troubleshooting to solve complex problems efficiently.",
    },
    {
      icon: <Layers className="h-10 w-10 text-cyan-500" />,
      title: "Frontend Development",
      description: "Creating intuitive and responsive user interfaces with modern technologies.",
    },
    {
      icon: <Database className="h-10 w-10 text-emerald-500" />,
      title: "Backend Development",
      description: "Building robust server-side applications and managing databases.",
    },
    {
      icon: <Figma className="h-10 w-10 text-pink-500" />,
      title: "Figma",
      description: "Designing user interfaces and prototypes with precision.",
    },
  ]

  const technologies = [
    { icon: <FileCode className="h-6 w-6" />, name: "HTML", color: "bg-orange-500" },
    { icon: <Cpu className="h-6 w-6" />, name: "CSS", color: "bg-blue-500" },
    { icon: <Braces className="h-6 w-6" />, name: "JavaScript", color: "bg-yellow-500" },
    { icon: <Git className="h-6 w-6" />, name: "Git", color: "bg-orange-600" },
    { icon: <Layers className="h-6 w-6" />, name: "React.js", color: "bg-cyan-500" },
    { icon: <LayoutGrid className="h-6 w-6" />, name: "Next.js", color: "bg-black" },
    { icon: <Cpu className="h-6 w-6" />, name: "Tailwind CSS", color: "bg-sky-500" },
    { icon: <Boxes className="h-6 w-6" />, name: "Bootstrap", color: "bg-purple-600" },
  ]

  return (
    <section id="about" className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/20">
              <img
                src="/placeholder.svg?height=256&width=256"
                alt="Usha Nandhini"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-3 -right-3 bg-blue-500 rounded-full p-2 shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Code className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                About Me
              </h1>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  My name is <span className="font-bold text-white">Usha Nandhini</span>, and I am a B.E. Final Year
                  Student at S.A.E.C pursuing Computer Science Engineering.
                </p>
                <p className="text-lg">
                  I have a keen interest in problem solving and building web applications. As a Full Stack Developer, I
                  strive to write clean and maintainable code.
                </p>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <MotionCard
                  key={index}
                  className="bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 p-3 rounded-full bg-gray-700/50">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </CardContent>
                </MotionCard>
              ))}
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 border-t border-gray-800"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-red-400">Technologies I Use</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 rounded-full ${tech.color} mb-3`}>{tech.icon}</div>
                    <Badge variant="outline" className="font-medium px-3 py-1">
                      {tech.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
