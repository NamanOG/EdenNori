import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment:
      "Ordered the Dragon Veggie Roll for the first time and wow! I'm not usually a sushi person but this was amazing. The avocado was perfectly ripe and the spicy mayo had just the right kick. Definitely ordering again!",
    dish: "Dragon Veggie Roll",
    avatar: "/placeholder.svg?height=60&width=60",
    timeAgo: "2 days ago",
  },
  {
    id: 2,
    name: "Arjun Patel",
    location: "Pune",
    rating: 4,
    comment:
      "The ramen was really good, broth was flavorful and not too salty. Only complaint is it took a bit longer than expected to arrive, but the taste made up for it. Will order again for sure.",
    dish: "Quantum Veggie Ramen",
    avatar: "/placeholder.svg?height=60&width=60",
    timeAgo: "1 week ago",
  },
  {
    id: 3,
    name: "Sneha Reddy",
    location: "Delhi",
    rating: 5,
    comment:
      "Best tofu bowl I've had in Delhi! The teriyaki sauce was perfect and everything was fresh. My non-vegetarian friends were actually jealous when they saw my order 😄",
    dish: "Neo Tokyo Tofu Bowl",
    avatar: "/placeholder.svg?height=60&width=60",
    timeAgo: "3 days ago",
  },
  {
    id: 4,
    name: "Rahul Singh",
    location: "Mumbai",
    rating: 5,
    comment:
      "Tried the paneer bao after seeing it trending and it's incredible! The fusion of Indian and Japanese flavors works so well. My new favorite comfort food.",
    dish: "Fusion Burst Paneer Bao",
    avatar: "/placeholder.svg?height=60&width=60",
    timeAgo: "5 days ago",
  },
  {
    id: 5,
    name: "Anita Gupta",
    location: "Delhi",
    rating: 4,
    comment:
      "Good portion size and tasty food. The packaging was excellent - everything arrived hot and fresh. Slightly pricey but worth it for the quality. Quick delivery too!",
    dish: "Cyber Dragon Veggie Roll",
    avatar: "/placeholder.svg?height=60&width=60",
    timeAgo: "1 week ago",
  },
  {
    id: 6,
    name: "Vikram Joshi",
    location: "Pune",
    rating: 5,
    comment:
      "Finally found a place that does vegetarian Japanese food justice! The ramen was authentic and the gyoza were crispy on the outside, soft inside. Highly recommend!",
    dish: "Quantum Veggie Ramen",
    avatar: "/placeholder.svg?height=60&width=60",
    timeAgo: "4 days ago",
  },
]

export function CustomerStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from real food lovers. Here's what they're saying about their EdenNori experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6">
                {/* Header with Quote and Time */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-6 h-6 text-red-500 opacity-50" />
                  <span className="text-xs text-gray-500">{testimonial.timeAgo}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < testimonial.rating 
                          ? "text-yellow-400 fill-current" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">"{testimonial.comment}"</p>

                {/* Dish */}
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                    {testimonial.dish}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.location}</p>
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
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-red-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.3★</div>
              <div className="text-red-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-red-100">Signature Dishes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-red-100">Cities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
