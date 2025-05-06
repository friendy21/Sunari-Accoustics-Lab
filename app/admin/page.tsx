import type { Metadata } from "next"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { DashboardCards } from "@/components/admin/dashboard-cards"
import { RecentOrders } from "@/components/admin/recent-orders"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { TopProducts } from "@/components/admin/top-products"

export const metadata: Metadata = {
  title: "Admin Dashboard | Sunari Acoustics Lab",
  description: "Admin dashboard for Sunari Acoustics Lab",
}

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and has admin role
  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/login?callbackUrl=/admin")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-gray-400">Welcome back, {session?.user?.name}</p>
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
