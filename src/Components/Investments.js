"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { TrendingUp, BarChart3, DollarSign, Landmark, Building, LineChart, ArrowUpRight } from 'lucide-react'

export default function Investments() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  }

  // Funding data with glass theme colors
  const fundingData = [
    { name: "Maha Pranaalika", value: 25, color: "rgba(255, 215, 0, 0.7)" },
    { name: "Loans & Schemes", value: 35, color: "rgba(0, 128, 128, 0.7)" },
  ]

  const data = [
    {
      title: "MSME Loans",
      description: "Government-backed loans for micro, small, and medium enterprises with subsidized interest rates.",
      amount: "₹800 Crores",
      icon: <Building className="h-8 w-8" />,
      growth: "+12.5%",
    },
    {
      title: "NABARD Subsidies",
      description: "Agricultural and rural development funding with significant subsidies for qualifying businesses.",
      amount: "₹600 Crores",
      icon: <Landmark className="h-8 w-8" />,
      growth: "+8.3%",
    },
    {
      title: "Venture Capital",
      description: "Strategic partnerships with venture capital firms for high-growth business verticals.",
      amount: "₹500 Crores",
      icon: <LineChart className="h-8 w-8" />,
      growth: "+15.7%",
    },
    {
      title: "Private Investment",
      description: "Opportunities for private investors to participate in specific business units or sectors.",
      amount: "₹575 Crores",
      icon: <DollarSign className="h-8 w-8" />,
      growth: "+10.2%",
    },
  ]

  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setAnimatedValue((prev) => {
          if (prev < 3300) {
            return prev + 50
          }
          clearInterval(interval)
          return 3300
        })
      }, 20)

      return () => clearInterval(interval)
    }
  }, [inView])

  return (
    <section id="investment_portfolio" className="py-24 bg-gradient-to-b from-[#080808] to-[#0a0a0a] relative overflow-hidden">
      {/* Glass morphism decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="mb-16 text-center">
            <motion.div 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-3"
            >
              INVESTMENT PORTFOLIO
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl text-white mb-4 font-light"
            >
              Strategic <span className="font-semibold">Investment</span> Across Industries
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-white/70 mt-4 max-w-3xl mx-auto font-light"
            >
              Discover our expertise across diverse industries, delivering innovation, efficiency, and reliability.
            </motion.p>
          </div>

          <div className="flex flex-col space-y-16">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 backdrop-blur-md bg-white/5 border border-white/10 col-span-1 flex flex-col relative overflow-hidden rounded-2xl">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>

                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-white/10 mr-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-white font-light">Total <span className="font-medium">Investment</span></h3>
                </div>

                <div className="mb-6">
                  <p className="text-5xl text-white font-light">
                    ₹{animatedValue.toLocaleString()} <span className="text-2xl font-light">Crores</span>
                  </p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="h-4 w-4 text-white/70 mr-1" />
                    <span className="text-white/70 font-light">+14.8% from previous year</span>
                  </div>
                </div>

                <p className="mt-3 text-white/60 leading-relaxed font-light">
                  A strategic investment portfolio across multiple business verticals, creating a diversified and
                  resilient business ecosystem with sustainable growth potential.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl col-span-1 md:col-span-2 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>

                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-white/10 mr-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-white">Funding <span className="font-medium">Distribution</span></h3>
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-between">
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <p className="mb-6 text-white/60 leading-relaxed font-light">
                      Our funding model balances direct investment with strategic partnerships, government schemes, and
                      private capital to optimize growth and minimize risk across all business verticals.
                    </p>

                    <ul className="space-y-4">
                      {fundingData.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div
                            className="w-4 h-4 rounded-full mr-3 shadow-md"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-white font-light">
                            {item.name}: <span className="text-white/60">{item.value}%</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="h-[220px] w-full lg:w-1/2 relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={fundingData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          strokeWidth={1}
                          stroke="rgba(255, 255, 255, 0.1)"
                        >
                          {fundingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Allocation"]}
                          contentStyle={{
                            background: "rgba(0, 0, 0, 0.8)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "12px",
                            padding: "12px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                            color: "white",
                          }}
                          itemStyle={{ color: "rgba(255, 255, 255, 0.8)" }}
                        />
                        <Legend
                          layout="horizontal"
                          verticalAlign="bottom"
                          align="center"
                          wrapperStyle={{ color: "rgba(255, 255, 255, 0.7)" }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-12 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-3">
                  SECTOR ALLOCATION
                </div>
                <h2 className="text-4xl font-light text-white mb-4">
                  Industry-Specific <span className="font-medium">Investment Solutions</span>
                </h2>
                <p className="text-xl text-white/70 mt-4 max-w-3xl mx-auto mb-8 font-light">
                  Our strategic investments are distributed across various sectors to ensure optimal growth and risk
                  management.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {data.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden relative group"
                  >
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-xl bg-white/10 text-white">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-light text-white">{item.title}</h3>
                          <span className="text-black bg-white/80 backdrop-blur-md px-2 py-1 rounded-full text-sm font-medium">
                            {item.growth}
                          </span>
                        </div>
                        <h4 className="text-white text-2xl font-light mb-3">{item.amount}</h4>
                        <p className="text-white/60 leading-relaxed font-light">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                  <span className="group-hover:mr-2 transition-all duration-300">View Detailed Investment Report</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
