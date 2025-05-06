"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export function GeneralSettings() {
  const { toast } = useToast()
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    }, 1000)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white">General Settings</CardTitle>
          <CardDescription>Manage your store settings and preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Store Information</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input id="store-name" defaultValue="Sunari Acoustics Lab" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-email">Contact Email</Label>
                <Input
                  id="store-email"
                  type="email"
                  defaultValue="contact@sunari.com"
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-phone">Contact Phone</Label>
                <Input
                  id="store-phone"
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-currency">Default Currency</Label>
                <Input id="store-currency" defaultValue="USD" className="bg-zinc-800 border-zinc-700" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Address</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address-line1">Address Line 1</Label>
                <Input id="address-line1" defaultValue="123 Audio Street" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address-line2">Address Line 2</Label>
                <Input id="address-line2" defaultValue="Suite 456" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" defaultValue="San Francisco" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State / Province</Label>
                <Input id="state" defaultValue="California" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postal-code">Postal Code</Label>
                <Input id="postal-code" defaultValue="94105" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" defaultValue="United States" className="bg-zinc-800 border-zinc-700" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Store Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="tax-enabled">Enable Tax Calculation</Label>
                  <p className="text-sm text-gray-400">Automatically calculate taxes based on location</p>
                </div>
                <Switch id="tax-enabled" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="inventory-tracking">Inventory Tracking</Label>
                  <p className="text-sm text-gray-400">Track product inventory and show out of stock notices</p>
                </div>
                <Switch id="inventory-tracking" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reviews-enabled">Customer Reviews</Label>
                  <p className="text-sm text-gray-400">Allow customers to leave product reviews</p>
                </div>
                <Switch id="reviews-enabled" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-zinc-800 p-6">
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-black ml-auto"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
