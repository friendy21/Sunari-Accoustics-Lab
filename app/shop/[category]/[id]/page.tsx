"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight, Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { getProductById, getReviewsByProductId } from "@/lib/mock-data"

export default function ProductPage() {
  const params = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart } = useCart()
  const [product, setProduct] = useState<any>(null)
  const [reviews, setReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      // Fetch product data
      const productData = getProductById(Number(params.id))
      if (productData) {
        setProduct(productData)

        // Fetch reviews
        const productReviews = getReviewsByProductId(Number(params.id))
        setReviews(productReviews)
      }
      setLoading(false)
    }
  }, [params.id])

  const handleAddToCart = () => {
    if (product) {
      const cartProduct = {
        ...product,
        quantity,
      }
      addToCart(cartProduct)
    }
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  if (loading) {
    return (
      <div className="bg-black min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-zinc-800 rounded w-1/3 mb-8"></div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="aspect-square bg-zinc-800 rounded-lg"></div>
                <div className="grid grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-zinc-800 rounded-lg"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-zinc-800 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-800 rounded w-1/4"></div>
                <div className="h-6 bg-zinc-800 rounded w-1/5"></div>
                <div className="h-4 bg-zinc-800 rounded w-full"></div>
                <div className="h-4 bg-zinc-800 rounded w-full"></div>
                <div className="h-10 bg-zinc-800 rounded w-full mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="bg-black min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
            <Link href="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/shop" className="hover:text-amber-400">
            Shop
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/shop/${params.category}`} className="hover:text-amber-400 capitalize">
            {params.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-lg bg-zinc-900 ${
                    selectedImage === index ? "ring-2 ring-amber-500" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 5 ? "text-amber-400 fill-amber-400" : "text-gray-400"}`} />
                ))}
              </div>
              <span className="text-gray-400">({reviews.length} reviews)</span>
            </div>
            <p className="text-2xl font-bold text-amber-400 mb-6">${product.price}</p>
            <p className="text-gray-300 mb-8">{product.description}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-zinc-800 rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-none text-white"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center text-white">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={incrementQuantity}
                    className="h-10 w-10 rounded-none text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-300">Free shipping on orders over $200</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-300">2-year warranty included</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-zinc-800" />

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 h-auto bg-zinc-900">
            <TabsTrigger value="features" className="py-3">
              Features
            </TabsTrigger>
            <TabsTrigger value="specs" className="py-3">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="in-box" className="py-3">
              In the Box
            </TabsTrigger>
            <TabsTrigger value="reviews" className="py-3">
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="mt-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-400 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specs" className="mt-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-4">Technical Specifications</h2>
              <div className="grid gap-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 py-2 border-b border-zinc-800">
                    <span className="text-gray-400">{key}</span>
                    <span className="text-white">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="in-box" className="mt-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-4">What's in the Box</h2>
              <ul className="space-y-3">
                {product.inBox.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-400 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-white">Customer Reviews</h2>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black">Write a Review</Button>
              </div>
              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-zinc-800 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-white">{review.name}</h3>
                          <p className="text-sm text-gray-400">{review.role}</p>
                        </div>
                        <span className="text-sm text-gray-400">{review.date}</span>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No reviews yet. Be the first to review this product!</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
