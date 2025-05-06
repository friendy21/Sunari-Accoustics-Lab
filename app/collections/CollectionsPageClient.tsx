"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { collections } from "@/lib/mock-data"

export default function CollectionsPageClient() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Collections</h1>
          <p className="text-lg text-gray-300">
            Explore our curated collections of premium in-ear monitors designed for different listening experiences and
            professional needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              style={{ willChange: "transform, opacity" }}
              className="group"
            >
              <Link href={`/collections/${collection.id}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">{collection.title}</h2>
                    <p className="text-gray-200 mb-4">{collection.description}</p>
                    <div className="flex items-center text-amber-400 font-medium">
                      Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
