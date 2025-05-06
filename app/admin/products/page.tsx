import type { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { ProductsTable } from "@/components/admin/products-table"
import { ProductFilters } from "@/components/admin/product-filters"

export const metadata: Metadata = {
  title: "Products | Admin Dashboard",
  description: "Manage products for Sunari Acoustics Lab",
}

export default async function ProductsPage() {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and has admin role
  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/login?callbackUrl=/admin/products")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">Products</h1>
        <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <ProductFilters />
      <ProductsTable />
    </div>
  )
}
