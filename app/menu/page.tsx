"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, Plus, Search } from "lucide-react"

const categories = [
  "All",
  "Sushi & Sashimi",
  "Ramen & Noodles",
  "Rice Bowls",
  "Appetizers",
  "Grilled",
  "Desserts",
  "Beverages",
]

const menuItems = [
  {
    id: 1,
    name: "Dragon Veggie Roll",
    description: "Avocado, cucumber, carrot topped with spicy mayo and sesame seeds",
    price: 450,
    image: "/images/dishes/dragon-veggie-roll.jpg",
    category: "Sushi & Sashimi",
    rating: 4.8,
    isPopular: true,
    isSpicy: true,
  },
  {
    id: 2,
    name: "Vegetable Tonkotsu Ramen",
    description: "Rich vegetarian broth with chashu-style tofu, soft-boiled egg, and green onions",
    price: 420,
    image: "/images/dishes/vegetable-ramen.jpg",
    category: "Ramen & Noodles",
    rating: 4.9,
    isPopular: true,
    isSpicy: false,
  },
  {
    id: 3,
    name: "Smoked Tofu Teriyaki Bowl",
    description: "Grilled smoked tofu with teriyaki sauce over steamed rice and vegetables",
    price: 380,
    image: "/images/dishes/tofu-teriyaki-bowl.jpg",
    category: "Rice Bowls",
    rating: 4.7,
    isPopular: false,
    isSpicy: false,
  },
  {
    id: 4,
    name: "Vegetable Gyoza (6 pieces)",
    description: "Pan-fried vegetable dumplings served with ponzu dipping sauce",
    price: 320,
    image: "/images/dishes/vegetable-gyoza.jpg",
    category: "Appetizers",
    rating: 4.6,
    isPopular: true,
    isSpicy: false,
  },
  {
    id: 5,
    name: "Spicy Avocado Roll",
    description: "Fresh avocado with spicy mayo, cucumber, and sesame seeds",
    price: 320,
    image: "/images/dishes/spicy-avocado-roll.jpeg",
    category: "Sushi & Sashimi",
    rating: 4.7,
    isPopular: false,
    isSpicy: true,
  },
  {
    id: 6,
    name: "Paneer Yakitori",
    description: "Grilled paneer skewers with tare sauce and sesame seeds",
    price: 390,
    image: "/images/dishes/paneer-yakitori.jpeg",
    category: "Grilled",
    rating: 4.8,
    isPopular: true,
    isSpicy: false,
  },
  {
    id: 7,
    name: "Vegetable Miso Ramen",
    description: "Fermented soybean paste broth with corn, bamboo shoots, and nori",
    price: 390,
    image: "/images/dishes/vegetable-miso-ramen.jpg",
    category: "Ramen & Noodles",
    rating: 4.8,
    isPopular: false,
    isSpicy: false,
  },
  {
    id: 8,
    name: "Tofu Poke Bowl",
    description: "Fresh tofu, avocado, edamame, and cucumber over sushi rice",
    price: 450,
    image: "/images/dishes/tofu-poke-bowl.jpg",
    category: "Rice Bowls",
    rating: 4.7,
    isPopular: true,
    isSpicy: false,
  },
  {
    id: 9,
    name: "Vegetable Tempura",
    description: "Assorted seasonal vegetables lightly battered and deep-fried, served with tempura sauce",
    price: 280,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=300&fit=crop&crop=center",
    category: "Appetizers",
    rating: 4.5,
    isPopular: false,
    isSpicy: false,
  },
  {
    id: 10,
    name: "Kimchi Stir Fried Rice",
    description: "Spicy Korean kimchi stir-fried with rice, vegetables, and tofu",
    price: 350,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=200&h=300&fit=crop&crop=center",
    category: "Rice Bowls",
    rating: 4.7,
    isPopular: true,
    isSpicy: false,
  },
  {
    id: 11,
    name: "Pad Thai Noodles",
    description: "Classic Thai stir-fried noodles with tofu, peanuts, bean sprouts, and tamarind sauce",
    price: 390,
    image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=200&h=300&fit=crop&crop=center",
    category: "Ramen & Noodles",
    rating: 4.8,
    isPopular: true,
    isSpicy: false,
  },
  {
    id: 12,
    name: "Mochi Ice Cream",
    description: "Sweet Japanese rice cake filled with various ice cream flavors (assorted)",
    price: 190,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=300&fit=crop&crop=center",
    category: "Desserts",
    rating: 4.9,
    isPopular: true,
    isSpicy: false,
  },
  {
    id: 13,
    name: "Vegetable Spring Rolls",
    description: "Crispy fried rolls filled with mixed vegetables, served with sweet chili sauce",
    price: 180,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=200&h=300&fit=crop&crop=center",
    category: "Appetizers",
    rating: 4.6,
    isPopular: false,
    isSpicy: false,
  },
  {
    id: 14,
    name: "Sushi Platter (Veg)",
    description: "Chef's selection of vegetarian sushi rolls and nigiri",
    price: 650,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=300&fit=crop&crop=center",
    category: "Sushi & Sashimi",
    rating: 4.9,
    isPopular: true,
    isSpicy: false,
  },
  {
    id: 15,
    name: "Tofu Katsu Curry",
    description: "Crispy fried tofu cutlet served with rich Japanese curry sauce and rice",
    price: 420,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&h=300&fit=crop&crop=center",
    category: "Rice Bowls",
    rating: 4.7,
    isPopular: false,
    isSpicy: false,
  },
  {
    id: 16,
    name: "Spicy Miso Ramen (Vegetarian)",
    description: "Miso broth with a spicy kick, topped with corn, bamboo shoots, and chili oil",
    price: 450,
    image: "/images/dishes/spicy-miso-ramen.jpg",
    category: "Ramen & Noodles",
    rating: 4.8,
    isPopular: true,
    isSpicy: true,
  },
  {
    id: 17,
    name: "Edamame",
    description: "Steamed green soybeans, lightly salted",
    price: 150,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=300&fit=crop&crop=center",
    category: "Appetizers",
    rating: 4.5,
    isPopular: false,
    isSpicy: false,
  },
  {
    id: 18,
    name: "Mango Sticky Rice",
    description: "Stir fried sweet sticky rice served along side tangy spicy sauce",
    price: 280,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=300&fit=crop&crop=center",
    category: "Desserts",
    rating: 4.9,
    isPopular: true,
    isSpicy: false,
  },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Menu
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our authentic Japanese and Asian dishes, crafted with the finest ingredients
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-black/50 border-gray-700 text-white placeholder:text-gray-400 backdrop-blur-sm h-12 text-base"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 px-6 py-2" 
                  : "border-gray-600 text-gray-300 bg-black/30 hover:bg-gray-800/50 backdrop-blur-sm px-6 py-2"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 overflow-hidden bg-black/60 border-gray-800/50 backdrop-blur-sm hover:bg-black/70 hover:border-gray-700/70">
              <div className="relative">
                <img
                  src={item.image || "/images/dishes/default-dish.jpg"}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.isPopular && <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 text-xs px-2 py-1">Popular</Badge>}
                  {item.isSpicy && <Badge className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 text-xs px-2 py-1">🌶️ Spicy</Badge>}
                </div>
                <Button
                  size="icon"
                  className="absolute top-3 right-3 bg-black/80 hover:bg-black/90 text-white shadow-md border-gray-700 backdrop-blur-sm w-8 h-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs bg-gray-800/80 text-gray-300 border-gray-700/50">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-300 font-medium">{item.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-white mb-2 line-clamp-1">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">₹{item.price}</span>
                  <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 px-4 py-2 text-sm">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No items found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
