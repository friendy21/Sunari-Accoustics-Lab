import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-provider"

// Performance optimization script
const performanceScript = `
  // Use passive event listeners for better scrolling performance
  document.addEventListener('touchstart', function() {}, { passive: true });
  document.addEventListener('touchmove', function() {}, { passive: true });
  
  // Optimize rendering with content-visibility for off-screen content
  function optimizeRendering() {
    const sections = document.querySelectorAll('section');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.target instanceof HTMLElement) {
            if (!entry.isIntersecting) {
              entry.target.style.contentVisibility = 'auto';
            } else {
              entry.target.style.contentVisibility = '';
            }
          }
        });
      }, { rootMargin: '200px' });
      
      sections.forEach(section => observer.observe(section));
    }
  }
  
  // Run after initial render
  window.addEventListener('load', optimizeRendering);
`

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sunari Acoustics Lab | Premium In-Ear Monitors",
  description:
    "Handcrafted in-ear monitors with unparalleled sound clarity and precision for audiophiles and professionals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: performanceScript }} />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
