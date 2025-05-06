"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart-provider"
import { PaymentMethods } from "@/components/payment-methods"

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const shippingCost = 15
  const tax = cartTotal * 0.08
  const total = cartTotal + shippingCost + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      // Clear cart and show success message
      clearCart()
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. Your order has been confirmed.",
      })

      // Redirect to success page
      router.push("/checkout/success")
    }, 2000)
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-black min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8">Add some products to your cart before proceeding to checkout.</p>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
            <Link href="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="text-white">
            <Link href="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shopping
            </Link>
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h1 className="text-2xl font-bold text-white mb-6">Checkout</h1>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-medium text-white mb-4">Contact Information</h2>
                    <div className="grid gap-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" className="bg-zinc-900 border-zinc-800" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" className="bg-zinc-900 border-zinc-800" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" className="bg-zinc-900 border-zinc-800" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" className="bg-zinc-900 border-zinc-800" required />
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div>
                    <h2 className="text-xl font-medium text-white mb-4">Shipping Address</h2>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" className="bg-zinc-900 border-zinc-800" required />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" className="bg-zinc-900 border-zinc-800" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State / Province</Label>
                          <Input id="state" className="bg-zinc-900 border-zinc-800" required />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="postal-code">Postal Code</Label>
                          <Input id="postal-code" className="bg-zinc-900 border-zinc-800" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Input id="country" className="bg-zinc-900 border-zinc-800" required />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div>
                    <h2 className="text-xl font-medium text-white mb-4">Payment Method</h2>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                      <div className="flex items-center space-x-2 rounded-lg border border-zinc-800 p-4">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                          Credit Card
                        </Label>
                        <div className="flex gap-2">
                          <Image
                            src="/placeholder.svg?height=30&width=40&query=visa+logo"
                            alt="Visa"
                            width={40}
                            height={30}
                          />
                          <Image
                            src="/placeholder.svg?height=30&width=40&query=mastercard+logo"
                            alt="Mastercard"
                            width={40}
                            height={30}
                          />
                          <Image
                            src="/placeholder.svg?height=30&width=40&query=amex+logo"
                            alt="American Express"
                            width={40}
                            height={30}
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 rounded-lg border border-zinc-800 p-4">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                          PayPal
                        </Label>
                        <Image
                          src="/placeholder.svg?height=30&width=80&query=paypal+logo"
                          alt="PayPal"
                          width={80}
                          height={30}
                        />
                      </div>
                    </RadioGroup>

                    {paymentMethod === "credit-card" && (
                      <div className="mt-4 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                            className="bg-zinc-900 border-zinc-800"
                            required
                          />
                        </div>
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div className="space-y-2 sm:col-span-2">
                            <Label htmlFor="expiry">Expiration Date</Label>
                            <Input id="expiry" placeholder="MM / YY" className="bg-zinc-900 border-zinc-800" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" className="bg-zinc-900 border-zinc-800" required />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium text-white mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="relative h-16 w-16 rounded overflow-hidden bg-zinc-800 flex-shrink-0">
                          <Image
                            src={item.images[0] || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-white">{item.name}</h4>
                          <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                          <p className="text-sm text-amber-400">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-6 bg-zinc-800" />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="text-white">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Shipping</span>
                      <span className="text-white">${shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tax</span>
                      <span className="text-white">${tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2 bg-zinc-800" />
                    <div className="flex justify-between font-medium">
                      <span className="text-white">Total</span>
                      <span className="text-amber-400">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-8 bg-amber-500 hover:bg-amber-600 text-black"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Complete Order
                      </>
                    )}
                  </Button>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-white mb-2">We Accept</h3>
                    <PaymentMethods />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
