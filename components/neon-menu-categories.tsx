"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const categories = [
  {
    id: "japanese",
    name: "Japanese",
    description: "Traditional sushi, ramen & more",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop&crop=center",
    emoji: "🍣",
    color: "from-red-500 to-pink-500",
    glowColor: "shadow-red-500/30",
    dishes: "25+ dishes",
  },
  {
    id: "indo-asian",
    name: "Indo-Asian",
    description: "Fusion of Indian & Asian flavors",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center",
    emoji: "🍛",
    color: "from-orange-500 to-yellow-500",
    glowColor: "shadow-orange-500/30",
    dishes: "20+ dishes",
  },
  {
    id: "chinese",
    name: "Chinese",
    description: "Authentic vegetarian Chinese",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop&crop=center",
    emoji: "🥢",
    color: "from-green-500 to-teal-500",
    glowColor: "shadow-green-500/30",
    dishes: "18+ dishes",
  },
  {
    id: "thai",
    name: "Thai",
    description: "Aromatic curries & stir-fries",
    image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=300&h=200&fit=crop&crop=center",
    emoji: "🌶️",
    color: "from-purple-500 to-indigo-500",
    glowColor: "shadow-purple-500/30",
    dishes: "15+ dishes",
  },
]

export function NeonMenuCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Kitchen
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From traditional Japanese to innovative Indo-Asian fusion, discover flavors crafted with passion in our
            cloud kitchen
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-black/50 backdrop-blur-xl overflow-hidden hover:scale-105 ${
                hoveredCategory === category.id ? `hover:${category.glowColor}` : ""
              }`}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Colorful Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}
                >
                  {category.dishes}
                </div>

                {/* Emoji */}
                <div className="absolute top-4 right-4 text-3xl group-hover:scale-125 transition-transform duration-300">
                  {category.emoji}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3
                    className={`text-2xl font-bold mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-300">{category.description}</p>
                </div>

                {/* Glowing particles */}
                {hoveredCategory === category.id && (
                  <>
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-300"></div>
                    <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-700"></div>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Can't decide? Let our chef surprise you!</p>
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
            Chef's Choice Combo
          </button>
        </div>
      </div>
    </section>
  )
}
