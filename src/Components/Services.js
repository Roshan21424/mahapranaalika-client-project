"use client"

import { useState, useRef } from "react"
import { Briefcase, GraduationCap, Store, BarChart3, Lightbulb, Leaf } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const data = [
    {
      title: "Employment Opportunities",
      description:
        "Creating direct & indirect employment for thousands of people across India, with a focus on local communities.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
    },
    {
      title: "Skill Development",
      description:
        "Comprehensive training programs for entrepreneurs & workers to enhance their skills and advance their careers.",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Empowering Small Businesses",
      description:
        "Supporting local farmers & small businesses by integrating them into our supply chain and providing resources for growth.",
      icon: <Store className="h-8 w-8" />,
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30",
    },
    {
      title: "Corporate Growth",
      description:
        "Establishing professional & managerial roles for corporate expansion with clear advancement pathways.",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Innovation & Technology",
      description: "Driving technological advancements and innovative solutions for business and societal progress.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30",
    },
    {
      title: "Sustainable Development",
      description: "Ensuring eco-friendly growth strategies and responsible business practices for a better future.",
      icon: <Leaf className="h-8 w-8" />,
      color: "from-green-500/20 to-lime-500/20",
      borderColor: "border-green-500/30",
    },
  ]

  return (
    <div className="w-full py-24 px-4 md:px-6 bg-gradient-to-b from-[#080808] to-[#0a0a0a] relative overflow-hidden">
      {/* Glass Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-900/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-900/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-start mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-4 py-1.5 font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm tracking-wider mb-6 w-fit">
            OUR IMPACT
          </div>
          <h2 className="text-3xl md:text-4xl text-white font-light mb-6">
            Our Impact & <span className="font-semibold">Initiatives</span>
          </h2>
          <p className="text-white/70 text-lg font-light max-w-2xl">
            Driving positive change through sustainable growth and community empowerment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`h-full backdrop-blur-md bg-white/5 border ${item.borderColor} rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden group`}
              >
                {/* Subtle background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/10 text-white/90">{item.icon}</div>
                    <h3 className="text-xl font-light text-white">
                      <span className="font-medium">{item.title.split(" ")[0]}</span>{" "}
                      {item.title.split(" ").slice(1).join(" ")}
                    </h3>
                  </div>

                  <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
