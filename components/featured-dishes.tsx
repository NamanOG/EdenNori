import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredDishes = [
  {
    id: 1,
    name: "Dragon Veggie Roll",
    image: "/placeholder.svg?height=200&width=300",
    price: 450, // Updated price
    rating: 4.8,
    category: "Sushi",
    isPopular: true,
  },
  {
    id: 2,
    name: "Tofu Teriyaki Bowl",
    image: "/placeholder.svg?height=200&width=300",
    price: 380, // Updated price
    rating: 4.7,
    category: "Rice Bowls",
    isPopular: false,
  },
  {
    id: 3,
    name: "Vegetable Miso Ramen",
    image: "/placeholder.svg?height=200&width=300",
    price: 420, // Updated price
    rating: 4.9,
    category: "Ramen",
    isPopular: true,
  },
  {
    id: 4,
    name: "Vegetable Tempura Udon",
    image: "/placeholder.svg?height=200&width=300",
    price: 390, // Updated price
    rating: 4.6,
    category: "Noodles",
    isPopular: false,
  },
  {
    id: 5,
    name: "Paneer Yakitori",
    image: "/placeholder.svg?height=200&width=300",
    price: 320, // Updated price
    rating: 4.8,
    category: "Grilled",
    isPopular: true,
  },
  {
    id: 6,
    name: "Tofu Poke Bowl",
    image: "/placeholder.svg?height=200&width=300",
    price: 450, // Updated price
    rating: 4.7,
    category: "Poke",
    isPopular: false,
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Signature Dishes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with authentic ingredients and traditional techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {dish.isPopular && <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-600">Popular</Badge>}
                <Button
                  size="icon"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 shadow-md"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {dish.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{dish.rating}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{dish.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-red-600">₹{dish.price}</span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
