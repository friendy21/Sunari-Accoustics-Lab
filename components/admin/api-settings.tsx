"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Eye, EyeOff, RefreshCw, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export function ApiSettings() {
  const { toast } = useToast()
  const [isSaving, setIsSaving] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "API settings saved",
        description: "Your API settings have been updated successfully.",
      })
    }, 1000)
  }

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText("sk_test_sunari_acoustics_lab_123456789")
    toast({
      title: "API key copied",
      description: "The API key has been copied to your clipboard.",
    })
  }

  const handleGenerateNewKey = () => {
    setIsGenerating(true)

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      toast({
        title: "New API key generated",
        description: "Your new API key has been generated successfully.",
      })
    }, 1000)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white">API Settings</CardTitle>
          <CardDescription>Manage your API keys and webhook endpoints</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">API Keys</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex">
                  <div className="relative flex-1">
                    <Input
                      id="api-key"
                      type={showApiKey ? "text" : "password"}
                      value="sk_test_sunari_acoustics_lab_123456789"
                      readOnly
                      className="bg-zinc-800 border-zinc-700 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span className="sr-only">{showApiKey ? "Hide API key" : "Show API key"}</span>
                    </Button>
                  </div>
                  <Button type="button" variant="outline" className="ml-2" onClick={handleCopyApiKey}>
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy API key</span>
                  </Button>
                </div>
                <p className="text-xs text-gray-400">
                  This is your secret API key. Keep it secure and do not share it publicly.
                </p>
              </div>
              <Button variant="outline" onClick={handleGenerateNewKey} disabled={isGenerating}>
                {isGenerating ? (
                  <>Generating...</>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Generate New Key
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Webhook Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input
                  id="webhook-url"
                  placeholder="https://your-website.com/api/webhook"
                  className="bg-zinc-800 border-zinc-700"
                />
                <p className="text-xs text-gray-400">
                  We'll send POST requests to this URL when events occur in your account.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Webhook Events</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="event-orders" className="cursor-pointer">
                      Order events
                    </Label>
                    <Switch id="event-orders" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="event-products" className="cursor-pointer">
                      Product events
                    </Label>
                    <Switch id="event-products" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="event-customers" className="cursor-pointer">
                      Customer events
                    </Label>
                    <Switch id="event-customers" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="event-payments" className="cursor-pointer">
                      Payment events
                    </Label>
                    <Switch id="event-payments" defaultChecked />
                  </div>
                </div>
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
