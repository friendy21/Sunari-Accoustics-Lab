"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight, Minus, Plus, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"

// This would typically come from a database
const productData = {
  id: 1,
  name: "Sunari S1 Pro",
  description: "Professional 5-driver hybrid IEM with unparalleled sound clarity and precision.",
  price: 999,
  images: [
    "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+and+gold+professional+front+view",
    "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+and+gold+professional+side+view",
    "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+and+gold+professional+cable+view",
    "/placeholder.svg?height=600&width=600&query=premium+in-ear+monitor+black+and+gold+professional+case+view",
  ],
  category: "professional",
  features: [
    "5-driver hybrid configuration (1 dynamic + 4 balanced armature)",
    "Frequency response: 10Hz - 40kHz",
    "Impedance: 32 ohms",
    "Sensitivity: 110dB/mW",
    "Detachable MMCX cable with premium silver-plated copper wires",
    "Custom-molded ear tips for perfect fit and isolation",
    "Premium leather carrying case included",
  ],
  specs: {
    "Driver Configuration": "1 dynamic driver + 4 balanced armature drivers",
    "Frequency Response": "10Hz - 40kHz",
    Impedance: "32 ohms",
    Sensitivity: "110dB/mW",
    THD: "<0.1% @ 1kHz",
    "Noise Isolation": "-26dB",
    Cable: "1.2m detachable MMCX, silver-plated copper",
    Connector: "3.5mm gold-plated",
    Weight: "18g (without cable)",
  },
  inBox: [
    "Sunari S1 Pro IEMs",
    "Premium silver-plated copper MMCX cable",
    "3 pairs of silicone ear tips (S, M, L)",
    "3 pairs of memory foam ear tips (S, M, L)",
    "Premium leather carrying case",
    "Cleaning tool",
    '1/4" adapter',
    "User manual and warranty card",
  ],
  reviews: [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Sound Engineer",
      rating: 5,
      date: "March 15, 2023",
      comment:
        "The clarity and detail in these IEMs is absolutely stunning. As a professional sound engineer, I can hear nuances in my mixes that I've never noticed before.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Professional Musician",
      rating: 5,
      date: "February 3, 2023",
      comment:
        "I've been using these for live performances and studio work. The isolation is perfect and the sound reproduction is incredibly accurate. Worth every penny.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Audiophile",
      rating: 4,
      date: "January 20, 2023",
      comment:
        "Exceptional sound quality with incredible detail. The bass response is tight and controlled. My only minor complaint is that the cable could be slightly longer.",
    },
  ],
}

export default function ProductPage({ params }: { params: { category: string; id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const product = {
      ...productData,
      quantity,
    }
    addToCart(product)
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/shop" className="hover:text-amber-400">
            Shop
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/shop/${params.category}`} className="hover:text-amber-400 capitalize">
            {params.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{productData.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900">
              <Image
                src={productData.images[selectedImage] || "/placeholder.svg"}
                alt={productData.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-lg bg-zinc-900 ${
                    selectedImage === index ? "ring-2 ring-amber-500" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${productData.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{productData.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-gray-400">({productData.reviews.length} reviews)</span>
            </div>
            <p className="text-2xl font-bold text-amber-400 mb-6">${productData.price}</p>
            <p className="text-gray-300 mb-8">{productData.description}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-zinc-800 rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-none text-white"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center text-white">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={incrementQuantity}
                    className="h-10 w-10 rounded-none text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-300">Free shipping on orders over $200</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-300">2-year warranty included</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-zinc-800" />

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 h-auto bg-zinc-900">
            <TabsTrigger value="features" className="py-3">
              Features
            </TabsTrigger>
            <TabsTrigger value="specs" className="py-3">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="in-box" className="py-3">
              In the Box
            </TabsTrigger>
            <TabsTrigger value="reviews" className="py-3">
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="mt-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-400 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specs" className="mt-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-4">Technical Specifications</h2>
              <div className="grid gap-2">
                {Object.entries(productData.specs).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 py-2 border-b border-zinc-800">
                    <span className="text-gray-400">{key}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="in-box" className="mt-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-4">What's in the Box</h2>
              <ul className="space-y-3">
                {productData.inBox.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-400 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-white">Customer Reviews</h2>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black">Write a Review</Button>
              </div>
              <div className="space-y-6">
                {productData.reviews.map((review) => (
                  <div key={review.id} className="border-b border-zinc-800 pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-white">{review.name}</h3>
                        <p className="text-sm text-gray-400">{review.role}</p>
                      </div>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
