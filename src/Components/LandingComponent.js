"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const LandingComponent = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src="/PageImg/landingPoster.png"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/80 to-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-2 text-6xl md:text-8xl font-light text-white tracking-tight">
            Maha <span className="font-bold">Pranaalika</span>
          </h1>
          
          <div className="h-0.5 w-24 bg-gradient-to-r from-white to-transparent my-6"></div>
          
          <h2 className="font-light text-2xl md:text-3xl text-white/90">
            Igniting Visions, Empowering Futures
          </h2>
          
          <p className="mb-8 mt-8 text-white/70 md:text-xl lg:w-1/2 font-light">
            A bold revolution where innovation meets impact, transforming dreams into reality with unstoppable momentum.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
              <span className="group-hover:mr-2 transition-all duration-300">Get Started</span>
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </button>
            <button className="px-8 py-3 bg-transparent text-white/80 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8">
            <p className="text-lg font-light text-white/60">Follow us:</p>

            {["linkedin", "instagram", "facebook"].map((platform) => (
              <a 
                key={platform}
                href={`https://${platform}.com`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
              >
                <img src={`/PageImg/${platform}.png`} alt={platform} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default LandingComponent;
