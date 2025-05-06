"use client"

import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { Eye, MoreHorizontal, UserX } from "lucide-react"

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

const customers = [
  {
    id: "CUST-1001",
    name: "Alex Johnson",
    email: "alex@example.com",
    status: "active",
    orders: 5,
    spent: 2499,
    lastOrder: new Date("2023-06-15"),
    image: "/person-profile-1.png",
  },
  {
    id: "CUST-1002",
    name: "Sarah Williams",
    email: "sarah@example.com",
    status: "active",
    orders: 3,
    spent: 1299,
    lastOrder: new Date("2023-06-14"),
    image: "/person-profile-2.png",
  },
  {
    id: "CUST-1003",
    name: "Michael Chen",
    email: "michael@example.com",
    status: "active",
    orders: 2,
    spent: 899,
    lastOrder: new Date("2023-06-14"),
    image: "/person-profile-3.png",
  },
  {
    id: "CUST-1004",
    name: "Emily Davis",
    email: "emily@example.com",
    status: "inactive",
    orders: 1,
    spent: 149,
    lastOrder: new Date("2023-06-13"),
    image: "/person-profile-4.png",
  },
  {
    id: "CUST-1005",
    name: "David Wilson",
    email: "david@example.com",
    status: "active",
    orders: 4,
    spent: 2199,
    lastOrder: new Date("2023-06-12"),
    image: "/person-profile-5.png",
  },
  {
    id: "CUST-1006",
    name: "Jennifer Lee",
    email: "jennifer@example.com",
    status: "active",
    orders: 2,
    spent: 1699,
    lastOrder: new Date("2023-06-11"),
    image: "/placeholder.svg?key=llsuh",
  },
  {
    id: "CUST-1007",
    name: "Robert Brown",
    email: "robert@example.com",
    status: "new",
    orders: 1,
    spent: 79,
    lastOrder: new Date("2023-06-10"),
    image: "/placeholder.svg?key=z71k9",
  },
]

export function CustomersTable() {
  const [deactivateDialogOpen, setDeactivateDialogOpen] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null)

  const handleDeactivate = (id: string) => {
    setSelectedCustomer(id)
    setDeactivateDialogOpen(true)
  }

  const confirmDeactivate = () => {
    // Handle deactivate logic here
    console.log(`Deactivating customer ${selectedCustomer}`)
    setDeactivateDialogOpen(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-500/20 text-gray-400 hover:bg-gray-500/30">Inactive</Badge>
      case "new":
        return <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">New</Badge>
      default:
        return null
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  }

  return (
    <>
      <div className="rounded-md border border-zinc-800 bg-zinc-900">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800 hover:bg-zinc-900">
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Last Order</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id} className="border-zinc-800 hover:bg-zinc-800/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={customer.image || "/placeholder.svg"} alt={customer.name} />
                      <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-white">{customer.name}</p>
                      <p className="text-xs text-gray-400">{customer.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(customer.status)}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>${customer.spent}</TableCell>
                <TableCell>{format(customer.lastOrder, "MMM dd, yyyy")}</TableCell>
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
                        <Link href={`/admin/customers/${customer.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {customer.status !== "inactive" && (
                        <DropdownMenuItem
                          className="text-red-500 focus:text-red-500"
                          onClick={() => handleDeactivate(customer.id)}
                        >
                          <UserX className="mr-2 h-4 w-4" />
                          Deactivate
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

      <AlertDialog open={deactivateDialogOpen} onOpenChange={setDeactivateDialogOpen}>
        <AlertDialogContent className="bg-zinc-900 border-zinc-800">
          <AlertDialogHeader>
            <AlertDialogTitle>Deactivate Customer?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to deactivate this customer? They will no longer be able to log in or place orders.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={confirmDeactivate}>
              Deactivate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
