"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Users, Clock, Award } from "lucide-react"

export function FloatingStats() {
  const [stats, setStats] = useState({
    ordersToday: 0,
    happyCustomers: 0,
    avgDelivery: 0,
    rating: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        ordersToday: 247,
        happyCustomers: 12500,
        avgDelivery: 18,
        rating: 4.9,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const statItems = [
    {
      icon: TrendingUp,
      value: stats.ordersToday,
      label: "Orders Today",
      color: "from-green-400 to-emerald-400",
      glow: "shadow-green-400/20",
    },
    {
      icon: Users,
      value: `${(stats.happyCustomers / 1000).toFixed(1)}k`,
      label: "Happy Customers",
      color: "from-pink-400 to-purple-400",
      glow: "shadow-pink-400/20",
    },
    {
      icon: Clock,
      value: `${stats.avgDelivery}min`,
      label: "Avg Delivery",
      color: "from-cyan-400 to-blue-400",
      glow: "shadow-cyan-400/20",
    },
    {
      icon: Award,
      value: stats.rating,
      label: "Rating",
      color: "from-yellow-400 to-orange-400",
      glow: "shadow-yellow-400/20",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((stat, index) => (
            <div
              key={index}
              className={`bg-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:${stat.glow} hover:shadow-xl group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {typeof stat.value === "number" && stat.value % 1 !== 0 ? stat.value.toFixed(1) : stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
