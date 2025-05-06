"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sidebarContentVariants = cva("bg-background p-6", {
  variants: {
    side: {
      left: "border-r",
      right: "border-l",
    },
  },
  defaultVariants: {
    side: "left",
  },
})

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & VariantProps<typeof sidebarContentVariants>
>(({ className, side, ...props }, ref) => {
  return <div ref={ref} className={cn(sidebarContentVariants({ side, className }))} {...props} />
})
SidebarContent.displayName = "SidebarContent"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex h-14 items-center space-x-4 px-6", className)} {...props} />
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("mt-auto border-t p-6", className)} {...props} />
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarMenu = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("grid gap-1 px-3", className)} {...props} />
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("rounded-md", className)} {...props} />
  },
)
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarMenuButton = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot> & {
    isActive?: boolean
  }
>(({ className, isActive, ...props }, ref) => {
  return (
    <Slot
      ref={ref}
      className={cn(
        "group flex w-full items-center space-x-2 rounded-md p-2 text-sm font-medium hover:bg-secondary hover:text-foreground",
        isActive ? "bg-secondary text-foreground" : "text-muted-foreground",
        className,
      )}
      {...props}
    />
  )
})
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarRail = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("hidden md:flex md:flex-col md:items-center md:justify-between md:border-l", className)}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

export { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail }
