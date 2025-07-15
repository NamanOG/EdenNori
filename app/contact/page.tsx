"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, AlertTriangle, HelpCircle, Star, Heart, Zap } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [queryType, setQueryType] = useState("")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-black/60 border-gray-800/50 backdrop-blur-sm hover:border-gray-700/70 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-orange-400 group-hover:animate-pulse" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form 
                action="https://docs.google.com/forms/d/e/1FAIpQLSfOJLErhDv83-CZR1D9yCdkq9OoK4zvoEQOW2GpVsGuKIarWg/formResponse" 
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <Input 
                    id="name" 
                    name="entry.773351648"
                    placeholder="Enter your name" 
                    required
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400 transition-all duration-300 hover:border-gray-600"
                  />
                </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <Input 
                    id="email" 
                    name="entry.765864875"
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400 transition-all duration-300 hover:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    name="entry.748816698"
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400 transition-all duration-300 hover:border-gray-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="queryType" className="block text-sm font-medium text-gray-300 mb-2">
                  Query Type <span className="text-red-400">*</span>
                </label>
                <Select value={queryType} onValueChange={setQueryType} required>
                  <SelectTrigger className="bg-black/50 border-gray-700 text-white focus:border-orange-400 transition-all duration-300 hover:border-gray-600">
                    <SelectValue placeholder="Select the type of your query" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-gray-700 text-white backdrop-blur-sm">
                    <SelectItem value="General Inquiry" className="hover:bg-orange-500/20 focus:bg-orange-500/20">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-blue-400" />
                        General Inquiry
                      </div>
                    </SelectItem>
                    <SelectItem value="Complaint" className="hover:bg-red-500/20 focus:bg-red-500/20">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        Complaint
                      </div>
                    </SelectItem>
                    <SelectItem value="Technical Support" className="hover:bg-cyan-500/20 focus:bg-cyan-500/20">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-cyan-400" />
                        Technical Support
                      </div>
                    </SelectItem>
                    <SelectItem value="Feedback & Suggestions" className="hover:bg-green-500/20 focus:bg-green-500/20">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        Feedback & Suggestions
                      </div>
                    </SelectItem>
                    <SelectItem value="Partnership Opportunity" className="hover:bg-purple-500/20 focus:bg-purple-500/20">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-pink-400" />
                        Partnership Opportunity
                      </div>
                    </SelectItem>
                    <SelectItem value="Catering Services" className="hover:bg-orange-500/20 focus:bg-orange-500/20">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-orange-400" />
                        Catering Services
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                {/* Hidden input for form submission */}
                <input type="hidden" name="entry.1840788589" value={queryType} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <Textarea 
                  id="message" 
                  name="entry.1713334842"
                  placeholder="Tell us how we can help you..." 
                  rows={6} 
                  required
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400 resize-none transition-all duration-300 hover:border-gray-600"
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 py-3 text-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25 group">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Send Message
              </Button>
            </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-black/60 border-gray-800/50 backdrop-blur-sm hover:bg-black/70 hover:border-orange-500/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-orange-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">Visit Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                      123 Sakura Street
                      <br />
                      Raipur, Chhattisgarh 492001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-gray-800/50 backdrop-blur-sm hover:bg-black/70 hover:border-cyan-500/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-cyan-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Call Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Main: +91 98765 43210
                      <br />
                      Support: +91 98765 43211
                      <br />
                      Orders: +91 98765 43212
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-gray-800/50 backdrop-blur-sm hover:bg-black/70 hover:border-pink-500/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-pink-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">Email Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                      General: info@edennori.com
                      <br />
                      Support: support@edennori.com
                      <br />
                      Orders: orders@edennori.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-gray-800/50 backdrop-blur-sm hover:bg-black/70 hover:border-green-500/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-green-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-green-400 transition-colors duration-300">Business Hours</h3>
                    <div className="text-gray-300 space-y-1 leading-relaxed">
                      <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 border border-orange-500/20 rounded-2xl p-6 backdrop-blur-sm animate-pulse">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Quick Response Promise</h4>
                <p className="text-gray-300 text-sm">
                  We'll get back to you within <span className="text-orange-400 font-semibold">24 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
