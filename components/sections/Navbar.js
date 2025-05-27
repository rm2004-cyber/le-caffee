'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MapPin, ShoppingCart } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Menu', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-amber-900 text-white py-1.5 sm:py-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-end items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="tel:+16463706275" className="hover:text-amber-200 transition-colors duration-300 whitespace-nowrap">
                +1 (646) 370-6275
              </a>
              <a href="mailto:info@lecafecoffee.com" className="hover:text-amber-200 transition-colors duration-300 hidden sm:inline">
                info@lecafecoffee.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <span className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-900 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              LC
            </div>
            <span className="text-xl sm:text-2xl font-bold text-amber-900">Le Cafe Coffee</span>
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <span
                key={link.name}
                className="text-gray-700 hover:text-amber-900 transition-colors duration-300 font-medium cursor-pointer text-sm lg:text-base"
              >
                {link.name}
              </span>
            ))}
            <span className="flex items-center space-x-1 text-gray-700 hover:text-amber-900 transition-colors duration-300 font-medium cursor-pointer text-sm lg:text-base">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>Location</span>
            </span>
            <span className="flex items-center space-x-1 bg-amber-900 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-md hover:bg-amber-800 transition-colors duration-300 font-medium cursor-pointer text-sm lg:text-base">
              <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>Order Online</span>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-amber-900 transition-colors duration-300 p-1"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <span
                key={link.name}
                className="block px-3 py-2 text-gray-700 hover:text-amber-900 hover:bg-amber-50 transition-colors duration-300 font-medium cursor-pointer text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </span>
            ))}
            <span className="w-full flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-amber-900 hover:bg-amber-50 transition-colors duration-300 font-medium cursor-pointer text-base">
              <MapPin className="w-5 h-5" />
              <span>Location</span>
            </span>
            <span className="block px-3 py-2 bg-amber-900 text-white hover:bg-amber-800 transition-colors duration-300 font-medium cursor-pointer text-base">
              <div className="flex items-center space-x-1">
                <ShoppingCart className="w-5 h-5" />
                <span>Order Online</span>
              </div>
            </span>
            <div className="px-3 py-2 border-t border-gray-100">
              <a href="mailto:info@lecafecoffee.com" className="block text-gray-700 hover:text-amber-900 transition-colors duration-300 font-medium text-base">
                info@lecafecoffee.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 