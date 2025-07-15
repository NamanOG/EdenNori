import { Card } from "@/components/ui/card"

const categories = [
  {
    id: "japanese",
    name: "Japanese",
    description: "Traditional sushi, ramen & more",
    image: "/placeholder.svg?height=200&width=300",
    emoji: "🍣",
    color: "from-red-500 to-pink-500",
    dishes: "25+ dishes",
  },
  {
    id: "indian-asian",
    name: "Indo-Asian",
    description: "Fusion of Indian & Asian flavors",
    image: "/placeholder.svg?height=200&width=300",
    emoji: "🍛",
    color: "from-orange-500 to-yellow-500",
    dishes: "20+ dishes",
  },
  {
    id: "chinese",
    name: "Chinese",
    description: "Authentic vegetarian Chinese",
    image: "/placeholder.svg?height=200&width=300",
    emoji: "🥢",
    color: "from-green-500 to-teal-500",
    dishes: "18+ dishes",
  },
  {
    id: "thai",
    name: "Thai",
    description: "Aromatic curries & stir-fries",
    image: "/placeholder.svg?height=200&width=300",
    emoji: "🌶️",
    color: "from-purple-500 to-indigo-500",
    dishes: "15+ dishes",
  },
]

export function MenuCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Explore Our Kitchen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From traditional Japanese to innovative Indo-Asian fusion, discover flavors that tell a story
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {category.dishes}
                </div>

                {/* Emoji */}
                <div className="absolute top-4 right-4 text-3xl">{category.emoji}</div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't decide? Let our chef surprise you!</p>
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all">
            Chef's Choice Combo
          </button>
        </div>
      </div>
    </section>
  )
}
