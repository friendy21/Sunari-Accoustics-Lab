"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingCart, User, X } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { CartSheet } from "@/components/cart-sheet"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const cartItemCount = cartItems.length

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Technology", href: "/technology" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
  ]

  return (
    <header className="bg-black/80 backdrop-blur-md fixed w-full z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="sr-only">Sunari Acoustics Lab</span>
            <Image
              src="/placeholder.svg?key=41rxy"
              alt="Sunari Acoustics Lab"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white hover:text-amber-400 transition-colors relative group"
            >
              {item.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/account" className="text-white hover:text-amber-400">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Link>

          <CartSheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5 text-white" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
                <span className="sr-only">Open cart</span>
              </Button>
            </SheetTrigger>
          </CartSheet>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6 text-white" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?key=s4rev"
              alt="Sunari Acoustics Lab"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <div className="mt-6 flow-root">
          <div className="space-y-2 py-6 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-base font-medium text-white hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-800 py-6 px-4">
            <Link
              href="/account"
              className="flex items-center gap-2 py-3 text-base font-medium text-white hover:text-amber-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
