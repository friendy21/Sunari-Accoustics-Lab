"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function TechnologyClientPage() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?key=40w04"
              alt="Sunari Technology Lab"
              fill
              className="object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          </div>
          <div className="relative z-10 py-20 px-6 md:px-12 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Technology</h1>
            <p className="text-xl text-gray-200 mb-6">
              At Sunari Acoustics Lab, we combine precision engineering with innovative acoustic design to create in-ear
              monitors that deliver unparalleled sound quality.
            </p>
          </div>
        </div>

        {/* Driver Technology */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Advanced Driver Technology</h2>
              <p className="text-gray-300 mb-6">
                Our proprietary driver technology is the result of years of research and development. We use a
                combination of balanced armature and dynamic drivers to deliver exceptional sound quality across the
                entire frequency spectrum.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Balanced Armature Drivers</h3>
                    <p className="text-gray-400">
                      Our custom-tuned balanced armature drivers deliver crystal-clear mids and highs with exceptional
                      detail and precision.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Dynamic Bass Drivers</h3>
                    <p className="text-gray-400">
                      Our specially designed dynamic drivers provide deep, resonant bass with minimal distortion, even
                      at high volumes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Hybrid Configurations</h3>
                    <p className="text-gray-400">
                      By combining multiple driver types in our hybrid models, we achieve a balanced sound signature
                      that excels across all frequencies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden transform-gpu">
              <Image src="/placeholder.svg?key=spgv6" alt="Driver Technology" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Acoustic Design */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden transform-gpu">
              <Image src="/placeholder.svg?key=z4iby" alt="Acoustic Design" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Precision Acoustic Design</h2>
              <p className="text-gray-300 mb-6">
                Our acoustic engineers use advanced computer modeling and 3D printing technology to create the perfect
                acoustic chambers for our in-ear monitors. This ensures optimal sound reproduction and a comfortable
                fit.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">3D Acoustic Modeling</h3>
                    <p className="text-gray-400">
                      We use advanced computational fluid dynamics to model sound waves within our IEMs, optimizing
                      every aspect of the acoustic chamber.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Precision 3D Printing</h3>
                    <p className="text-gray-400">
                      Our shells are 3D printed with micron-level precision to ensure perfect acoustic properties and a
                      comfortable fit.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Acoustic Damping</h3>
                    <p className="text-gray-400">
                      Our proprietary acoustic damping materials ensure smooth frequency response and eliminate unwanted
                      resonances.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Premium Materials</h2>
              <p className="text-gray-300 mb-6">
                We use only the highest quality materials in our products, ensuring durability, comfort, and exceptional
                sound quality. From medical-grade resins to premium metals and cables, every component is selected for
                its acoustic properties and longevity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Medical-Grade Resins</h3>
                    <p className="text-gray-400">
                      Our shells are crafted from hypoallergenic, medical-grade resins that are both durable and
                      comfortable for extended wear.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Premium Cables</h3>
                    <p className="text-gray-400">
                      Our detachable MMCX cables use silver-plated copper or oxygen-free copper conductors for optimal
                      signal transmission.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Custom Ear Tips</h3>
                    <p className="text-gray-400">
                      Our memory foam and silicone ear tips are designed for optimal comfort and sound isolation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden transform-gpu">
              <Image src="/placeholder.svg?key=po55x" alt="Premium Materials" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Research & Development */}
        <section>
          <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Research & Development</h2>
              <p className="text-gray-300">
                Our team of acoustic engineers, audio experts, and musicians work tirelessly to push the boundaries of
                what's possible in personal audio. We invest heavily in research and development to ensure our products
                remain at the cutting edge of audio technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Sound Research</h3>
                <p className="text-gray-400">
                  Our sound research lab uses advanced equipment to measure and analyze every aspect of audio
                  reproduction, ensuring our products deliver the most accurate sound possible.
                </p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
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
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="M8 18v-1" />
                    <path d="M16 18v-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Prototype Testing</h3>
                <p className="text-gray-400">
                  We create and test hundreds of prototypes before finalizing a design, ensuring every product meets our
                  exacting standards for sound quality and comfort.
                </p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Musician Feedback</h3>
                <p className="text-gray-400">
                  We work closely with professional musicians and sound engineers to gather feedback and ensure our
                  products meet the needs of the most demanding audio professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
