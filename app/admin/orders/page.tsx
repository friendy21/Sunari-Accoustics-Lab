import type { Metadata } from "next"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { OrdersTable } from "@/components/admin/orders-table"
import { OrderFilters } from "@/components/admin/order-filters"

export const metadata: Metadata = {
  title: "Orders | Admin Dashboard",
  description: "Manage orders for Sunari Acoustics Lab",
}

export default async function OrdersPage() {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and has admin role
  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/login?callbackUrl=/admin/orders")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">Orders</h1>
      </div>

      <OrderFilters />
      <OrdersTable />
    </div>
  )
}
