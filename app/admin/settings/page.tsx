import type { Metadata } from "next"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GeneralSettings } from "@/components/admin/general-settings"
import { SecuritySettings } from "@/components/admin/security-settings"
import { ApiSettings } from "@/components/admin/api-settings"

export const metadata: Metadata = {
  title: "Settings | Admin Dashboard",
  description: "Admin settings for Sunari Acoustics Lab",
}

export default async function SettingsPage() {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and has admin role
  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/login?callbackUrl=/admin/settings")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 h-auto bg-zinc-900">
          <TabsTrigger value="general" className="py-3">
            General
          </TabsTrigger>
          <TabsTrigger value="security" className="py-3">
            Security
          </TabsTrigger>
          <TabsTrigger value="api" className="py-3">
            API
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-6">
          <GeneralSettings />
        </TabsContent>
        <TabsContent value="security" className="mt-6">
          <SecuritySettings />
        </TabsContent>
        <TabsContent value="api" className="mt-6">
          <ApiSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
