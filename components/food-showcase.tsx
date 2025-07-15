"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Plus, Flame } from "lucide-react"

const dishes = [
  {
    id: 1,
    name: "Dragon Veggie Roll",
    description: "Avocado, cucumber, carrot with spicy mayo and sesame seeds",
    price: 450,
    originalPrice: 520,
    image: "/placeholder.svg?height=300&width=300",
    category: "Japanese",
    rating: 4.8,
    reviews: 124,
    isSpicy: false,
    isPopular: true,
    prepTime: "15-20 min",
    tags: ["Bestseller", "Fresh"],
  },
  {
    id: 2,
    name: "Zen Garden Ramen",
    description: "Rich miso broth with tofu, mushrooms, corn and soft-boiled egg",
    price: 380,
    originalPrice: 420,
    image: "/placeholder.svg?height=300&width=300",
    category: "Japanese",
    rating: 4.9,
    reviews: 89,
    isSpicy: false,
    isPopular: true,
    prepTime: "12-15 min",
    tags: ["Chef Special", "Comfort Food"],
  },
  {
    id: 3,
    name: "Mumbai Hakka Noodles",
    description: "Indo-Chinese fusion with bell peppers, cabbage and secret sauce",
    price: 320,
    originalPrice: 360,
    image: "/placeholder.svg?height=300&width=300",
    category: "Indo-Asian",
    rating: 4.7,
    reviews: 156,
    isSpicy: true,
    isPopular: false,
    prepTime: "10-12 min",
    tags: ["Fusion", "Street Style"],
  },
  {
    id: 4,
    name: "Thai Basil Curry Bowl",
    description: "Aromatic coconut curry with vegetables and jasmine rice",
    price: 420,
    originalPrice: 480,
    image: "/placeholder.svg?height=300&width=300",
    category: "Thai",
    rating: 4.6,
    reviews: 78,
    isSpicy: true,
    isPopular: true,
    prepTime: "18-22 min",
    tags: ["Authentic", "Aromatic"],
  },
]

export function FoodShowcase() {
  const [hoveredDish, setHoveredDish] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Most Loved Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that keep our customers coming back for more
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <Card
              key={dish.id}
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 shadow-lg overflow-hidden bg-white"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              <div className="relative">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {dish.isPopular && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">Popular</span>
                  )}
                  {dish.isSpicy && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center">
                      <Flame className="w-3 h-3 mr-1" />
                      Spicy
                    </span>
                  )}
                </div>

                {/* Add Button */}
                <Button
                  size="icon"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Plus className="w-4 h-4" />
                </Button>

                {/* Quick Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-sm">
                    <span>{dish.prepTime}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{dish.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">{dish.category}</span>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{dish.rating}</span>
                    <span className="text-gray-400">({dish.reviews})</span>
                  </div>
                </div>

                {/* Dish Name */}
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {dish.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{dish.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {dish.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">₹{dish.price}</span>
                    {dish.originalPrice > dish.price && (
                      <span className="text-sm text-gray-500 line-through">₹{dish.originalPrice}</span>
                    )}
                  </div>

                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-4 font-medium">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>

              {/* Hover Border Effect */}
              {hoveredDish === dish.id && (
                <div className="absolute inset-0 border-2 border-red-500/30 rounded-lg pointer-events-none"></div>
              )}
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-full text-lg font-medium bg-transparent"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
