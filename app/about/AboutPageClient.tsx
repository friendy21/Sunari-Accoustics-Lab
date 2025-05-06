"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPageClient() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <div className="absolute inset-0 z-0">
            <Image src="/placeholder.svg?key=5b0ol" alt="Sunari Team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          </div>
          <div className="relative z-10 py-20 px-6 md:px-12 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Sunari</h1>
            <p className="text-xl text-gray-200 mb-6">
              We're a team of audio engineers, musicians, and designers passionate about creating the perfect listening
              experience.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Sunari Acoustics Lab was founded in 2015 by a group of audio engineers and musicians who were
                dissatisfied with the in-ear monitors available on the market. They believed that with the right
                combination of technology, materials, and design, they could create IEMs that would deliver unparalleled
                sound quality and comfort.
              </p>
              <p>
                The team spent two years in research and development, testing hundreds of prototypes and refining their
                designs. In 2017, they released their first product, the Sunari S1, which quickly gained recognition
                among audiophiles and music professionals for its exceptional sound quality and comfort.
              </p>
              <p>
                Since then, Sunari has grown into a respected name in the audio industry, known for our commitment to
                acoustic excellence, precision engineering, and customer satisfaction. Today, our products are used by
                professional musicians, sound engineers, and discerning audiophiles around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?key=tgddx" alt="Our Mission" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At Sunari Acoustics Lab, our mission is to create audio products that deliver the most accurate and
                immersive listening experience possible. We believe that music and sound are essential parts of the
                human experience, and that everyone deserves to hear their favorite music exactly as the artist
                intended.
              </p>
              <p className="text-gray-300">
                We're committed to pushing the boundaries of what's possible in personal audio through continuous
                innovation, meticulous attention to detail, and a deep understanding of acoustic science. Every product
                we create is designed to bring listeners closer to the music they love.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-xl p-8">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Acoustic Excellence</h3>
              <p className="text-gray-400">
                We're obsessed with sound quality. Every product we create undergoes rigorous testing and refinement to
                ensure it delivers the most accurate and engaging listening experience possible.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Uncompromising Quality</h3>
              <p className="text-gray-400">
                We use only the finest materials and components in our products. From the drivers to the cables to the
                ear tips, every element is selected for its performance, durability, and comfort.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
                  <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                  <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Customer Satisfaction</h3>
              <p className="text-gray-400">
                We're dedicated to providing exceptional service and support to our customers. We stand behind our
                products with comprehensive warranties and responsive customer care.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "David Chen",
                role: "Founder & Chief Engineer",
                image: "/placeholder.svg?key=gu6r9",
                bio: "With over 15 years of experience in acoustic engineering, David leads our R&D team and oversees product development.",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Product Design",
                image: "/placeholder.svg?key=jtf0q",
                bio: "Sarah combines her background in industrial design and passion for music to create products that are both beautiful and functional.",
              },
              {
                name: "Michael Rodriguez",
                role: "Audio Technician",
                image: "/placeholder.svg?height=400&width=400&query=professional+latino+man+headshot+dark+background",
                bio: "A classically trained musician turned audio engineer, Michael ensures our products deliver accurate sound reproduction.",
              },
              {
                name: "Emily Tanaka",
                role: "Customer Experience",
                image: "/placeholder.svg?height=400&width=400&query=professional+asian+woman+headshot+dark+background",
                bio: "Emily leads our customer support team, ensuring every Sunari customer receives exceptional service and support.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                style={{ willChange: "transform, opacity" }}
                className="bg-zinc-900 rounded-xl overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
                  <p className="text-amber-400 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Join Our Team */}
        <section>
          <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate about audio and share our commitment to
              excellence. If you're interested in joining the Sunari team, check out our current openings or send us
              your resume.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-6 rounded-md">
              View Open Positions
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
