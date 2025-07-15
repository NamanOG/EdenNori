import { Leaf, Truck, Shield, Heart } from "lucide-react"

const ingredients = [
  {
    name: "Organic Vegetables",
    description: "Sourced directly from certified organic farms",
    image: "/placeholder.svg?height=200&width=200",
    icon: Leaf,
    color: "green",
  },
  {
    name: "Premium Tofu",
    description: "Handmade fresh daily with non-GMO soybeans",
    image: "/placeholder.svg?height=200&width=200",
    icon: Heart,
    color: "red",
  },
  {
    name: "Authentic Spices",
    description: "Imported directly from Japan and Thailand",
    image: "/placeholder.svg?height=200&width=200",
    icon: Shield,
    color: "orange",
  },
  {
    name: "Farm Fresh Herbs",
    description: "Delivered daily from local hydroponic farms",
    image: "/placeholder.svg?height=200&width=200",
    icon: Truck,
    color: "blue",
  },
]

export function FreshIngredients() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Fresh Ingredients, Every Day
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe great food starts with great ingredients. That's why we source only the finest, freshest produce
            for our kitchen.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={ingredient.image || "/placeholder.svg"}
                  alt={ingredient.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div
                  className={`absolute -bottom-2 -right-2 w-12 h-12 bg-${ingredient.color}-100 rounded-full flex items-center justify-center shadow-lg`}
                >
                  <ingredient.icon className={`w-6 h-6 text-${ingredient.color}-600`} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{ingredient.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{ingredient.description}</p>
            </div>
          ))}
        </div>

        {/* Quality Promise */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Our Quality Promise
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No Artificial Preservatives</h4>
                    <p className="text-gray-600 text-sm">
                      Everything is made fresh daily without any artificial additives
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Locally Sourced</h4>
                    <p className="text-gray-600 text-sm">Supporting local farmers and reducing our carbon footprint</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hygiene Certified</h4>
                    <p className="text-gray-600 text-sm">FSSAI certified kitchen with highest hygiene standards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Fresh ingredients preparation"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-xs text-gray-600">Fresh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
