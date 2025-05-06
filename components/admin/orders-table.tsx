"use client"

import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { CheckCircle2, Clock, Download, Eye, MoreHorizontal, Truck, XCircle } from "lucide-react"

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

const orders = [
  {
    id: "ORD-7192",
    customer: "Alex Johnson",
    email: "alex@example.com",
    product: "Sunari S1 Pro",
    date: new Date("2023-06-15"),
    amount: 999,
    status: "completed",
  },
  {
    id: "ORD-7193",
    customer: "Sarah Williams",
    email: "sarah@example.com",
    product: "Sunari Harmony",
    date: new Date("2023-06-14"),
    amount: 499,
    status: "processing",
  },
  {
    id: "ORD-7194",
    customer: "Michael Chen",
    email: "michael@example.com",
    product: "Sunari Reference",
    date: new Date("2023-06-14"),
    amount: 799,
    status: "shipped",
  },
  {
    id: "ORD-7195",
    customer: "Emily Davis",
    email: "emily@example.com",
    product: "Premium MMCX Cable",
    date: new Date("2023-06-13"),
    amount: 149,
    status: "cancelled",
  },
  {
    id: "ORD-7196",
    customer: "David Wilson",
    email: "david@example.com",
    product: "Sunari Custom Pro",
    date: new Date("2023-06-12"),
    amount: 1299,
    status: "completed",
  },
  {
    id: "ORD-7197",
    customer: "Jennifer Lee",
    email: "jennifer@example.com",
    product: "Sunari Elite",
    date: new Date("2023-06-11"),
    amount: 1499,
    status: "shipped",
  },
  {
    id: "ORD-7198",
    customer: "Robert Brown",
    email: "robert@example.com",
    product: "Leather Carrying Case",
    date: new Date("2023-06-10"),
    amount: 79,
    status: "completed",
  },
  {
    id: "ORD-7199",
    customer: "Lisa Garcia",
    email: "lisa@example.com",
    product: "Sunari Wireless Adapter",
    date: new Date("2023-06-09"),
    amount: 129,
    status: "processing",
  },
  {
    id: "ORD-7200",
    customer: "Kevin Martinez",
    email: "kevin@example.com",
    product: "Foam Ear Tips Set",
    date: new Date("2023-06-08"),
    amount: 24.99,
    status: "completed",
  },
]

export function OrdersTable() {
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const handleCancel = (id: string) => {
    setSelectedOrder(id)
    setCancelDialogOpen(true)
  }

  const confirmCancel = () => {
    // Handle cancel logic here
    console.log(`Cancelling order ${selectedOrder}`)
    setCancelDialogOpen(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "processing":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "shipped":
        return <Truck className="h-4 w-4 text-blue-500" />
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">Completed</Badge>
      case "processing":
        return <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30">Processing</Badge>
      case "shipped":
        return <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">Shipped</Badge>
      case "cancelled":
        return <Badge className="bg-red-500/20 text-red-500 hover:bg-red-500/30">Cancelled</Badge>
      default:
        return null
    }
  }

  return (
    <>
      <div className="rounded-md border border-zinc-800 bg-zinc-900">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800 hover:bg-zinc-900">
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-zinc-800 hover:bg-zinc-800/50">
                <TableCell className="font-medium text-white">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="text-white">{order.customer}</p>
                    <p className="text-xs text-gray-400">{order.email}</p>
                  </div>
                </TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{format(order.date, "MMM dd, yyyy")}</TableCell>
                <TableCell>${order.amount}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    {getStatusBadge(order.status)}
                  </div>
                </TableCell>
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
                        <Link href={`/admin/orders/${order.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download invoice
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {order.status !== "cancelled" && (
                        <DropdownMenuItem
                          className="text-red-500 focus:text-red-500"
                          onClick={() => handleCancel(order.id)}
                        >
                          <XCircle className="mr-2 h-4 w-4" />
                          Cancel order
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <AlertDialogContent className="bg-zinc-900 border-zinc-800">
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Order?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel this order? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, keep order</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={confirmCancel}>
              Yes, cancel order
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
