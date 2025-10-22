"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, X, Check, ChevronRight, ExternalLink } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const industries = [
  {
    title: "Construction",
    category: "Infrastructure planning, material procurement, and site management",
    image: "./SectorsImg/construction.jpg?height=600&width=800",
    description:
      "Our construction division specializes in commercial, residential, and industrial projects with a focus on sustainable building practices and innovative design solutions.",
    points: [
      "End-to-end project management from concept to completion",
      "Sustainable building materials and energy-efficient designs",
      "Advanced construction technologies for faster project delivery",
      "Strict quality control and safety standards compliance",
      "Experienced team of architects, engineers, and project managers",
    ],
    umlTitle: "Construction Project Workflow",
    umlImage: "./UMLDiagrams/constructionProcess.png",
  },
  {
    title: "Exports",
    category: "International trade, logistics, and regulatory compliance",
    image: "./SectorsImg/exports.jpg?height=600&width=800",
    description:
      "Our export division facilitates global trade by managing complex international logistics, customs clearance, and regulatory compliance for businesses expanding into international markets.",
    points: [
      "Market research and entry strategy development",
      "Documentation and customs clearance management",
      "International shipping and logistics coordination",
      "Regulatory compliance and certification assistance",
      "Global distribution network management",
    ],
    umlTitle: "Export Process Flow",
    umlImage: "./UMLDiagrams/exportProcess.png",
  },
  {
    title: "Glass Molding",
    category: "Precision molding techniques for durable glass products",
    image: "./SectorsImg/glass.jpg?height=600&width=800",
    description:
      "Our glass molding facility produces high-quality glass products using advanced techniques that ensure precision, durability, and aesthetic appeal for various industrial and consumer applications.",
    points: [
      "Custom glass product design and prototyping",
      "Precision molding for consistent quality",
      "Heat treatment and tempering processes",
      "Decorative and functional glass solutions",
      "Quality testing and certification",
    ],
    umlTitle: "Glass Production Workflow",
    umlImage: "./UMLDiagrams/GlassMolding.png",
  },
  {
    title: "Hospital Sector",
    category: "Advanced healthcare solutions, medical equipment, and patient care",
    image: "./SectorsImg/medical.jpg?height=600&width=800",
    description:
      "Our healthcare division provides comprehensive hospital management solutions, medical equipment supply, and healthcare consulting services to improve patient outcomes and operational efficiency.",
    points: [
      "Hospital design and infrastructure planning",
      "Medical equipment procurement and maintenance",
      "Healthcare staff training and development",
      "Patient care management systems",
      "Healthcare compliance and accreditation support",
    ],
    umlTitle: "Hospital Management System",
    umlImage: "./UMLDiagrams/hospitalSector.png",
  },
  {
    title: "Import Machinery",
    category: "Sourcing high-quality machinery for various industries",
    image: "./SectorsImg/machines.jpeg?height=600&width=800",
    description:
      "Our machinery import division sources and supplies high-quality industrial equipment from global manufacturers, providing installation, training, and maintenance services.",
    points: [
      "Global sourcing of specialized industrial machinery",
      "Technical specification matching and customization",
      "Import logistics and customs clearance",
      "Installation and commissioning services",
      "Operator training and maintenance support",
    ],
    umlTitle: "Machinery Import Process",
    umlImage: "./UMLDiagrams/importMachinary.png",
  },
  {
    title: "IT Sector",
    category: "Software development, cloud solutions, and cybersecurity",
    image: "./SectorsImg/it.jpg?height=600&width=800",
    description:
      "Our IT division delivers cutting-edge software solutions, cloud infrastructure, and cybersecurity services to help businesses digitally transform and protect their digital assets.",
    points: [
      "Custom software development and integration",
      "Cloud migration and infrastructure management",
      "Cybersecurity assessment and implementation",
      "Data analytics and business intelligence",
      "IT consulting and digital transformation",
    ],
    umlTitle: "Software Development Lifecycle",
    umlImage: "./UMLDiagrams/itSector.png",
  },
  {
    title: "Meat & Aqua Industry",
    category: "Processing, packaging, and distribution of meat and seafood",
    image: "./SectorsImg/meat.jpg?height=600&width=800",
    description:
      "Our meat and aquaculture division specializes in sustainable farming, processing, and distribution of premium quality meat and seafood products for domestic and international markets.",
    points: [
      "Sustainable farming and harvesting practices",
      "HACCP-certified processing facilities",
      "Advanced packaging for extended shelf life",
      "Cold chain logistics and distribution",
      "Quality control and food safety compliance",
    ],
    umlTitle: "Meat Processing Workflow",
    umlImage: "./UMLDiagrams/meatandauqaCultureProduction.png",
  },
  {
    title: "Mechanical & Electrical Engineering",
    category: "Industrial automation, robotics, and power systems",
    image: "./SectorsImg/electrics.jpeg?height=600&width=800",
    description:
      "Our engineering division provides comprehensive mechanical and electrical solutions for industrial automation, power systems, and custom engineering projects.",
    points: [
      "Industrial automation and control systems",
      "Power generation and distribution solutions",
      "HVAC system design and implementation",
      "Robotics and precision engineering",
      "Preventive maintenance and system optimization",
    ],
    umlTitle: "Engineering Project Lifecycle",
    umlImage: "./UMLDiagrams/mechanicalandelectricalhardwaresupply.png",
  },
  {
    title: "Medical Distribution",
    category: "Pharmaceutical logistics and healthcare supply chain",
    image: "./SectorsImg/medicine.jpg?height=600&width=800",
    description:
      "Our medical distribution network ensures timely and compliant delivery of pharmaceuticals, medical devices, and healthcare supplies to hospitals, clinics, and pharmacies.",
    points: [
      "Temperature-controlled storage and transportation",
      "Inventory management and demand forecasting",
      "Regulatory compliance and documentation",
      "Just-in-time delivery systems",
      "Track and trace technology implementation",
    ],
    umlTitle: "Medical Supply Chain",
    umlImage: "./UMLDiagrams/medicaldistributionandstore.png",
  },
  {
    title: "Oil Production",
    category: "Exploration, drilling, and refining petroleum resources",
    image: "./SectorsImg/oil.jpg?height=600&width=800",
    description:
      "Our oil production division employs advanced technologies for exploration, extraction, and refining of petroleum resources with a strong focus on environmental responsibility.",
    points: [
      "Geological surveys and resource assessment",
      "Drilling and extraction operations",
      "Refining and product development",
      "Environmental monitoring and compliance",
      "Distribution and market development",
    ],
    umlTitle: "Oil Production Process",
    umlImage: "./UMLDiagrams/oilproduction.png",
  },
  {
    title: "Packaging Industry",
    category: "Eco-friendly and durable packaging solutions",
    image: "./SectorsImg/packagin.jpg?height=600&width=800",
    description:
      "Our packaging division develops innovative, eco-friendly packaging solutions that protect products, reduce environmental impact, and enhance brand presentation.",
    points: [
      "Sustainable packaging material development",
      "Custom packaging design and prototyping",
      "High-volume production capabilities",
      "Quality testing and certification",
      "Supply chain integration services",
    ],
    umlTitle: "Packaging Development Process",
    umlImage: "./UMLDiagrams/packagingIndustry.png",
  },
  {
    title: "Plastic Industry",
    category: "Innovative plastic manufacturing and recycling solutions",
    image: "./SectorsImg/plastic.jpg?height=600&width=800",
    description:
      "Our plastics division specializes in manufacturing high-quality plastic products while pioneering recycling technologies to minimize environmental impact.",
    points: [
      "Custom plastic product design and manufacturing",
      "Biodegradable and recycled plastic options",
      "Injection molding and extrusion capabilities",
      "Quality control and material testing",
      "Plastic recycling and circular economy initiatives",
    ],
    umlTitle: "Plastic Manufacturing Cycle",
    umlImage: "./UMLDiagrams/plasticMolding.png",
  },
  {
    title: "Poultry Farming",
    category: "Efficient poultry breeding, nutrition, and disease control",
    image: "./SectorsImg/hen.jpg?height=600&width=800",
    description:
      "Our poultry farming operations implement modern breeding techniques, nutrition management, and disease control measures to produce high-quality poultry products.",
    points: [
      "Breeding program management and genetic selection",
      "Nutrition formulation and feed production",
      "Disease prevention and biosecurity measures",
      "Processing and packaging facilities",
      "Distribution and market development",
    ],
    umlTitle: "Poultry Production Cycle",
    umlImage: "./UMLDiagrams/poultryForm.png",
  },
  {
    title: "Rice Production",
    category: "Sustainable farming techniques and global distribution",
    image: "./SectorsImg/rice.jpg?height=600&width=800",
    description:
      "Our rice production division employs sustainable farming practices, modern processing techniques, and global distribution networks to deliver premium quality rice products.",
    points: [
      "Sustainable farming and water management",
      "Modern harvesting and processing technology",
      "Quality grading and certification",
      "Packaging and brand development",
      "Global distribution and market access",
    ],
    umlTitle: "Rice Production Process",
    umlImage: "./UMLDiagrams/riceProduction.png",
  },
  {
    title: "Solar Panel Supply",
    category: "Renewable energy solutions for commercial and residential use",
    image: "./SectorsImg/solars.jpeg?height=600&width=800",
    description:
      "Our solar energy division provides end-to-end solar power solutions including panel manufacturing, system design, installation, and maintenance for residential and commercial applications.",
    points: [
      "High-efficiency solar panel production",
      "Custom system design and engineering",
      "Professional installation services",
      "Battery storage solutions",
      "Monitoring and maintenance programs",
    ],
    umlTitle: "Solar Energy System",
    umlImage: "./UMLDiagrams/solarPanelSupply.png",
  },
  {
    title: "Supermarket Business",
    category: "Retail management, supply chain, and customer engagement",
    image: "./SectorsImg/supermarket.jpeg?height=600&width=800",
    description:
      "Our supermarket division operates modern retail outlets with efficient inventory management, diverse product offerings, and enhanced customer experience.",
    points: [
      "Store design and layout optimization",
      "Inventory management and supply chain integration",
      "Private label product development",
      "Customer loyalty programs",
      "E-commerce and home delivery services",
    ],
    umlTitle: "Supermarket Operations",
    umlImage: "./UMLDiagrams/superMArketBusiness.png",
  },
  {
    title: "Transportation & Logistics",
    category: "Efficient logistics, warehousing, and freight services",
    image: "./SectorsImg/logistics.jpeg?height=600&width=800",
    description:
      "Our logistics division provides comprehensive transportation, warehousing, and supply chain solutions to optimize the movement of goods across domestic and international markets.",
    points: [
      "Multimodal transportation services",
      "Warehouse management and distribution",
      "Supply chain optimization",
      "Real-time tracking and visibility",
      "Customs clearance and international shipping",
    ],
    umlTitle: "Logistics Network",
    umlImage: "./UMLDiagrams/transportAndLogistics.png",
  },
  {
    title: "Dairy Farming",
    category: "Livestock management, dairy production, and quality control",
    image: "./SectorsImg/cows.jpeg?height=600&width=800",
    description:
      "Our dairy farming operations implement modern techniques for optimal milk production while maintaining the highest standards of animal welfare and product quality.",
    points: [
      "State-of-the-art milking and processing facilities",
      "Veterinary care and nutrition management for livestock",
      "Cold chain logistics for product freshness",
      "Organic and conventional dairy product lines",
      "Farm-to-table traceability systems",
    ],
    umlTitle: "Dairy Production Process",
    umlImage: "./UMLDiagrams/dairy-uml.png",
  },
  {
    title: "Water Plant Business",
    category: "Water purification, bottling, and distribution",
    image: "./SectorsImg/water.jpeg?height=600&width=800",
    description:
      "Our water business specializes in purification technology, bottling operations, and distribution of safe drinking water for consumer and commercial markets.",
    points: [
      "Advanced water purification systems",
      "Quality testing and certification",
      "Efficient bottling and packaging operations",
      "Distribution network management",
      "Sustainable water resource management",
    ],
    umlTitle: "Water Purification Process",
    umlImage: "./UMLDiagrams/warterPlantBusiness.png",
  },
]



