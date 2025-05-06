"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export function SecuritySettings() {
  const { toast } = useToast()
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "Security settings saved",
        description: "Your security settings have been updated successfully.",
      })
    }, 1000)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white">Security Settings</CardTitle>
          <CardDescription>Manage your account security and authentication settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Change Password</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Two-Factor Authentication</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Add an extra layer of security to your account by enabling two-factor authentication.
              </p>
              <Button variant="outline">Enable Two-Factor Authentication</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Login Sessions</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                These are the devices that are currently logged into your account.
              </p>
              <div className="rounded-md border border-zinc-800 divide-y divide-zinc-800">
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-white">Current Session</p>
                      <p className="text-sm text-gray-400">San Francisco, CA, USA • Chrome on macOS</p>
                      <p className="text-xs text-gray-500 mt-1">Started May 5, 2025 at 2:01 AM</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
                      Active
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-white">Previous Session</p>
                      <p className="text-sm text-gray-400">New York, NY, USA • Safari on iOS</p>
                      <p className="text-xs text-gray-500 mt-1">May 3, 2025 at 10:24 AM</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                      Revoke
                    </Button>
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
