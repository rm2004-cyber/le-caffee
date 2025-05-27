import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Coffee, Clock, Award } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/coffee-shop-interior.jpg"
              alt="Le Cafe Coffee Shop Interior"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              quality={90}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-3 sm:mb-4">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Welcome to Le Cafe Coffee, where passion meets perfection in every cup. 
                We're dedicated to serving the finest coffee in a warm, inviting atmosphere 
                that feels like home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-amber-50/50 rounded-lg">
                <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Premium Beans</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Sourced from the world's finest coffee regions
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-amber-50/50 rounded-lg">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Daily Fresh</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Freshly roasted and ground daily
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-amber-50/50 rounded-lg">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Expert Baristas</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Trained professionals crafting your perfect cup
                </p>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base px-6 py-2">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 