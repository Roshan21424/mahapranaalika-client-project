"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Facebook } from "lucide-react"

const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
]

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative w-full bg-gradient-to-b from-[#080808] to-[#0a0a0a] text-white py-24 overflow-hidden"
    >
      {/* Cinematic glowing aura */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 text-center">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-3"
          >
            INVESTMENT PORTFOLIO
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl text-white mb-4 font-light"
          >
            Strategic <span className="font-semibold">Investment</span> Across Industries
          </motion.h2>
          <motion.p
            className="text-xl text-white/70 mt-4 max-w-2xl mx-auto font-light"
          >
            Discover our expertise across diverse industries, delivering innovation, efficiency, and reliability.
          </motion.p>
        </div>

        {/* Founder Info Only */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl text-left"
        >
          <h2 className="text-4xl font-bold mb-2 text-center">
            Mr. Ratnaraju Duggi
          </h2>
          <p className="text-blue-400 text-center font-medium mb-6">
            Founder & Visionary
          </p>

          <p className="text-gray-300 mb-4">
            A relentless strategist, a disciplined mentor, and the mind that turns ideas into empires. With a career spanning leadership, technology, and innovation, he inspires everyone around him to think big — and act even bigger.
          </p>
          <p className="text-gray-300 mb-4">
            His journey reflects dedication, precision, and the ability to build sustainable enterprises that shape the future. A true visionary who believes in progress with purpose.
          </p>

          <blockquote className="italic border-l-4 border-blue-500 pl-4 text-blue-200 text-lg mb-6">
            “Legacies aren’t built in silence. They are built in motion.”
          </blockquote>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-6 items-center">
            <p className="text-white/70">Follow me at: </p>
            {socials.map(({ name, icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="p-3 bg-white/10 hover:bg-white hover:text-black border border-white/20 rounded-full transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