// Glassomorphic card component
const GlassCard = ({ children, className = "", onClick = null }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`relative backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden ${className}`}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

// Animated gradient background
const AnimatedGradientBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -inset-[10%] opacity-30">
        <div className="absolute top-0 -left-[25%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-purple-500/40 to-indigo-500/40 blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 -right-[25%] w-[50%] h-[50%] rounded-full bg-gradient-to-l from-rose-500/40 to-pink-500/40 blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-blue-500/40 to-cyan-500/40 blur-[100px] animate-blob"></div>
      </div>
    </div>
  )
}

// Portfolio item card
const PortfolioItem = ({ industry, onClick }) => {
  return (
    <GlassCard onClick={() => onClick(industry)} className="cursor-pointer h-[340px] group">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 z-10"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img
          src={industry.image || "/placeholder.svg?height=600&width=800"}
          alt={industry.title}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
        <div className="flex flex-col items-start">
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white/90 mb-3 border border-white/20">
            {industry.category.split(",")[0]}
          </div>
          <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-cyan-300 transition-colors">
            {industry.title}
          </h3>
          <p className="text-white/80 text-sm line-clamp-2 mb-4 max-w-[90%]">{industry.category}</p>

          <div className="flex items-center text-cyan-300 text-sm font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span>Explore capabilities</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </GlassCard>
  )
}

