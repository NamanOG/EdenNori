import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChefHat, Clock, Users, Award, Zap, Sparkles } from "lucide-react"

const specials = [
  {
    id: 1,
    name: "Chef's Tasting Platter (Vegetarian)",
    description: "A curated selection of our finest vegetarian dishes - perfect for exploring new flavors and sharing",
    price: 899,
    serves: "2-3 people",
    time: "25-30 min",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=center",
    items: ["Dragon Veggie Roll", "Zen Garden Ramen", "Thai Basil Curry", "Vegetable Momos", "Mango Sticky Rice"],
    glowColor: "from-pink-500 to-purple-500",
  },
  {
    id: 2,
    name: "Family Fusion Feast (Vegetarian)",
    description:
      "Best of both worlds - traditional Asian recipes with Indian twists for the whole family, all vegetarian",
    price: 1299,
    serves: "4-5 people",
    time: "30-35 min",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center",
    items: ["Mumbai Hakka Noodles", "Vegetable Manchurian", "Schezwan Fried Rice", "Spring Rolls", "Sweet & Sour"],
    glowColor: "from-orange-500 to-red-500",
  },
]

export function GlowingSpecials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <ChefHat className="w-4 h-4 mr-2" />
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Curated by Our Head Chef
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Special
            </span>
            <span className="text-white"> Combos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thoughtfully crafted combinations that bring together the best flavors from our cloud kitchen
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {specials.map((special) => (
            <Card
              key={special.id}
              className="overflow-hidden border-0 bg-gray-900/50 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={special.image || "/placeholder.svg"}
                  alt={special.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Glowing effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${special.glowColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                {/* Price Badge */}
                <div
                  className={`absolute top-4 right-4 bg-gradient-to-r ${special.glowColor} rounded-full px-4 py-2 shadow-lg`}
                >
                  <span className="text-2xl font-bold text-white">₹{special.price}</span>
                </div>

                {/* Chef Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xl border border-purple-500/30 text-purple-400 rounded-full px-3 py-1 text-sm font-medium">
                  <Zap className="w-3 h-3 inline mr-1" />
                  Chef Special
                </div>

                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-100"></div>
              </div>

              <CardContent className="p-8">
                <h3
                  className={`text-3xl font-bold mb-3 bg-gradient-to-r ${special.glowColor} bg-clip-text text-transparent`}
                >
                  {special.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{special.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <div
                      className={`w-8 h-8 bg-gradient-to-br ${special.glowColor} rounded-full flex items-center justify-center`}
                    >
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{special.serves}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <div
                      className={`w-8 h-8 bg-gradient-to-br ${special.glowColor} rounded-full flex items-center justify-center`}
                    >
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{special.time}</span>
                  </div>
                </div>

                {/* Items Included */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {special.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${special.glowColor} rounded-full`}></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  className={`w-full bg-gradient-to-r ${special.glowColor} hover:shadow-lg transition-all duration-300 text-white py-3 rounded-full text-lg font-medium hover:scale-105`}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Order This Combo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mr-3">
                <Award className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Chef's Promise
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Every dish is crafted with precision and passion in our cloud kitchen. Fresh ingredients, authentic
              techniques, and a whole lot of love in every bite.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span>No Preservatives</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                <span>Made to Order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
