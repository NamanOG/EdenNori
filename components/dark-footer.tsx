import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Leaf,
  Zap,
  Sparkles,
  Github,
  Code,
} from "lucide-react"

export function DarkFooter() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/brand_logo.png" alt="EdenNori Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  EdenNori
                </h3>
                <p className="text-gray-400 text-sm">Japanese Cuisine with Veggie Twist</p>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Bringing authentic Asian flavors to Raipur with fresh ingredients, vibrant presentation, and modern
              convenience. Every dish crafted with passion in our cloud kitchen.
            </p>

            <div className="flex items-center space-x-2">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                100% Pure Vegetarian • FSSAI Certified
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>Raipur, Chhattisgarh 492001</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+91 93xxx 8xxx5</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>hello@edennori.in</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-orange-400" />
                <span>11:00 AM - 11:00 PM (Daily)</span>
              </div>
            </div>

            <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Kitchen Live Now
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Quick Access
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/menu"
                  className="text-gray-300 hover:text-pink-400 transition-colors flex items-center group"
                >
                  <Sparkles className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Browse Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/track"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                >
                  <Zap className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2025 EdenNori. Crafted with passion in Raipur, Chhattisgarh.</div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>

            {/* Chef Credit */}
            <div className="flex items-center space-x-3">
              <div className="text-gray-400 text-sm">
                Crafted by{" "}
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Chef Naman
                </span>
              </div>
              <Link
                href="https://github.com/NamanOG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Code className="w-4 h-4 group-hover:animate-pulse" />
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
