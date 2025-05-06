"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const products = [
  {
    id: 1,
    name: "Sunari S1 Pro",
    image: "/placeholder.svg?key=7ydsz",
    category: "professional",
    price: 999,
    stock: 24,
    status: "in-stock",
  },
  {
    id: 2,
    name: "Sunari Harmony",
    image: "/placeholder.svg?key=cvqen",
    category: "audiophile",
    price: 499,
    stock: 18,
    status: "in-stock",
  },
  {
    id: 3,
    name: "Sunari Clarity",
    image: "/placeholder.svg?key=ugask",
    category: "audiophile",
    price: 299,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: 4,
    name: "Sunari Reference",
    image: "/placeholder.svg?key=xg8cd",
    category: "professional",
    price: 799,
    stock: 12,
    status: "in-stock",
  },
  {
    id: 5,
    name: "Sunari Bass Pro",
    image: "/placeholder.svg?key=nrxfq",
    category: "audiophile",
    price: 399,
    stock: 5,
    status: "low-stock",
  },
  {
    id: 6,
    name: "Premium MMCX Cable",
    image: "/placeholder.svg?key=xyc56",
    category: "accessories",
    price: 149,
    stock: 32,
    status: "in-stock",
  },
]

export function ProductsTable() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  const handleDelete = (id: number) => {
    setSelectedProduct(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    // Handle delete logic here
    console.log(`Deleting product ${selectedProduct}`)
    setDeleteDialogOpen(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-stock":
        return <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">In Stock</Badge>
      case "low-stock":
        return <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30">Low Stock</Badge>
      case "out-of-stock":
        return <Badge className="bg-red-500/20 text-red-500 hover:bg-red-500/30">Out of Stock</Badge>
      default:
        return <Badge className="bg-gray-500/20 text-gray-500 hover:bg-gray-500/30">Unknown</Badge>
    }
  }

  return (
    <>
      <div className="rounded-md border border-zinc-800 bg-zinc-900">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800 hover:bg-zinc-900">
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="border-zinc-800 hover:bg-zinc-800/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-md overflow-hidden bg-zinc-800">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-white">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell className="capitalize">{product.category}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{getStatusBadge(product.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/products/${product.id}`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-red-500 focus:text-red-500"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-zinc-900 border-zinc-800">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the product and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
