"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const notifications = [
  {
    id: 1,
    title: "New Order",
    description: "You have received a new order (#ORD-7192)",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "Low Stock Alert",
    description: "Sunari Bass Pro is running low on stock (5 remaining)",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 3,
    title: "Payment Received",
    description: "Payment for order #ORD-7190 has been processed",
    time: "5 hours ago",
    read: true,
  },
  {
    id: 4,
    title: "New Review",
    description: "A customer left a 5-star review for Sunari S1 Pro",
    time: "1 day ago",
    read: true,
  },
]

export function NotificationsPopover() {
  const [open, setOpen] = useState(false)
  const [readNotifications, setReadNotifications] = useState<number[]>([])

  const unreadCount = notifications.filter(
    (notification) => !notification.read && !readNotifications.includes(notification.id),
  ).length

  const markAsRead = (id: number) => {
    setReadNotifications((prev) => [...prev, id])
  }

  const markAllAsRead = () => {
    setReadNotifications(notifications.map((notification) => notification.id))
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-zinc-900 border-zinc-800" align="end">
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
          <h3 className="font-semibold text-white">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-amber-500 hover:text-amber-400"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto">
          <AnimatePresence>
            {notifications.map((notification) => {
              const isRead = notification.read || readNotifications.includes(notification.id)

              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`border-b border-zinc-800 px-4 py-3 ${isRead ? "bg-transparent" : "bg-amber-500/5"}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    {!isRead && <div className="mt-1.5 h-2 w-2 rounded-full bg-amber-500" />}
                    <div className={!isRead ? "ml-0" : "ml-5"}>
                      <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{notification.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        <div className="border-t border-zinc-800 p-2">
          <Button variant="outline" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
