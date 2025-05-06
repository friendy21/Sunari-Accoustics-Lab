"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Award, Clock, Globe, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)

  const storyInView = useInView(storyRef, { once: true, amount: 0.3 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 })

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former audio engineer with 15+ years of experience in the professional audio industry.",
      image: "/placeholder.svg?height=400&width=400&query=professional+asian+man+headshot+studio+lighting",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      bio: "PhD in Acoustical Engineering with multiple patents in driver technology.",
      image: "/placeholder.svg?height=400&width=400&query=professional+woman+headshot+studio+lighting",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product Design",
      bio: "Award-winning industrial designer specializing in premium audio products.",
      image: "/placeholder.svg?height=400&width=400&query=professional+hispanic+man+headshot+studio+lighting",
    },
    {
      name: "Emily Wong",
      role: "Lead Sound Engineer",
      bio: "Classical musician turned audio engineer with a passion for perfect sound reproduction.",
      image: "/placeholder.svg?height=400&width=400&query=professional+asian+woman+headshot+studio+lighting",
    },
  ]

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&query=audio+engineering+team+working+in+studio+dark+lighting"
            alt="About Sunari Acoustics Lab"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              About <span className="text-amber-400">Sunari</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Crafting exceptional audio experiences through innovation, precision, and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-zinc-950" ref={storyRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Sunari Acoustics Lab was founded in 2015 by Alex Chen, a former professional audio engineer with a
                  vision to create in-ear monitors that could deliver studio-quality sound in any environment.
                </p>
                <p>
                  What began as a small workshop in San Francisco has grown into a globally recognized brand, trusted by
                  professional musicians, sound engineers, and audiophiles around the world.
                </p>
                <p>
                  Our journey has been driven by a relentless pursuit of acoustic perfection, combining innovative
                  engineering with premium materials and meticulous craftsmanship.
                </p>
                <p>
                  Today, Sunari continues to push the boundaries of what's possible in personal audio, with each product
                  representing our commitment to delivering an unparalleled listening experience.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=1000&query=audio+engineer+working+in+workshop+crafting+headphones"
                alt="Sunari Workshop"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-zinc-900" ref={valuesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-gray-300">
                At Sunari, our core values guide everything we do, from product development to customer service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-zinc-800 rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We are committed to excellence in every aspect of our products, from design and engineering to
                  materials and customer service.
                </p>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of collaboration, working closely with musicians, engineers, and audiophiles
                  to create products that meet real-world needs.
                </p>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible in audio technology, investing heavily in
                  research and development to create innovative solutions.
                </p>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Craftsmanship</h3>
                <p className="text-gray-300">
                  We believe in taking the time to do things right, with meticulous attention to detail and a commitment
                  to quality that's evident in every product we create.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-zinc-950" ref={teamRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Team</h2>
              <p className="text-gray-300">Meet the passionate experts behind Sunari's innovative audio products.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
                  <div className="relative h-80">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-amber-400 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join the Sunari Family</h2>
            <p className="text-gray-300 mb-8">
              Experience the difference that passion, innovation, and craftsmanship can make to your listening
              experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                <Link href="/shop">
                  Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/support">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
