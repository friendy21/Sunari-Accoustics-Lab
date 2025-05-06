import type { Metadata } from "next"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { CustomersTable } from "@/components/admin/customers-table"
import { CustomerFilters } from "@/components/admin/customer-filters"

export const metadata: Metadata = {
  title: "Customers | Admin Dashboard",
  description: "Manage customers for Sunari Acoustics Lab",
}

export default async function CustomersPage() {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and has admin role
  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/login?callbackUrl=/admin/customers")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">Customers</h1>
      </div>

      <CustomerFilters />
      <CustomersTable />
    </div>
  )
}
