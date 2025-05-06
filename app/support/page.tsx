"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/lib/mock-data"

export default function SupportPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Support</h1>
          <p className="text-lg text-gray-300">
            We're here to help. Find answers to frequently asked questions or contact our support team.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto bg-zinc-900 rounded-xl p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-800">
                  <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900 rounded-xl p-6 text-center"
            >
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Email</h3>
              <p className="text-gray-400 mb-4">For general inquiries and support</p>
              <a href="mailto:support@sunari.com" className="text-amber-400 hover:text-amber-300">
                support@sunari.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-zinc-900 rounded-xl p-6 text-center"
            >
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Phone</h3>
              <p className="text-gray-400 mb-4">Monday to Friday, 9am to 5pm PST</p>
              <a href="tel:+18005551234" className="text-amber-400 hover:text-amber-300">
                +1 (800) 555-1234
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-zinc-900 rounded-xl p-6 text-center"
            >
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Live Chat</h3>
              <p className="text-gray-400 mb-4">Available on our website during business hours</p>
              <button className="text-amber-400 hover:text-amber-300">Start Chat</button>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-medium text-white mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-700"
                    required
                  />
                </div>
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Warranty & Returns */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-medium text-white mb-4">Warranty Information</h3>
              <p className="text-gray-300 mb-4">
                All Sunari products come with a 2-year limited warranty covering manufacturing defects. Custom fit
                models include a 30-day fit guarantee.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 2-year warranty on all products</li>
                <li>• 30-day fit guarantee on custom IEMs</li>
                <li>• Free repairs for manufacturing defects</li>
                <li>• Extended warranty options available</li>
              </ul>
              <Button variant="outline">View Warranty Policy</Button>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-medium text-white mb-4">Returns & Exchanges</h3>
              <p className="text-gray-300 mb-4">
                We want you to be completely satisfied with your purchase. If you're not happy with your Sunari product,
                we offer a 30-day return policy.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 30-day return policy on universal fit models</li>
                <li>• Custom IEMs are non-returnable (except for fit issues)</li>
                <li>• Free exchanges within 30 days</li>
                <li>• Return shipping is covered for defective items</li>
              </ul>
              <Button variant="outline">View Return Policy</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
