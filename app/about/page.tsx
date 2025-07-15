import { Sparkles, Leaf, Award, ChefHat, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Story: The EdenNori Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the vision behind Raipur's pioneering pure vegetarian cloud kitchen, where tradition meets
            technology.
          </p>
        </div>

        {/* Section 1: The Vision */}
        <section className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              A Culinary Revolution in the Cloud
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              EdenNori was born from a simple yet ambitious idea: to redefine the Asian dining experience in India. We
              envisioned a kitchen without walls, powered by innovation, delivering authentic and vibrant vegetarian
              dishes directly to your home. Our journey began in Raipur, Chhattisgarh, with a commitment to quality,
              hygiene, and unparalleled flavor.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe that great food should be accessible, fresh, and exciting. By embracing the cloud kitchen
              model, we eliminate traditional overheads, allowing us to focus entirely on sourcing the finest
              ingredients and perfecting every recipe.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=400&fit=crop&crop=center"
              alt="Cloud kitchen concept"
              className="rounded-3xl shadow-2xl shadow-purple-500/20 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
          </div>
        </section>

        {/* Section 2: Our Philosophy - Pure Vegetarian & Authentic */}
        <section className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a579b569e791?w=600&h=400&fit=crop&crop=center"
              alt="Fresh vegetarian ingredients"
              className="rounded-3xl shadow-2xl shadow-green-500/20 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-30 animate-pulse delay-500"></div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Pure Vegetarian, Uncompromised Flavor
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At EdenNori, we are proud to be a 100% pure vegetarian kitchen. We meticulously source the freshest,
              high-quality produce, ensuring every dish is not only delicious but also wholesome and ethically prepared.
              Our chefs are masters of Asian cuisine, bringing years of experience and a deep understanding of
              traditional techniques to every plate.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the delicate art of Japanese sushi to the bold spices of Indo-Asian fusion, we celebrate the rich
              tapestry of Asian flavors, all crafted without compromise to our vegetarian principles.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-green-400">
                <Leaf className="w-6 h-6" />
                <span className="font-semibold">100% Vegetarian</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Award className="w-6 h-6" />
                <span className="font-semibold">FSSAI Certified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Technology & Precision */}
        <section className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Precision Cooking, Seamless Delivery
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our cloud kitchen is a hub of culinary innovation, where cutting-edge technology meets traditional
              cooking. We leverage smart kitchen analytics, real-time inventory management, and optimized logistics to
              ensure every order is prepared with precision and delivered with speed.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the moment you place your order to the instant it arrives at your doorstep, our integrated system
              ensures freshness, temperature control, and efficiency. This allows us to maintain consistent quality and
              provide a truly seamless experience.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-purple-400">
                <Sparkles className="w-6 h-6" />
                <span className="font-semibold">AI-Powered Recommendations</span>
              </div>
              <div className="flex items-center space-x-2 text-pink-400">
                <ChefHat className="w-6 h-6" />
                <span className="font-semibold">Expert Chefs</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621852640035-041491259233?w=600&h=400&fit=crop&crop=center"
              alt="Kitchen technology"
              className="rounded-3xl shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-30 animate-pulse delay-1000"></div>
          </div>
        </section>

        {/* Section 4: Our Commitment & Location */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
            Serving Raipur with Passion
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Our commitment extends beyond just food; it's about creating a delightful experience for every customer.
            We're proud to be a part of the Raipur community, bringing world-class Asian vegetarian cuisine to your
            doorstep.
          </p>
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 shadow-lg shadow-orange-500/10 inline-block p-8">
            <CardContent className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-8 h-8 text-orange-400" />
              <div>
                <p className="text-xl font-semibold">Cloud Kitchen Hub</p>
                <p className="text-lg">Raipur, Chhattisgarh 492001</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
