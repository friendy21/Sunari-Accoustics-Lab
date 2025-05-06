import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ProductFilters } from "@/components/product-filters"
import { ProductSort } from "@/components/product-sort"

export const metadata: Metadata = {
  title: "Shop | Sunari Acoustics Lab",
  description: "Browse our collection of premium in-ear monitors and accessories.",
}

const products = [
  {
    id: 1,
    name: "Sunari S1 Pro",
    description: "Professional 5-driver hybrid IEM",
    price: 999,
    image: "/placeholder.svg?height=500&width=500&query=premium+in-ear+monitor+black+and+gold+professional",
    category: "professional",
  },
  {
    id: 2,
    name: "Sunari Harmony",
    description: "Audiophile 3-driver balanced armature",
    price: 499,
    image: "/placeholder.svg?height=500&width=500&query=premium+in-ear+monitor+silver+audiophile",
    category: "audiophile",
  },
  {
    id: 3,
    name: "Sunari Clarity",
    description: "Dual hybrid drivers with MMCX cable",
    price: 299,
    image: "/placeholder.svg?height=500&width=500&query=premium+in-ear+monitor+transparent+shell",
    category: "audiophile",
  },
  {
    id: 4,
    name: "Sunari Reference",
    description: "Studio reference 4-driver configuration",
    price: 799,
    image: "/placeholder.svg?height=500&width=500&query=premium+in-ear+monitor+black+studio+reference",
    category: "professional",
  },
  {
    id: 5,
    name: "Sunari Bass Pro",
    description: "Enhanced bass response with dual dynamic drivers",
    price: 399,
    image: "/placeholder.svg?height=500&width=500&query=premium+in-ear+monitor+black+with+red+accents",
    category: "audiophile",
  },
  {
    id: 6,
    name: "Sunari Custom Pro",
    description: "Custom-molded professional IEM",
    price: 1299,
    image: "/placeholder.svg?height=500&width=500&query=custom+molded+in-ear+monitor+professional",
    category: "custom",
  },
  {
    id: 7,
    name: "Sunari Custom Lite",
    description: "Entry-level custom-molded IEM",
    price: 699,
    image: "/placeholder.svg?height=500&width=500&query=custom+molded+in-ear+monitor+basic",
    category: "custom",
  },
  {
    id: 8,
    name: "Premium MMCX Cable",
    description: "Silver-plated copper cable with MMCX connectors",
    price: 149,
    image: "/placeholder.svg?height=500&width=500&query=premium+audio+cable+silver+plated+mmcx",
    category: "accessories",
  },
  {
    id: 9,
    name: "Leather Carrying Case",
    description: "Premium leather case with custom foam insert",
    price: 79,
    image: "/placeholder.svg?height=500&width=500&query=premium+leather+headphone+case",
    category: "accessories",
  },
  {
    id: 10,
    name: "Sunari Wireless Adapter",
    description: "Bluetooth adapter for wired IEMs",
    price: 129,
    image: "/placeholder.svg?height=500&width=500&query=bluetooth+adapter+for+headphones+premium",
    category: "accessories",
  },
  {
    id: 11,
    name: "Sunari Elite",
    description: "Flagship 7-driver hybrid configuration",
    price: 1499,
    image: "/placeholder.svg?height=500&width=500&query=premium+flagship+in-ear+monitor+luxury",
    category: "professional",
  },
  {
    id: 12,
    name: "Foam Ear Tips Set",
    description: "Memory foam ear tips in multiple sizes",
    price: 24.99,
    image: "/placeholder.svg?height=500&width=500&query=memory+foam+ear+tips+for+in-ear+monitors",
    category: "accessories",
  },
]

export default function ShopPage() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-1/4 lg:w-1/5">
            <ProductFilters />
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white">Shop All Products</h1>
                <p className="text-gray-400 mt-1">Showing {products.length} products</p>
              </div>
              <ProductSort />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <Link href={`/shop/${product.category}/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900 mb-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-400 text-sm mb-2">{product.description}</p>
                  <p className="text-amber-400 font-medium">${product.price}</p>
                  <Button className="w-full mt-4 bg-zinc-800 hover:bg-zinc-700 text-white">Add to Cart</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
