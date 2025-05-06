"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, HelpCircle, Mail, MessageSquare, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function SupportPage() {
  const { toast } = useToast()
  const [formSubmitting, setFormSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setFormSubmitting(false)
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
        action: (
          <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
        ),
      })
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  const faqs = [
    {
      question: "How do I choose the right IEMs for my needs?",
      answer:
        "Consider your primary use case (professional monitoring, audiophile listening, etc.), preferred sound signature, and budget. Our Professional Series is ideal for studio work, while our Audiophile Series is tuned for music enjoyment. For personalized recommendations, contact our support team.",
    },
    {
      question: "What's the difference between custom and universal fit IEMs?",
      answer:
        "Universal fit IEMs come with various ear tip options and fit most ear shapes. Custom fit IEMs are made from impressions of your ears for perfect fit, superior isolation, and comfort during extended use. Custom models typically offer better bass response and isolation due to the perfect seal.",
    },
    {
      question: "How do I care for my Sunari IEMs?",
      answer:
        "Clean your IEMs regularly with the provided cleaning tool. Store them in the protective case when not in use. Keep them away from extreme temperatures and humidity. Replace ear tips when they show signs of wear. For cable maintenance, wipe with a soft, dry cloth and avoid sharp bends.",
    },
    {
      question: "What is your warranty policy?",
      answer:
        "All Sunari products come with a 2-year limited warranty covering manufacturing defects. Custom fit models include a 30-day fit guarantee. The warranty does not cover damage from misuse, accidents, or unauthorized repairs. Extended warranty options are available at checkout.",
    },
    {
      question: "How do I get my ears scanned for custom IEMs?",
      answer:
        "You can visit one of our partner audiologists for a professional ear impression, or use our at-home impression kit. For select locations, we offer digital ear scanning at our experience centers. Contact our support team to find the nearest location or to order an impression kit.",
    },
    {
      question: "What's the typical production time for custom IEMs?",
      answer:
        "Standard production time for custom IEMs is 2-3 weeks from when we receive your ear impressions. Rush orders can be completed in 7-10 business days for an additional fee. You'll receive tracking information once your order ships.",
    },
  ]

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Support & Contact</h1>
          <p className="text-lg text-gray-300">
            We're here to help with any questions or concerns about your Sunari products.
          </p>
        </motion.div>

        <Tabs defaultValue="contact" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-auto bg-zinc-900">
            <TabsTrigger value="contact" className="py-3">
              Contact Us
            </TabsTrigger>
            <TabsTrigger value="faq" className="py-3">
              FAQ
            </TabsTrigger>
            <TabsTrigger value="support" className="py-3">
              Support Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact" className="mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900 border-zinc-800 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required className="bg-zinc-800 border-zinc-700" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        required
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Product inquiry"
                        required
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                      disabled={formSubmitting}
                    >
                      {formSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                        <p className="text-gray-400 text-sm mb-2">For general inquiries and support</p>
                        <a href="mailto:support@sunari.com" className="text-amber-400 hover:text-amber-300">
                          support@sunari.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
                        <p className="text-gray-400 text-sm mb-2">Monday-Friday, 9am-5pm PT</p>
                        <a href="tel:+18005551234" className="text-amber-400 hover:text-amber-300">
                          +1 (800) 555-1234
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Live Chat</h3>
                        <p className="text-gray-400 text-sm mb-2">Available on our website</p>
                        <Button variant="link" className="p-0 h-auto text-amber-400 hover:text-amber-300">
                          Start Chat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions about our products and services.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-zinc-800">
                      <AccordionTrigger className="text-white hover:text-amber-400">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">User Guides</CardTitle>
                  <CardDescription>Detailed guides for all Sunari products</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Sunari S1 Pro User Manual
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Sunari Harmony User Manual
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Sunari Reference User Manual
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Care and Maintenance Guide
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Troubleshooting</CardTitle>
                  <CardDescription>Solutions for common issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Troubleshooting Sound Issues
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Cable and Connection Problems
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Fit and Comfort Adjustments
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Warranty and Repair Process
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Video Tutorials</CardTitle>
                  <CardDescription>Visual guides for using your Sunari products</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Getting Started with Your IEMs
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        How to Clean Your IEMs
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Cable Replacement Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Optimizing Sound Quality
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Downloads</CardTitle>
                  <CardDescription>Software and additional resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Sunari EQ Software (Windows)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Sunari EQ Software (Mac)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Frequency Response Charts
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-amber-400 hover:text-amber-300 hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Warranty Registration Form
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
