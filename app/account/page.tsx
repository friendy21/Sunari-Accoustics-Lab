"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CreditCard, LogOut, Package, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { authenticateUser } from "@/lib/mock-data"

export default function AccountPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Simulate checking authentication
    const checkAuth = () => {
      // In a real app, this would check the session
      // For this mock, we'll just simulate a logged-in user
      const mockUser = authenticateUser("customer@example.com", "password123")

      if (mockUser) {
        setUser(mockUser)
      } else {
        // Redirect to login if not authenticated
        router.push("/auth/login?callbackUrl=/account")
      }

      setLoading(false)
    }

    checkAuth()
  }, [router])

  const handleLogout = () => {
    // In a real app, this would clear the session
    // For this mock, we'll just redirect to home
    router.push("/")
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    )
  }

  if (!user) {
    return null // This will redirect in the useEffect
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback className="bg-amber-500 text-black text-xl">
                        {user.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-white text-xl">{user.name}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/account">
                        <User className="mr-2 h-4 w-4" />
                        Account
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/account/orders">
                        <Package className="mr-2 h-4 w-4" />
                        Orders
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/account/payments">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Payment Methods
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/account/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-red-500" onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>

            <div className="w-full md:w-2/3">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-auto bg-zinc-900">
                  <TabsTrigger value="overview" className="py-3">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="profile" className="py-3">
                    Profile
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <CardTitle className="text-white">Account Overview</CardTitle>
                      <CardDescription>View your account summary and recent activity</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Recent Orders</h3>
                        <div className="bg-zinc-800 rounded-lg p-4 text-center">
                          <p className="text-gray-400">You haven't placed any orders yet.</p>
                          <Button asChild className="mt-4 bg-amber-500 hover:bg-amber-600 text-black">
                            <Link href="/shop">Start Shopping</Link>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Account Details</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between py-2 border-b border-zinc-800">
                            <span className="text-gray-400">Name</span>
                            <span className="text-white">{user.name}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-zinc-800">
                            <span className="text-gray-400">Email</span>
                            <span className="text-white">{user.email}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-zinc-800">
                            <span className="text-gray-400">Member Since</span>
                            <span className="text-white">May 1, 2023</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="profile" className="mt-6">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <CardTitle className="text-white">Profile Information</CardTitle>
                      <CardDescription>Update your personal information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">
                        This is a demo account. In a real application, you would be able to edit your profile
                        information here.
                      </p>
                      <Button className="bg-amber-500 hover:bg-amber-600 text-black">Edit Profile</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
