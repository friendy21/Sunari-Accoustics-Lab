import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ProductFilters } from "@/components/product-filters"
import { ProductSort } from "@/components/product-sort"
import { products } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Shop | Sunari Acoustics Lab",
  description: "Browse our collection of premium in-ear monitors and accessories.",
}

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
