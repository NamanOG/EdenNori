"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Flame, Star, Clock } from "lucide-react"

const menuCategories = [
  { id: "trending", name: "Trending Now", icon: "🔥" },
  { id: "sushi", name: "Sushi Lab", icon: "🍣" },
  { id: "ramen", name: "Ramen Station", icon: "🍜" },
  { id: "bowls", name: "Power Bowls", icon: "🥢" },
  { id: "fusion", name: "Fusion X", icon: "⚡" },
]

const dishes = [
  {
    id: 1,
    name: "Cyber Dragon Veggie Roll",
    description: "Expertly crafted with molecular gastronomy techniques, pure vegetarian",
    price: 650,
    originalPrice: 750,
    image: "/images/dishes/cyber-dragon-veggie-roll.jpg",
    category: "sushi",
    rating: 4.9,
    prepTime: 12,
    isSpicy: true,
    isTrending: true,
    tags: ["Premium", "Chef Special"],
  },
  {
    id: 2,
    name: "Quantum Veggie Ramen",
    description: "48-hour slow-cooked vegetable broth with precision timing",
    price: 420,
    originalPrice: 480,
    image: "/images/dishes/quantum-veggie-ramen.jpg",
    category: "ramen",
    rating: 4.8,
    prepTime: 8,
    isSpicy: false,
    isTrending: true,
    tags: ["Signature", "Hot Seller"],
  },
  {
    id: 3,
    name: "Neo Tokyo Tofu Bowl",
    description: "Future-forward protein bowl with smart nutrition and crispy tofu",
    price: 380,
    originalPrice: 420,
    image: "/images/dishes/neo-tokyo-tofu-bowl.jpg",
    category: "bowls",
    rating: 4.7,
    prepTime: 10,
    isSpicy: false,
    isTrending: false,
    tags: ["Healthy", "Protein Rich"],
  },
  {
    id: 4,
    name: "Fusion Burst Paneer Bao",
    description: "Indian-Japanese fusion with molecular elements and succulent paneer",
    price: 320,
    originalPrice: 360,
    image: "/images/dishes/fusion-burst-paneer-bao.jpg",
    category: "fusion",
    rating: 4.6,
    prepTime: 15,
    isSpicy: true,
    isTrending: true,
    tags: ["Fusion", "Limited"],
  },
]

export function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState("trending")
  const [hoveredDish, setHoveredDish] = useState<number | null>(null)

  const filteredDishes =
    activeCategory === "trending"
      ? dishes.filter((dish) => dish.isTrending)
      : dishes.filter((dish) => dish.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
            <Flame className="w-4 h-4 mr-2" />
            Live Kitchen Menu
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Crafted in the
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Cloud</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every dish is precision-crafted in our tech-enabled cloud kitchen using molecular gastronomy and traditional
            techniques
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                  : "border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => (
            <Card
              key={dish.id}
              className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              <div className="relative">
                <img
                  src={dish.image || "/images/dishes/default-dish.jpg"}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {dish.tags.map((tag) => (
                    <Badge key={tag} className="bg-black/70 text-white text-xs border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Add Button */}
                <Button
                  size="icon"
                  className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Plus className="w-4 h-4" />
                </Button>

                {/* Quick Stats */}
                <div className="absolute bottom-3 left-3 flex items-center space-x-3 text-white text-xs">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{dish.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{dish.prepTime}m</span>
                  </div>
                  {dish.isSpicy && <span className="text-red-400">🌶️</span>}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{dish.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-lg">₹{dish.price}</span>
                    {dish.originalPrice > dish.price && (
                      <span className="text-gray-500 line-through text-sm">₹{dish.originalPrice}</span>
                    )}
                  </div>

                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                  >
                    Add
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredDish === dish.id && (
                <div className="absolute inset-0 border-2 border-purple-500/50 rounded-lg pointer-events-none animate-pulse"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