// Detailed view modal
const DetailedView = ({ industry, onClose }) => {
  const modalRef = useRef(null)
  const [activeTab, setActiveTab] = useState("overview")

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-md"
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]"
      >
        {/* Header image with gradient overlay */}
        <div className="h-64 sm:h-80 overflow-hidden relative rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900/95 z-10"></div>
          <img
            src={industry.image || "/placeholder.svg?height=600&width=800"}
            alt={industry.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors duration-200 border border-white/20"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
            <div className="flex flex-col items-start">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-3 shadow-lg">
                Industry Expertise
              </div>
              <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">{industry.title}</h2>
              <p className="text-white/80 text-lg">{industry.category}</p>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="p-8">
          {/* Navigation tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "overview"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("capabilities")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "capabilities"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
            >
              Capabilities
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "process"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
            >
              Process Flow
            </button>
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-8 mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{industry.description}</p>
                </GlassCard>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <GlassCard className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Industry Expertise</h4>
                    <p className="text-white/80">
                      Our specialized team brings decades of combined experience in the {industry.title.toLowerCase()}{" "}
                      sector, delivering innovative solutions that drive business growth and operational excellence.
                    </p>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Our Approach</h4>
                    <p className="text-white/80">
                      We combine cutting-edge technology with industry best practices to create tailored solutions that
                      address the unique challenges and opportunities in the {industry.title.toLowerCase()} industry.
                    </p>
                  </GlassCard>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setActiveTab("capabilities")}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View capabilities</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "capabilities" && (
              <motion.div
                key="capabilities"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Key Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {industry.points.map((point, index) => (
                    <GlassCard key={index} className="p-6 group">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors duration-300 border border-cyan-500/30">
                          <Check className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-white/90 text-lg">{point}</p>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setActiveTab("process")}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View process flow</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "process" && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">{industry.umlTitle}</h3>
                <GlassCard className="p-6 mb-8">
                  <div className="bg-slate-800/50 border border-white/5 rounded-xl p-6 overflow-hidden shadow-inner">
                    {industry.umlImage ? (
                      <img
                        src={industry.umlImage || "/placeholder.svg?height=400&width=800"}
                        alt={`${industry.title} Process Flow Diagram`}
                        width={800}
                        height={400}
                        className="w-full h-auto max-h-[400px] object-contain mx-auto"
                      />
                    ) : (
                      <EnhancedUMLDiagram title={industry.title} />
                    )}
                  </div>
                </GlassCard>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-full font-medium transition-colors duration-200 border border-white/20 flex items-center justify-center"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Close
                  </button>
                  <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-full font-medium transition-all duration-200 flex items-center justify-center group">
                    <span>Contact Our Specialists</span>
                    <ExternalLink className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Enhanced UML diagram component with animation
const EnhancedUMLDiagram = ({ title }) => {
  return (
    <div className="w-full h-[400px] relative overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 800 400" className="mx-auto">
        <defs>
          <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="url(#lineGradient)" />
          </marker>
        </defs>

        {/* Main process box */}
        <motion.rect
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          x="300"
          y="120"
          width="200"
          height="60"
          rx="10"
          fill="url(#boxGradient)"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          filter="url(#glow)"
        />
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          x="400"
          y="155"
          textAnchor="middle"
          fill="#ffffff"
          fontWeight="bold"
        >
          {title} Process
        </motion.text>

        {/* Input box */}
        <motion.rect
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          x="100"
          y="120"
          width="120"
          height="60"
          rx="10"
          fill="url(#boxGradient)"
          stroke="url(#lineGradient)"
          strokeWidth="2"
        />
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          x="160"
          y="155"
          textAnchor="middle"
          fill="#ffffff"
          fontWeight="bold"
        >
          Input
        </motion.text>

        {/* Output box */}
        <motion.rect
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          x="580"
          y="120"
          width="120"
          height="60"
          rx="10"
          fill="url(#boxGradient)"
          stroke="url(#lineGradient)"
          strokeWidth="2"
        />
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          x="640"
          y="155"
          textAnchor="middle"
          fill="#ffffff"
          fontWeight="bold"
        >
          Output
        </motion.text>

        {/* Sub-process boxes */}
        <motion.rect
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          x="250"
          y="220"
          width="120"
          height="50"
          rx="10"
          fill="url(#boxGradient)"
          stroke="url(#lineGradient)"
          strokeWidth="2"
        />
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          x="310"
          y="250"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="14"
        >
          Planning
        </motion.text>

        <motion.rect
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          x="400"
          y="220"
          width="120"
          height="50"
          rx="10"
          fill="url(#boxGradient)"
          stroke="url(#lineGradient)"
          strokeWidth="2"
        />
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          x="460"
          y="250"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="14"
        >
          Execution
        </motion.text>

        <motion.rect
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          x="325"
          y="30"
          width="150"
          height="50"
          rx="10"
          fill="url(#boxGradient)"
          stroke="url(#lineGradient)"
          strokeWidth="2"
        />
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          x="400"
          y="60"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="14"
        >
          Quality Control
        </motion.text>

        {/* Arrows */}
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          x1="220"
          y1="150"
          x2="290"
          y2="150"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          x1="500"
          y1="150"
          x2="570"
          y2="150"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          x1="310"
          y1="180"
          x2="310"
          y2="210"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          x1="460"
          y1="180"
          x2="460"
          y2="210"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          x1="400"
          y1="120"
          x2="400"
          y2="90"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  )
}

