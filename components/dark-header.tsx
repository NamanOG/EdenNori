"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Clock, MapPin, Zap } from "lucide-react"

export function DarkHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-black to-pink-900 border-b border-pink-500/20 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Raipur, Chhattisgarh</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-green-400 font-medium">Kitchen Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-purple-500/30 shadow-lg shadow-purple-500/10"
            : "bg-black/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img src="/images/brand_logo.png" alt="EdenNori Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  EdenNori
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Japanese Cuisine with Veggie Twist</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-semibold transition-colors relative group ${
                  pathname === "/" 
                    ? "text-pink-400" 
                    : "text-gray-300 hover:text-pink-400"
                }`}
              >
                Home
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 ${
                  pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </Link>
              <Link
                href="/menu"
                className={`font-medium transition-colors relative group ${
                  pathname === "/menu" 
                    ? "text-cyan-400" 
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                Menu
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                  pathname === "/menu" ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-colors relative group ${
                  pathname === "/about" 
                    ? "text-green-400" 
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                Our Story
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 ${
                  pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </Link>
              <Link
                href="/contact"
                className={`font-medium transition-colors relative group ${
                  pathname === "/contact" 
                    ? "text-orange-400" 
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                Contact
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 ${
                  pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                <Link href="/checkout">
                  <Zap className="w-4 h-4 mr-2" />
                  Order Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-purple-500/20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-purple-500/30 bg-black/95 backdrop-blur-xl py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className={`px-4 py-2 font-semibold ${
                    pathname === "/" ? "text-pink-400" : "text-gray-300 hover:text-pink-400"
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/menu" 
                  className={`px-4 py-2 ${
                    pathname === "/menu" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  Menu
                </Link>
                <Link 
                  href="/about" 
                  className={`px-4 py-2 ${
                    pathname === "/about" ? "text-green-400 font-semibold" : "text-gray-300 hover:text-green-400"
                  }`}
                >
                  Our Story
                </Link>
                <Link 
                  href="/contact" 
                  className={`px-4 py-2 ${
                    pathname === "/contact" ? "text-orange-400 font-semibold" : "text-gray-300 hover:text-orange-400"
                  }`}
                >
                  Contact
                </Link>
                <div className="px-4 pt-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full"
                  >
                    <Link href="/checkout">Order Now</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
