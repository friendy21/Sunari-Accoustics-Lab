"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000)}`

  // Simulate estimated delivery date (7 days from now)
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + 7)
  const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-8"
          >
            <CheckCircle className="h-12 w-12 text-green-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Order Confirmed!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-300 mb-8"
          >
            Thank you for your purchase. We've received your order and will begin processing it right away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="text-left mb-4 md:mb-0">
                <p className="text-sm text-gray-400">Order Number</p>
                <p className="text-lg font-medium text-white">{orderNumber}</p>
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Estimated Delivery</p>
                <p className="text-lg font-medium text-white">{formattedDeliveryDate}</p>
              </div>
            </div>
            <div className="border-t border-zinc-800 pt-4">
              <p className="text-sm text-gray-400">
                A confirmation email has been sent to your email address with all the details of your order.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
              <Link href="/shop">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/account/orders">View Order History</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
