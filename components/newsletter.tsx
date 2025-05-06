"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send this to your API
    console.log("Subscribing email:", email)

    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    })

    setEmail("")
  }

  return (
    <div className="bg-zinc-800 rounded-lg p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Sunari</h2>
        <p className="text-gray-300 mb-8">
          Subscribe to our newsletter for exclusive offers, product updates, and audio insights.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-zinc-700 border-zinc-600 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  )
}
