"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, User, ChefHat } from "lucide-react"

interface LiveOrder {
  id: string
  customerName: string
  items: string[]
  status: "preparing" | "cooking" | "ready" | "dispatched"
  estimatedTime: number
  location: string
  orderValue: number
}

const mockOrders: LiveOrder[] = [
  {
    id: "ORD001",
    customerName: "Arjun M.",
    items: ["Dragon Veggie Roll", "Quantum Veggie Ramen"],
    status: "cooking",
    estimatedTime: 8,
    location: "Bandra West",
    orderValue: 1070,
  },
  {
    id: "ORD002",
    customerName: "Priya S.",
    items: ["Neo Tokyo Tofu Bowl", "Fusion Burst Paneer Bao"],
    status: "preparing",
    estimatedTime: 12,
    location: "Andheri East",
    orderValue: 700,
  },
  {
    id: "ORD003",
    customerName: "Rahul K.",
    items: ["Dragon Veggie Roll", "Vegetable Miso Ramen", "Vegetable Gyoza"],
    status: "ready",
    estimatedTime: 2,
    location: "Powai",
    orderValue: 1250,
  },
  {
    id: "ORD004",
    customerName: "Sneha P.",
    items: ["Quantum Veggie Ramen"],
    status: "dispatched",
    estimatedTime: 15,
    location: "Malad West",
    orderValue: 420,
  },
]

export function LiveOrders() {
  const [orders, setOrders] = useState<LiveOrder[]>(mockOrders)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      // Simulate order updates
      setOrders((prevOrders) =>
        prevOrders.map((order) => ({
          ...order,
          estimatedTime: Math.max(0, order.estimatedTime - 0.1),
        })),
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing":
        return { bg: "bg-yellow-500/20", text: "text-yellow-400", border: "border-yellow-500/30" }
      case "cooking":
        return { bg: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/30" }
      case "ready":
        return { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" }
      case "dispatched":
        return { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" }
      default:
        return { bg: "bg-gray-500/20", text: "text-gray-400", border: "border-gray-500/30" }
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "preparing":
        return "👨‍🍳"
      case "cooking":
        return "🔥"
      case "ready":
        return "✅"
      case "dispatched":
        return "🚚"
      default:
        return "⏳"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-4">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
            Live Kitchen Feed
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Orders in
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              Real-time
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch your order come to life in our cloud kitchen with live tracking and updates
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-gray-900/50 border-gray-800 p-4 text-center">
            <div className="text-2xl font-bold text-green-400">12</div>
            <div className="text-sm text-gray-400">Orders Cooking</div>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">8</div>
            <div className="text-sm text-gray-400">Ready for Pickup</div>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">15</div>
            <div className="text-sm text-gray-400">Out for Delivery</div>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">247</div>
            <div className="text-sm text-gray-400">Delivered Today</div>
          </Card>
        </div>

        {/* Live Orders Feed */}
        <div className="grid md:grid-cols-2 gap-6">
          {orders.map((order) => {
            const statusColor = getStatusColor(order.status)

            return (
              <Card
                key={order.id}
                className="bg-gray-900/50 border-gray-800 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Order Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{order.customerName}</div>
                        <div className="text-gray-400 text-sm">#{order.id}</div>
                      </div>
                    </div>

                    <Badge className={`${statusColor.bg} ${statusColor.text} ${statusColor.border} border`}>
                      <span className="mr-1">{getStatusIcon(order.status)}</span>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>

                  {/* Order Items */}
                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-2">Items:</div>
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <div key={index} className="text-white text-sm">
                          • {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Details */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{Math.ceil(order.estimatedTime)}m</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{order.location}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-green-400 font-semibold">₹{order.orderValue}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          order.status === "preparing"
                            ? "bg-yellow-400 w-1/4"
                            : order.status === "cooking"
                              ? "bg-orange-400 w-1/2"
                              : order.status === "ready"
                                ? "bg-green-400 w-3/4"
                                : "bg-blue-400 w-full"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Kitchen Status */}
        <div className="mt-12 text-center">
          <Card className="bg-gray-900/50 border-gray-800 p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <ChefHat className="w-6 h-6 text-purple-400" />
              <span className="text-white font-semibold">Kitchen Status</span>
            </div>
            <div className="text-green-400 font-bold text-lg mb-2">Fully Operational</div>
            <div className="text-gray-400 text-sm">
              Current time: {mounted ? currentTime.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" }) : "--:--:-- --"}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
