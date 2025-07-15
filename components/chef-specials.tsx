import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChefHat, Clock, Users, Award } from "lucide-react"

const specials = [
  {
    id: 1,
    name: "Chef's Tasting Platter",
    description: "A curated selection of our finest dishes - perfect for sharing or exploring new flavors",
    price: 899,
    serves: "2-3 people",
    time: "25-30 min",
    image: "/placeholder.svg?height=400&width=600",
    items: ["Dragon Roll", "Zen Ramen", "Thai Curry", "Momo Platter", "Dessert"],
  },
  {
    id: 2,
    name: "Fusion Family Feast",
    description: "Best of both worlds - traditional Asian recipes with Indian twists for the whole family",
    price: 1299,
    serves: "4-5 people",
    time: "30-35 min",
    image: "/placeholder.svg?height=400&width=600",
    items: ["Hakka Noodles", "Manchurian", "Fried Rice", "Spring Rolls", "Sweet & Sour"],
  },
]

export function ChefSpecials() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ChefHat className="w-4 h-4 mr-2" />
            Curated by Our Head Chef
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Chef's Special Combos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughtfully crafted combinations that bring together the best of our kitchen
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {specials.map((special) => (
            <Card
              key={special.id}
              className="overflow-hidden shadow-2xl border-0 bg-white group hover:shadow-3xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={special.image || "/placeholder.svg"}
                  alt={special.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-2xl font-bold text-red-600">₹{special.price}</span>
                </div>

                {/* Chef Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white rounded-full px-3 py-1 text-sm font-medium">
                  Chef's Choice
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
                  {special.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{special.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-5 h-5 text-red-500" />
                    <span className="font-medium">{special.serves}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-5 h-5 text-red-500" />
                    <span className="font-medium">{special.time}</span>
                  </div>
                </div>

                {/* Items Included */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {special.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full text-lg font-medium">
                  Order This Combo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Chef's Promise</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Every dish is prepared with the same care and attention as if we were cooking for our own family. Fresh
              ingredients, authentic techniques, and lots of love in every bite.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>No Preservatives</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Made to Order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
