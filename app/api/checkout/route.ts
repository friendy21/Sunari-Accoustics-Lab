import { NextResponse } from "next/server"
import Stripe from "stripe"

// Initialize Stripe with proper error handling
const getStripeInstance = () => {
  const stripeKey = process.env.STRIPE_SECRET_KEY

  if (!stripeKey) {
    throw new Error("Missing Stripe secret key. Please add STRIPE_SECRET_KEY to your environment variables.")
  }

  return new Stripe(stripeKey, {
    apiVersion: "2023-10-16",
  })
}

export async function POST(request: Request) {
  try {
    // Only initialize Stripe when the function is called, not during build time
    const stripe = getStripeInstance()

    const body = await request.json()
    const { items, customerEmail } = body

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Please provide items to checkout" }, { status: 400 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    if (!siteUrl) {
      throw new Error("Missing site URL. Please add NEXT_PUBLIC_SITE_URL to your environment variables.")
    }

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU"],
      },
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.description || "",
            images: [item.image].filter(Boolean),
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents
        },
        quantity: item.quantity || 1,
      })),
      mode: "payment",
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      customer_email: customerEmail,
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)

    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