export default function Sectors({ portfolioRef }) {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [filter, setFilter] = useState("all")
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  // Filter industries based on selected category
  const filteredIndustries =
    filter === "all"
      ? industries
      : industries.filter((industry) => industry.category.toLowerCase().includes(filter.toLowerCase()))

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry)
  }

  const handleCloseDetail = () => {
    setSelectedIndustry(null)
  }

  // Category filters
  const categories = [
    { id: "all", name: "All Industries" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "healthcare", name: "Healthcare" },
    { id: "technology", name: "Technology" },
    { id: "agriculture", name: "Agriculture" },
    { id: "logistics", name: "Logistics" },
  ]

  return (
    <section id="sectors" ref={portfolioRef} className="py-24 relative bg-gradient-to-b from-[#080808] to-[#0a0a0a] overflow-hidden">
      <AnimatedGradientBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-block px-4 py-1.5 font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm tracking-wider mb-8 w-fit">
            INDUSTRY EXPERTISE
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="font-light">Comprehensive </span> Industry Solutions
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover our expertise across diverse industries, delivering innovation, efficiency, and reliability through
            our specialized business divisions.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm  transition-all duration-300 ${filter === category.id
                  ? " text-black font-bold bg-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ opacity }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioItem industry={industry} onClick={handleIndustryClick} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-white/70 mb-8 max-w-3xl mx-auto">
            Our strategic approach to diversification has enabled us to create synergies across sectors, delivering
            integrated solutions that address complex business challenges.
          </p>
          <GlassCard className="inline-block py-3 px-6 group cursor-pointer">
            <div className="flex items-center text-white group-hover:text-cyan-300 transition-colors">
              <span className="font-medium">Explore Our Business Ecosystem</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndustry && <DetailedView industry={selectedIndustry} onClose={handleCloseDetail} />}
      </AnimatePresence>
    </section>
  )
}
