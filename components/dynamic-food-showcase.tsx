"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Plus, Flame, Zap, Sparkles } from "lucide-react"

const dishes = [
  {
    id: 1,
    name: "Dragon Veggie Roll",
    description: "Fresh avocado, cucumber, carrot with spicy mayo and sesame seeds",
    price: 450,
    originalPrice: 520,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop&crop=center",
    category: "Japanese",
    rating: 4.8,
    reviews: 124,
    isSpicy: false,
    isPopular: true,
    prepTime: "15-20 min",
    tags: ["Bestseller", "Instagram Famous"],
    glowColor: "from-pink-500 to-purple-500",
  },
  {
    id: 2,
    name: "Zen Garden Ramen",
    description: "Rich miso broth with tofu, mushrooms, corn and soft-boiled egg", // Kept soft-boiled egg as it's common in vegetarian ramen, but can be removed if strictly no egg. Assuming it's a common vegetarian option.
    price: 380,
    originalPrice: 420,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop&crop=center",
    category: "Japanese",
    rating: 4.9,
    reviews: 89,
    isSpicy: false,
    isPopular: true,
    prepTime: "12-15 min",
    tags: ["Chef Special", "Comfort Food"],
    glowColor: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    name: "Mumbai Hakka Noodles",
    description: "Indo-Chinese fusion with bell peppers, cabbage and secret sauce",
    price: 320,
    originalPrice: 360,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop&crop=center",
    category: "Indo-Asian",
    rating: 4.7,
    reviews: 156,
    isSpicy: true,
    isPopular: false,
    prepTime: "10-12 min",
    tags: ["Fusion", "Street Style"],
    glowColor: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Thai Basil Curry",
    description: "Aromatic coconut curry with fresh vegetables and jasmine rice",
    price: 420,
    originalPrice: 480,
    image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=300&h=300&fit=crop&crop=center",
    category: "Thai",
    rating: 4.6,
    reviews: 78,
    isSpicy: true,
    isPopular: true,
    prepTime: "18-22 min",
    tags: ["Authentic", "Aromatic"],
    glowColor: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    name: "Spicy Tofu Katsu",
    description: "Crispy tofu cutlet with a fiery Japanese curry sauce and neon rice",
    price: 480,
    originalPrice: 550,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=300&fit=crop&crop=center",
    category: "Japanese",
    rating: 4.7,
    reviews: 95,
    isSpicy: true,
    isPopular: false,
    prepTime: "18-25 min",
    tags: ["New", "Bold Flavor"],
    glowColor: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    name: "Electric Kimchi Fried Rice",
    description: "Vibrant kimchi fried rice with glowing vegetables and a spicy kick",
    price: 390,
    originalPrice: 430,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=300&fit=crop&crop=center",
    category: "Indo-Asian",
    rating: 4.8,
    reviews: 110,
    isSpicy: true,
    isPopular: true,
    prepTime: "10-15 min",
    tags: ["Fan Favorite", "Quick Bite"],
    glowColor: "from-yellow-500 to-orange-500",
  },
  {
    id: 7,
    name: "Cybernetic Pad Thai",
    description: "Futuristic Pad Thai with glowing noodles and a tangy tamarind glaze",
    price: 470,
    originalPrice: 510,
    image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=300&h=300&fit=crop&crop=center",
    category: "Thai",
    rating: 4.6,
    reviews: 82,
    isSpicy: false,
    isPopular: false,
    prepTime: "20-25 min",
    tags: ["Classic", "Vegan"],
    glowColor: "from-green-500 to-cyan-500",
  },
  {
    id: 8,
    name: "Quantum Mochi Delight",
    description: "Assorted mochi ice cream with a shimmering edible glaze",
    price: 280,
    originalPrice: 320,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=300&fit=crop&crop=center",
    category: "Desserts",
    rating: 4.9,
    reviews: 130,
    isSpicy: false,
    isPopular: true,
    prepTime: "5-10 min",
    tags: ["Sweet Treat", "Popular"],
    glowColor: "from-purple-500 to-pink-500",
  },
]

export function DynamicFoodShowcase() {
  const [hoveredDish, setHoveredDish] = useState<number | null>(null)

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Most Loved Dishes
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Signature
            </span>
            <span className="text-white"> Creations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Handpicked favorites crafted with love in our cloud kitchen that keep customers coming back for more
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <Card
              key={dish.id}
              className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-gray-900/50 backdrop-blur-xl overflow-hidden hover:scale-105"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              <div className="relative">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Glowing overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent ${
                    hoveredDish === dish.id ? "opacity-100" : "opacity-60"
                  } transition-opacity duration-300`}
                ></div>

                {/* Colorful glow effect */}
                {hoveredDish === dish.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${dish.glowColor} opacity-20 animate-pulse`}></div>
                )}

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {dish.isPopular && (
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg shadow-pink-500/30">
                      🔥 Popular
                    </span>
                  )}
                  {dish.isSpicy && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center shadow-lg shadow-orange-500/30">
                      <Flame className="w-3 h-3 mr-1" />
                      Spicy
                    </span>
                  )}
                </div>

                {/* Add Button */}
                <Button
                  size="icon"
                  className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <Plus className="w-4 h-4" />
                </Button>

                {/* Quick Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">{dish.prepTime}</span>
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{dish.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {hoveredDish === dish.id && (
                  <>
                    <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-300"></div>
                    <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-700"></div>
                  </>
                )}
              </div>

              <CardContent className="p-6">
                {/* Category */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">{dish.category}</span>
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-yellow-400">{dish.rating}</span>
                    <span>({dish.reviews})</span>
                  </div>
                </div>

                {/* Dish Name */}
                <h3
                  className={`font-bold text-lg mb-2 group-hover:bg-gradient-to-r group-hover:${dish.glowColor} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-white`}
                >
                  {dish.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{dish.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {dish.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xl font-bold bg-gradient-to-r ${dish.glowColor} bg-clip-text text-transparent`}
                    >
                      ₹{dish.price}
                    </span>
                    {dish.originalPrice > dish.price && (
                      <span className="text-sm text-gray-500 line-through">₹{dish.originalPrice}</span>
                    )}
                  </div>

                  <Button
                    size="sm"
                    className={`bg-gradient-to-r ${dish.glowColor} hover:shadow-lg transition-all duration-300 text-white rounded-full px-4 font-medium hover:scale-105`}
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>

              {/* Hover Border Effect */}
              {hoveredDish === dish.id && (
                <div
                  className={`absolute inset-0 border-2 bg-gradient-to-r ${dish.glowColor} opacity-30 rounded-lg pointer-events-none animate-pulse`}
                ></div>
              )}
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
