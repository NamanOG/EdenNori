import { Leaf, Heart, Sparkles, Zap } from "lucide-react"

const ingredients = [
  {
    name: "Organic Vegetables",
    description: "Sourced from certified organic farms with guaranteed freshness",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=200&fit=crop&crop=center",
    icon: Leaf,
    color: "from-green-400 to-emerald-400",
    glowColor: "shadow-green-400/30",
  },
  {
    name: "Premium Tofu",
    description: "Handmade fresh daily with non-GMO soybeans and traditional methods",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop&crop=center",
    icon: Heart,
    color: "from-pink-400 to-red-400",
    glowColor: "shadow-pink-400/30",
  },
  {
    name: "Authentic Spices",
    description: "Imported directly from Japan and Thailand with premium quality",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop&crop=center",
    icon: Sparkles,
    color: "from-orange-400 to-yellow-400",
    glowColor: "shadow-orange-400/30",
  },
  {
    name: "Fresh Herbs",
    description: "Delivered daily from local hydroponic farms with maximum nutrition",
    image: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=200&h=200&fit=crop&crop=center",
    icon: Zap,
    color: "from-cyan-400 to-blue-400",
    glowColor: "shadow-cyan-400/30",
  },
]

export function NeonIngredients() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Premium
            </span>
            <span className="text-white"> Ingredients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We believe great food starts with ingredients that shine with freshness and quality, sourced with care for
            our cloud kitchen
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
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110"
                />

                {/* Glowing ring */}
                <div
                  className={`absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${ingredient.color} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}
                ></div>

                {/* Icon badge */}
                <div
                  className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br ${ingredient.color} rounded-full flex items-center justify-center shadow-lg ${ingredient.glowColor} group-hover:scale-125 transition-transform duration-300`}
                >
                  <ingredient.icon className="w-6 h-6 text-black" />
                </div>

                {/* Floating particles */}
                <div className="absolute top-2 right-8 w-1 h-1 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-8 left-2 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-100"></div>
              </div>

              <h3
                className={`text-lg font-bold mb-2 bg-gradient-to-r ${ingredient.color} bg-clip-text text-transparent`}
              >
                {ingredient.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{ingredient.description}</p>
            </div>
          ))}
        </div>

        {/* Quality Promise */}
        <div className="bg-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Quality Promise
                </span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">No Artificial Additives</h4>
                    <p className="text-gray-400 text-sm">
                      Everything is made fresh daily without any artificial additives - just natural goodness
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Locally Sourced</h4>
                    <p className="text-gray-400 text-sm">
                      Supporting local farmers while reducing our carbon footprint with efficient sourcing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">FSSAI Certified</h4>
                    <p className="text-gray-400 text-sm">
                      FSSAI certified cloud kitchen with the highest hygiene and safety standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center"
                alt="Fresh ingredients preparation"
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />

              {/* Glowing border */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl animate-pulse"></div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl p-3 shadow-lg shadow-green-400/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">100%</div>
                  <div className="text-xs text-black/80">Fresh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
