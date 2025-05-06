"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { getProductsByCollection } from "@/lib/mock-data"

export default function CollectionPage() {
  const params = useParams()
  const { addToCart } = useCart()
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [collectionName, setCollectionName] = useState("")

  useEffect(() => {
    if (params.id) {
      // Get products for this collection
      const collectionProducts = getProductsByCollection(params.id as string)
      setProducts(collectionProducts)

      // Set collection name based on ID
      const formattedName = (params.id as string)
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      setCollectionName(formattedName)

      setLoading(false)
    }
  }, [params.id])

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

  if (loading) {
    return (
      <div className="bg-black min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-zinc-800 rounded w-1/3 mb-8"></div>
            <div className="h-4 bg-zinc-800 rounded w-2/3 mb-12"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-square bg-zinc-800 rounded-lg"></div>
                  <div className="h-6 bg-zinc-800 rounded w-3/4"></div>
                  <div className="h-4 bg-zinc-800 rounded w-full"></div>
                  <div className="h-4 bg-zinc-800 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="text-white mb-6">
            <Link href="/collections">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-white mb-4">{collectionName} Collection</h1>
          <p className="text-gray-300">
            Explore our {collectionName.toLowerCase()} collection featuring {products.length} premium audio products.
          </p>
        </div>

        {products.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {products.map((product) => (
              <motion.div key={product.id} className="group" variants={item}>
                <Link href={`/shop/${product.category}/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900 mb-4">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm mb-2">{product.description.split(".")[0]}.</p>
                <p className="text-amber-400 font-medium">${product.price}</p>
                <Button
                  className="w-full mt-4 bg-zinc-800 hover:bg-zinc-700 text-white"
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-6">No products found in this collection.</p>
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
              <Link href="/shop">Browse All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
