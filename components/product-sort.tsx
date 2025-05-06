"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"

export function ProductSort() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
          <ArrowUpDown className="mr-2 h-4 w-4" />
          Sort
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Featured</DropdownMenuItem>
        <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
        <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
        <DropdownMenuItem>Newest</DropdownMenuItem>
        <DropdownMenuItem>Best Selling</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
