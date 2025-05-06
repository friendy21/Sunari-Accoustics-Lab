"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 1800 },
  { name: "Mar", total: 2200 },
  { name: "Apr", total: 2600 },
  { name: "May", total: 3200 },
  { name: "Jun", total: 3800 },
  { name: "Jul", total: 4200 },
  { name: "Aug", total: 4800 },
  { name: "Sep", total: 5200 },
  { name: "Oct", total: 5800 },
  { name: "Nov", total: 6200 },
  { name: "Dec", total: 6800 },
]

export function RevenueChart() {
  const [period, setPeriod] = useState("yearly")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-white">Revenue</CardTitle>
            <CardDescription>Monthly revenue overview</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={period === "monthly" ? "default" : "outline"}
              className={period === "monthly" ? "bg-amber-500 hover:bg-amber-600 text-black" : ""}
              onClick={() => setPeriod("monthly")}
            >
              Monthly
            </Button>
            <Button
              size="sm"
              variant={period === "yearly" ? "default" : "outline"}
              className={period === "yearly" ? "bg-amber-500 hover:bg-amber-600 text-black" : ""}
              onClick={() => setPeriod("yearly")}
            >
              Yearly
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e1e1e", border: "1px solid #333" }}
                formatter={(value: number) => [`$${value}`, "Revenue"]}
              />
              <Bar dataKey="total" fill="#f59e0b" radius={[4, 4, 0, 0]} className="fill-amber-500" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}
