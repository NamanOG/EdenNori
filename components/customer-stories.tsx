import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment:
      "The Dragon Veggie Roll is absolutely divine! As a vegetarian, I was skeptical about sushi, but EdenNori changed my mind completely. Fresh, flavorful, and beautifully presented.",
    dish: "Dragon Veggie Roll",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Arjun Patel",
    location: "Pune",
    rating: 5,
    comment:
      "Their Zen Garden Ramen is comfort food at its finest. The broth is rich and the vegetables are perfectly cooked. It's become my go-to order for a cozy evening.",
    dish: "Zen Garden Ramen",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Sneha Reddy",
    location: "Delhi",
    rating: 5,
    comment:
      "The fusion dishes are incredible! The Mumbai Hakka Noodles perfectly blend Indian and Chinese flavors. You can taste the authenticity in every bite.",
    dish: "Mumbai Hakka Noodles",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function CustomerStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Stories from Our Kitchen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every dish tells a story, and every customer becomes part of our family. Here's what they have to say about
            their EdenNori experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-red-500 opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>

                {/* Dish */}
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium">
                    {testimonial.dish}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-red-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-red-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-red-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-red-100">Dishes Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-red-100">Cities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
