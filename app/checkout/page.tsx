"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { processPayment } from "@/actions/payment"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

export default function CheckoutPage() {
  const [state, action, isPending] = useActionState(processPayment, null)

  const orderSummary = {
    items: [
      { name: "Dragon Veggie Roll", price: 450, quantity: 1 },
      { name: "Zen Garden Ramen", price: 380, quantity: 1 },
    ],
    subtotal: 830,
    deliveryFee: 50,
    total: 880,
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Secure Checkout
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete your order with our secure payment gateway.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Order Summary */}
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 shadow-lg shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="text-white text-3xl">Your Order</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {orderSummary.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-gray-300">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 space-y-3">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Subtotal</span>
                  <span>₹{orderSummary.subtotal}</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Delivery Fee</span>
                  <span>₹{orderSummary.deliveryFee}</span>
                </div>
                <div className="flex justify-between items-center text-white font-bold text-xl pt-2">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    ₹{orderSummary.total}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 shadow-lg shadow-pink-500/10">
            <CardHeader>
              <CardTitle className="text-white text-3xl">Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form action={action} className="space-y-6">
                <div>
                  <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-300 mb-2">
                    Cardholder Name
                  </label>
                  <Input
                    id="cardHolderName"
                    name="cardHolderName"
                    placeholder="John Doe"
                    className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-2">
                    Card Number
                  </label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    placeholder="**** **** **** ****"
                    maxLength={16}
                    className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300 mb-2">
                      Expiry Date (MM/YY)
                    </label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-300 mb-2">
                      CVV
                    </label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="text"
                      placeholder="***"
                      maxLength={3}
                      className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing Payment...
                    </>
                  ) : (
                    "Pay Now"
                  )}
                </Button>
              </form>

              {state && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center flex items-center justify-center space-x-2 ${
                    state.success
                      ? "bg-green-900/30 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/20"
                      : "bg-red-900/30 text-red-400 border border-red-500/30 shadow-lg shadow-red-500/20"
                  }`}
                >
                  {state.success ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                  <p>{state.message}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
