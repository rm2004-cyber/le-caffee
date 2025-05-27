import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-12 sm:py-16 md:py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero-coffee.jpg"
            alt="Le Cafe Coffee Shop"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Experience the Perfect Cup at Le Cafe
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto md:mx-0">
              Your favorite coffee shop in the heart of New York City
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 text-base sm:text-lg">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-base sm:text-lg">
                View Menu
              </Button>
            </div>
          </div>

          {/* Right Column - Info Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl max-w-md mx-auto md:mx-0 w-full">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Location</h3>
                  <p className="text-gray-600 text-sm sm:text-base">New York, NY</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Hours</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Open Daily: 7:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Contact</h3>
                  <a href="tel:+16463706275" className="text-amber-600 hover:text-amber-700 text-sm sm:text-base">
                    +1 (646) 370-6275
                  </a>
                </div>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">Follow Us</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://www.instagram.com/lecafecoffee" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-amber-600 text-sm sm:text-base transition-colors duration-300">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/lecafecoffee" target="_blank" rel="noopener noreferrer"
                     className="text-gray-600 hover:text-amber-600 text-sm sm:text-base transition-colors duration-300">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 