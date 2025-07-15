"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Users, Clock, ChefHat, Truck } from "lucide-react"

export function CloudKitchenStats() {
  const [stats, setStats] = useState({
    ordersToday: 0,
    avgPrepTime: 0,
    activeChefs: 0,
    deliveryPartners: 0,
    customerSatisfaction: 0,
    kitchenEfficiency: 0,
  })

  useEffect(() => {
    // Animate numbers on mount
    const timer = setTimeout(() => {
      setStats({
        ordersToday: 247,
        avgPrepTime: 12,
        activeChefs: 8,
        deliveryPartners: 15,
        customerSatisfaction: 4.9,
        kitchenEfficiency: 96,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const statCards = [
    {
      icon: TrendingUp,
      label: "Orders Today",
      value: stats.ordersToday,
      suffix: "",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Clock,
      label: "Avg Prep Time",
      value: stats.avgPrepTime,
      suffix: "min",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: ChefHat,
      label: "Active Chefs",
      value: stats.activeChefs,
      suffix: "",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Truck,
      label: "Delivery Partners",
      value: stats.deliveryPartners,
      suffix: "",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      icon: Users,
      label: "Customer Rating",
      value: stats.customerSatisfaction,
      suffix: "★",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      icon: Zap,
      label: "Kitchen Efficiency",
      value: stats.kitchenEfficiency,
      suffix: "%",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Real-time Kitchen Analytics
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Powered by
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Technology
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our cloud kitchen operates with precision timing, smart inventory management, and real-time quality control
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statCards.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.bgColor} ${stat.borderColor} border bg-opacity-50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group cursor-pointer`}
            >
              <div className="p-6 text-center">
                <div
                  className={`${stat.bgColor} ${stat.borderColor} border rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {typeof stat.value === "number" && stat.value % 1 !== 0 ? stat.value.toFixed(1) : stat.value}
                  {stat.suffix}
                </div>

                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Live Status Bar */}
        <div className="mt-12 bg-black/50 border border-gray-800 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Kitchen Status: Operational</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div>Next delivery slot: 7:45 PM</div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div>Queue: 3 orders</div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div>Est. wait: 15 min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
