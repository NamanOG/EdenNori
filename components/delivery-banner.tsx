import { Button } from "@/components/ui/button"
import { Truck, Clock, Shield, Star } from "lucide-react"

export function DeliveryBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Fast & Reliable Delivery</h2>
            <p className="text-lg text-red-100">
              Get your favorite Asian dishes delivered hot and fresh. We partner with the best restaurants to ensure
              quality and speed in every order.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">25-30 Minutes</p>
                  <p className="text-sm text-red-100">Average delivery time</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Safe Delivery</p>
                  <p className="text-sm text-red-100">Contactless options</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Free Delivery</p>
                  <p className="text-sm text-red-100">On orders over $30</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">4.9 Rating</p>
                  <p className="text-sm text-red-100">Customer satisfaction</p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Track Your Order
            </Button>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Delivery service"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
