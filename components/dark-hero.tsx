"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Star, Leaf, Clock, Award, Sparkles, Zap, ArrowRight } from "lucide-react"

export function DarkHero() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                <Leaf className="w-4 h-4 mr-2" />
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                100% Pure Vegetarian
              </div>
              <div className="text-sm text-gray-400">
                {mounted ? currentTime.toLocaleTimeString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  hour12: true,
                }) : "--:--:-- --"}
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Authentic
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Asian Flavors
                </span>
                <br />
                <span className="text-white">
                  Delivered
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    {" "}
                    Fresh
                  </span>
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Experience premium Asian cuisine crafted in our cloud kitchen. Fresh ingredients, bold flavors, and
                vibrant presentation delivered straight to your doorstep in Raipur.
              </p>
            </div>

            {/* Glowing Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl border border-pink-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-3xl font-bold text-pink-400">4.9</span>
                </div>
                <p className="text-sm text-gray-400">Rating</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-cyan-400 mr-1" />
                  <span className="text-3xl font-bold text-cyan-400">25</span>
                </div>
                <p className="text-sm text-gray-400">Minutes</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-green-400 mr-1" />
                  <span className="text-3xl font-bold text-green-400">50+</span>
                </div>
                <p className="text-sm text-gray-400">Dishes</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Explore Menu
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-full text-lg font-medium bg-transparent backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Quick Order
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm">Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">FSSAI Certified</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dynamic Food Display */}
          <div className="relative min-h-[600px] w-full flex justify-center items-center">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1622643944007-450264a5f9a9?w=500&h=600&fit=crop&crop=center"
                alt="Delicious Asian vegetarian cuisine"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-500"
              />

              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl animate-pulse"></div>
            </div>

            {/* Floating Cards - Positioned far apart */}
            <div className="absolute top-4 left-0 bg-black/80 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-4 shadow-lg shadow-orange-500/20 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍱</span>
                </div>
                <div>
                  <p className="font-semibold text-orange-400">Today's Special</p>
                  <p className="text-sm text-gray-400">Dragon Roll Bowl</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-4 shadow-xl shadow-pink-500/30 z-20">
              <div className="text-center">
                <p className="text-2xl font-bold">₹299</p>
                <p className="text-sm opacity-90">Free Delivery</p>
              </div>
            </div>

            <div className="absolute top-1/2 right-4 bg-black/80 backdrop-blur-xl border border-green-500/30 rounded-xl p-3 shadow-lg shadow-green-500/20 z-20 transform -translate-y-1/2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Fresh & Hot</span>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute top-1/3 left-5 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
