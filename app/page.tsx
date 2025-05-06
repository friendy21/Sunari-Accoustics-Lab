import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?key=7wxra"
            alt="Sunari Acoustics Lab"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Experience Sound <span className="text-amber-400">Perfection</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Handcrafted in-ear monitors with unparalleled sound clarity and precision for audiophiles and
              professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
                Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Our Technology
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Models</h2>
            <Link href="/shop" className="text-amber-400 hover:text-amber-300 flex items-center">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Shop By Category</h2>
          <Categories />
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Cutting-Edge Technology</h2>
              <p className="text-gray-300 mb-6">
                At Sunari Acoustics Lab, we combine precision engineering with innovative acoustic design to create
                in-ear monitors that deliver unparalleled sound quality.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Proprietary balanced armature drivers for crystal-clear highs</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Dynamic bass drivers for deep, resonant lows</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Custom-molded ear tips for perfect fit and isolation</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-amber-400 mr-2 mt-1" />
                  <span>Handcrafted with premium materials for durability</span>
                </li>
              </ul>
              <Button className="mt-8 bg-amber-500 hover:bg-amber-600 text-black">Learn More</Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?key=zknjp" alt="Sunari Technology" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded-lg">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "The clarity and detail in these IEMs is absolutely stunning. As a professional sound engineer, I can
                  hear nuances in my mixes that I've never noticed before."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 mr-4"></div>
                  <div>
                    <h4 className="text-white font-medium">Alex Johnson</h4>
                    <p className="text-gray-400 text-sm">Sound Engineer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
    </div>
  )
}
