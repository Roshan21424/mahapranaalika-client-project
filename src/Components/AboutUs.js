"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: "1000+", label: "Businesses Joined" },
    { value: "₹500Cr", label: "Capital Deployed" },
    { value: "24", label: "States Covered" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="aboutus" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080808] to-[#0a0a0a] text-white">
      {/* Glass Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-900/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-900/10 to-transparent rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header and About Section with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <div className="inline-block px-4 py-1.5 font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm tracking-wider mb-8 w-fit">
                INDUSTRY SOLUTIONS
              </div>

              <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
                We provide <span className="font-semibold">tailored solutions</span> for business success
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-white/70 leading-relaxed text-lg font-light">
                  Maha Pranaalika is a transformative economic movement reshaping the business landscape of Andhra
                  Pradesh and Telangana, bringing together manufacturing, retail, logistics, healthcare, exports, and
                  technology.
                </p>
                <p className="text-white/70 leading-relaxed text-lg font-light">
                  We are opening only <span className="text-white font-medium">1000 membership slots</span> for
                  visionary entrepreneurs to be part of a <span className="text-white font-medium">₹3300 Crore</span>{" "}
                  Business Empire.
                </p>
              </div>

              {/* Stats Section */}
              <div className="flex flex-wrap gap-12 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="backdrop-blur-sm text-center">
                    <div className="text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/60 font-light uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <button className="group relative px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 group-hover:mr-2 transition-all duration-300">
                    Join the Revolution
                  </span>
                  <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                </button>
                <p className="text-white/40 text-sm mt-3 font-light">Limited slots available. Apply now.</p>
              </div>
            </motion.div>

            {/* Image on the right */}
            <motion.div variants={itemVariants} className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] h-[550px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] group">
                {/* Glass border effect */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src="/PageImg/aboutUs.jpg?height=900&width=600"
                  alt="Business Revolution"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-8 left-8 text-white z-10">
                  <h3 className="text-2xl font-light drop-shadow-lg">
                    Business <span className="font-medium">Revolution</span>
                  </h3>
                  <div className="h-0.5 w-12 bg-white/50 my-3"></div>
                  <p className="text-sm text-white/70 drop-shadow-sm font-light tracking-wide">
                    Reshaping India's Economic Future
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
