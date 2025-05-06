"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const collections = [
  {
    id: "signature",
    title: "Signature Series",
    description: "Our flagship collection featuring the most advanced acoustic technology",
    image: "/placeholder.svg?key=06l9o",
    products: 4,
  },
  {
    id: "studio",
    title: "Studio Reference",
    description: "Designed for professional studio engineers and producers",
    image: "/placeholder.svg?key=9mbh3",
    products: 3,
  },
  {
    id: "performer",
    title: "Performer Series",
    description: "Created for live performance with enhanced durability and isolation",
    image: "/placeholder.svg?key=wytga",
    products: 5,
  },
  {
    id: "audiophile",
    title: "Audiophile Edition",
    description: "Tuned for the discerning listener who demands perfect audio reproduction",
    image: "/placeholder.svg?key=d2bxb",
    products: 6,
  },
]

export default function CollectionsClientPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Collections</h1>
          <p className="text-lg text-gray-300">
            Explore our curated collections of premium in-ear monitors, each designed with a specific purpose and sound
            signature in mind.
          </p>
        </div>

        <motion.div
          className="grid gap-12 md:gap-16"
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              variants={item}
            >
              <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <h2 className="text-3xl font-bold text-white mb-4">{collection.title}</h2>
                <p className="text-gray-300 mb-6">{collection.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                    <Link href={`/collections/${collection.id}`}>
                      Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/shop">View All Products</Link>
                  </Button>
                </div>
                <p className="text-sm text-gray-400 mt-4">{collection.products} products in this collection</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
