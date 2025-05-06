"use client"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { CheckCircle2, Clock, MoreHorizontal, Package, Truck, XCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
]

export function RecentOrders() {
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
        return <Package className="h-4 w-4 text-gray-500" />
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
        return <Badge className="bg-gray-500/20 text-gray-500 hover:bg-gray-500/30">Unknown</Badge>
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-white">Recent Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black">View All</Button>
        </CardHeader>
        <CardContent>
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
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Update status</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">Cancel order</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )
}
