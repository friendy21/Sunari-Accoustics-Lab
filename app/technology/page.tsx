"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TechnologyPage() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const isInView1 = useInView(ref1, { once: true, amount: 0.3 })
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 })
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 })
  const isInView4 = useInView(ref4, { once: true, amount: 0.3 })

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?key=i029o"
            alt="Sunari Technology"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Our <span className="text-amber-400">Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Discover the innovation and engineering excellence behind Sunari's premium in-ear monitors.
            </p>
          </div>
        </div>
      </section>

      {/* Driver Technology */}
      <section className="py-20 bg-zinc-950" ref={ref1}>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Advanced Driver Technology</h2>
              <p className="text-gray-300 mb-6">
                At the heart of every Sunari IEM is our proprietary driver technology. We combine balanced armature
                drivers for crystal-clear highs and mids with dynamic drivers for deep, resonant bass.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Hybrid driver configurations with up to 7 drivers per ear</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Custom-tuned balanced armature drivers for precise frequency response</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Beryllium-coated dynamic drivers for enhanced bass response</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Proprietary crossover network for seamless frequency transition</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=1000&query=audio+driver+technology+balanced+armature+closeup"
                alt="Driver Technology"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Acoustic Design */}
      <section className="py-20 bg-zinc-900" ref={ref2}>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="order-2 md:order-1 relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=1000&query=acoustic+chamber+design+audio+engineering"
                alt="Acoustic Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Precision Acoustic Design</h2>
              <p className="text-gray-300 mb-6">
                Our acoustic engineers have developed proprietary chamber designs that optimize sound reproduction and
                eliminate unwanted resonances, resulting in unparalleled clarity and detail.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>3D-printed acoustic chambers for precise sound tuning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Patented resonance control technology</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Advanced computational fluid dynamics for optimal airflow</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Precision-tuned acoustic dampers for balanced frequency response</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Fit */}
      <section className="py-20 bg-zinc-950" ref={ref3}>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Custom Fit Technology</h2>
              <p className="text-gray-300 mb-6">
                Our custom-fit process uses advanced 3D scanning and printing technologies to create IEMs that perfectly
                match the unique contours of your ears, providing unmatched comfort and isolation.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Digital ear scanning with sub-millimeter precision</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Medical-grade silicone and acrylic materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Proprietary comfort-fit algorithm for optimal pressure distribution</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Up to -26dB of ambient noise isolation</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=1000&query=custom+ear+mold+3d+scanning+technology"
                alt="Custom Fit Technology"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-zinc-900" ref={ref4}>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="order-2 md:order-1 relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=1000&query=premium+materials+carbon+fiber+gold+audio+components"
                alt="Premium Materials"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Premium Materials</h2>
              <p className="text-gray-300 mb-6">
                We source only the finest materials for our IEMs, from aerospace-grade aluminum to gold-plated
                connectors, ensuring both exceptional performance and durability.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Aerospace-grade aluminum and titanium housings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Silver-plated oxygen-free copper wiring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Gold-plated MMCX connectors for optimal signal transfer</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Premium leather and carbon fiber accessories</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Experience Sunari Technology</h2>
            <p className="text-gray-300 mb-8">
              Our commitment to technological excellence is evident in every pair of Sunari in-ear monitors. Discover
              the difference that advanced engineering and premium materials can make to your listening experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                <Link href="/shop">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/support">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
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
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">SunariPhase™</h3>
                <p className="text-gray-300">
                  Our proprietary phase alignment technology ensures that all drivers work in perfect harmony,
                  delivering a coherent soundstage with precise imaging.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
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
                    <path d="M2 9.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5"></path>
                    <path d="M2 14.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5"></path>
                    <path d="M2 12a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0 5-5 5 5 0 0 0 5 5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TrueWave™</h3>
                <p className="text-gray-300">
                  Our advanced waveguide design shapes sound waves for optimal ear canal delivery, enhancing both detail
                  retrieval and soundstage width.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
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
                    <path d="M12 12v.01"></path>
                    <path d="M19.071 4.929c-1.889-1.889-4.829-3.111-8.071-3.111-5.333 0-9.714 3.714-11 8.571 1.286 4.857 5.667 8.571 11 8.571 3.242 0 6.181-1.222 8.071-3.111"></path>
                    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">ClearSeal™</h3>
                <p className="text-gray-300">
                  Our patented ear tip technology creates a perfect acoustic seal, enhancing bass response while
                  providing superior noise isolation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
