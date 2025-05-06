"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { DashboardCards } from "@/components/admin/dashboard-cards"
import { RecentOrders } from "@/components/admin/recent-orders"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { TopProducts } from "@/components/admin/top-products"
import { authenticateUser } from "@/lib/mock-data"

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Simulate checking authentication
    const checkAuth = () => {
      // In a real app, this would check the session
      // For this mock, we'll just simulate a logged-in admin
      const mockUser = authenticateUser("admin@sunari.com", "password123")

      if (mockUser && mockUser.role === "ADMIN") {
        setUser(mockUser)
      } else {
        // Redirect to login if not authenticated
        router.push("/auth/login?callbackUrl=/admin")
      }

      setLoading(false)
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    )
  }

  if (!user) {
    return null // This will redirect in the useEffect
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-gray-400">Welcome back, {user?.name}</p>
      </div>

      <DashboardCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <TopProducts />
      </div>

      <RecentOrders />
    </div>
  )
}
