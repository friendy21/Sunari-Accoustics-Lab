"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const products = [
  {
    id: 1,
    name: "Sunari S1 Pro",
    image: "/placeholder.svg?key=67h94",
    sales: 245,
    percentage: 100,
  },
  {
    id: 2,
    name: "Sunari Harmony",
    image: "/placeholder.svg?key=7l4qp",
    sales: 189,
    percentage: 77,
  },
  {
    id: 3,
    name: "Sunari Reference",
    image: "/placeholder.svg?key=556fa",
    sales: 152,
    percentage: 62,
  },
  {
    id: 4,
    name: "Sunari Custom Pro",
    image: "/placeholder.svg?key=mqjf0",
    sales: 124,
    percentage: 51,
  },
  {
    id: 5,
    name: "Premium MMCX Cable",
    image: "/placeholder.svg?key=wmqhc",
    sales: 98,
    percentage: 40,
  },
]

export function TopProducts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white">Top Products</CardTitle>
          <CardDescription>Top selling products this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {products.map((product) => (
              <div key={product.id} className="flex items-center">
                <div className="relative h-10 w-10 rounded-md overflow-hidden bg-zinc-800 mr-4">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-white leading-none">{product.name}</p>
                  <div className="flex items-center justify-between">
                    <Progress value={product.percentage} className="h-1.5" />
                    <span className="text-xs text-gray-400 ml-2 w-10 text-right">{product.sales}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
