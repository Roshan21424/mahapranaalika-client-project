import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Mail, Send } from "lucide-react"

const faqs = [
  {
    question: "What is Maha Pranaalika, and how does it revolutionize the business landscape?",
    answer:
      "Maha Pranaalika is a large-scale economic movement aimed at transforming the business ecosystem in Andhra Pradesh and Telangana by integrating manufacturing, retail, logistics, healthcare, exports, and technology into a self-sustaining business empire.",
  },
  {
    question: "What industries are covered under Maha Pranaalika's business expansion model?",
    answer:
      "Maha Pranaalika spans multiple industries including supermarkets, dairy & milk processing, oil production, rice mills, medical distribution, meat & fish exports, solar energy, logistics, and machinery imports.",
  },
  {
    question: "How can entrepreneurs, investors, and business leaders benefit from joining Maha Pranaalika?",
    answer:
      "Members gain access to exclusive business ownership opportunities, high-ROI investments, first-mover advantages, franchise and distributorship models, and strategic expansion plans.",
  },
  {
    question: "What are the membership benefits of being one of the 1,000 exclusive members?",
    answer:
      "Members enjoy high ROI investment options, franchise ownership, priority in expansion projects, access to global trade strategies, and direct engagement with business growth plans.",
  },
  {
    question: "How does the investment and funding model of ₹3,300 crores work?",
    answer:
      "The project is funded with 25% contribution from Maha Pranaalika and 75% from bank loans, government schemes like MSME loans, NABARD subsidies, and private investment opportunities.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message or other feedback
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f8f8] to-[#ffffff] relative overflow-hidden">
      {/* Glass morphism decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-black text-sm font-medium tracking-wide mb-3">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl font-light text-black">
            Common <span className="font-medium">Questions</span> About Maha Pranaalika
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className={`flex justify-between items-center p-6 cursor-pointer backdrop-blur-md ${
                  activeIndex === index ? "bg-black/5 border-b border-black/10" : "bg-white/80 border-b border-black/5"
                } rounded-t-xl transition-colors duration-300`}
              >
                <h3 className="text-xl font-light pr-8">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-2 rounded-full ${activeIndex === index ? "bg-black/10" : "bg-black/5"}`}
                >
                  <ChevronDown className="h-5 w-5 text-black" />
                </motion.div>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden backdrop-blur-md bg-black/5 rounded-b-xl"
                  >
                    <div className="p-6 text-black/70 font-light">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Email Us Your Doubts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-black text-sm font-medium tracking-wide mb-3">
            CONTACT US
          </div>
          <h2 className="text-4xl font-light text-black">
            Email Us Your <span className="font-medium">Doubts</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-black/5 backdrop-blur-md border border-black/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-black/70" />
              </div>
              <div>
                <h3 className="text-2xl font-light text-black">
                  Have <span className="font-medium">Additional</span> Questions?
                </h3>
                <p className="text-black/70 mt-1 font-light">
                  Our team is ready to provide you with detailed information about Maha Pranaalika.
                </p>
              </div>
            </div>

            <div className="pl-16">
              <p className="text-black/70 mb-4 font-light">
                Whether you're interested in investment opportunities, business partnerships, or simply want to learn
                more about our vision, we're here to assist you.
              </p>
              <p className="text-black/70 font-light">
                Complete the form, and our team will respond to your inquiry within 24-48 business hours.
              </p>
            </div>

            <div className="pl-16 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-px bg-black/30"></div>
                <span className="text-sm uppercase tracking-wider font-medium text-black/60">Premium Service</span>
              </div>
              <p className="text-xl font-light mt-2 text-black/80">
                Exclusive support for our valued partners and potential investors.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-md bg-white/50 border border-black/5 p-8 rounded-2xl shadow-lg"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-black/70">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border-b border-black/10 focus:border-black outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-black/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border-b border-black/10 focus:border-black outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-black/70">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border-b border-black/10 focus:border-black outline-none transition-colors"
                    placeholder="Your inquiry subject"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-black/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border-b border-black/10 focus:border-black outline-none transition-colors resize-none"
                    placeholder="Please describe your question or inquiry in detail..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-black text-white px-8 py-3 rounded-full hover:bg-black/80 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="group-hover:mr-2 transition-all duration-300">Send Message</span>
                    <Send className="h-4 w-4" />
                    <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
