import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Sparkles } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment:
      "The Neon Dragon Roll is absolutely mind-blowing! The presentation is like nothing I've ever seen - it literally glows on the plate. As a vegetarian, this place has redefined what Asian cuisine can be.",
    dish: "Neon Dragon Roll",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    glowColor: "from-pink-400 to-purple-400",
  },
  {
    id: 2,
    name: "Arjun Patel",
    location: "Pune",
    rating: 5,
    comment:
      "Their Cyber Zen Ramen is pure art! The broth has this incredible depth and the whole experience feels like dining in the future. The neon aesthetic makes every meal feel special.",
    dish: "Cyber Zen Ramen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    glowColor: "from-cyan-400 to-blue-400",
  },
  {
    id: 3,
    name: "Sneha Reddy",
    location: "Delhi",
    rating: 5,
    comment:
      "The Electric Hakka Noodles are insane! Perfect fusion of Indian and Chinese flavors with a presentation that's Instagram gold. Every bite is an explosion of taste and color.",
    dish: "Electric Hakka Noodles",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    glowColor: "from-orange-400 to-red-400",
  },
]

export function DarkTestimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Glowing Reviews
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Electric
            </span>
            <span className="text-white"> Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every dish tells a story, and every customer becomes part of our neon family. Here's what they're saying
            about their electrifying experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-0 bg-gray-900/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote
                    className={`w-8 h-8 bg-gradient-to-r ${testimonial.glowColor} bg-clip-text text-transparent opacity-70`}
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>

                {/* Dish */}
                <div className="mb-4">
                  <span
                    className={`bg-gradient-to-r ${testimonial.glowColor} text-black text-sm px-3 py-1 rounded-full font-medium shadow-lg`}
                  >
                    {testimonial.dish}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.glowColor} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`}
                    ></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                15,000+
              </div>
              <div className="text-gray-300">Neon Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                4.9★
              </div>
              <div className="text-gray-300">Electric Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-300">Glowing Dishes</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-gray-300">Neon Cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
