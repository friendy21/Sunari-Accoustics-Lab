"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUp, DollarSign, Package, ShoppingCart, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardCards() {
  const cards = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      color: "bg-green-500/20",
      iconColor: "text-green-500",
    },
    {
      title: "New Orders",
      value: "356",
      change: "+12.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "bg-blue-500/20",
      iconColor: "text-blue-500",
    },
    {
      title: "New Customers",
      value: "213",
      change: "+5.4%",
      trend: "up",
      icon: Users,
      color: "bg-violet-500/20",
      iconColor: "text-violet-500",
    },
    {
      title: "Products in Stock",
      value: "124",
      change: "-3.1%",
      trend: "down",
      icon: Package,
      color: "bg-amber-500/20",
      iconColor: "text-amber-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {cards.map((card, index) => (
        <motion.div key={index} variants={item}>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">{card.title}</CardTitle>
              <div className={`p-2 rounded-full ${card.color}`}>
                <card.icon className={`h-4 w-4 ${card.iconColor}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{card.value}</div>
              <div className="flex items-center pt-1 text-xs">
                {card.trend === "up" ? (
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={card.trend === "up" ? "text-green-500" : "text-red-500"}>{card.change}</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
