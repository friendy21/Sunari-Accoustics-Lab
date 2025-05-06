"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

const featuredProducts = [
  {
    id: 1,
    name: "Sunari S1 Pro",
    description: "Professional 5-driver hybrid IEM",
    price: 999,
    image: "/placeholder.svg?key=ukpqe",
    category: "professional",
  },
  {
    id: 2,
    name: "Sunari Harmony",
    description: "Audiophile 3-driver balanced armature",
    price: 499,
    image: "/placeholder.svg?key=67n5h",
    category: "audiophile",
  },
  {
    id: 3,
    name: "Sunari Clarity",
    description: "Dual hybrid drivers with MMCX cable",
    price: 299,
    image: "/placeholder.svg?key=h640u",
    category: "audiophile",
  },
  {
    id: 4,
    name: "Sunari Reference",
    description: "Studio reference 4-driver configuration",
    price: 799,
    image: "/placeholder.svg?key=4406k",
    category: "professional",
  },
]

const ProductCard = React.memo(({ product, addToCart }: { product: any; addToCart: (product: any) => void }) => {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900 mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-amber-500 hover:bg-amber-600 text-black" onClick={() => addToCart(product)}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
      <Link href={`/shop/${product.category}/${product.id}`}>
        <h3 className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">{product.name}</h3>
      </Link>
      <p className="text-gray-400 text-sm mb-2">{product.description}</p>
      <p className="text-amber-400 font-medium">${product.price}</p>
    </div>
  )
})

export function FeaturedProducts() {
  const { addToCart } = useCart()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}
