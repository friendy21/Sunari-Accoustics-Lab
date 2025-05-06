import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/placeholder.svg?key=fd0ua"
                alt="Sunari Acoustics Lab"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Crafting premium in-ear monitors for audiophiles and professionals since 2015.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-amber-400 text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/professional" className="text-gray-400 hover:text-amber-400 text-sm">
                  Professional Series
                </Link>
              </li>
              <li>
                <Link href="/shop/audiophile" className="text-gray-400 hover:text-amber-400 text-sm">
                  Audiophile Series
                </Link>
              </li>
              <li>
                <Link href="/shop/custom" className="text-gray-400 hover:text-amber-400 text-sm">
                  Custom Fit
                </Link>
              </li>
              <li>
                <Link href="/shop/accessories" className="text-gray-400 hover:text-amber-400 text-sm">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-400 hover:text-amber-400 text-sm">
                  Our Technology
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-amber-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-amber-400 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-400 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-gray-400 hover:text-amber-400 text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support/faq" className="text-gray-400 hover:text-amber-400 text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/support/shipping" className="text-gray-400 hover:text-amber-400 text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/support/warranty" className="text-gray-400 hover:text-amber-400 text-sm">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="text-gray-400 hover:text-amber-400 text-sm">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sunari Acoustics Lab. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-amber-400 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
