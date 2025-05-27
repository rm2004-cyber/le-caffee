import Image from 'next/image'
import { Button } from "@/components/ui/button"

const featuredItems = [
  {
    id: 1,
    name: 'Classic Espresso',
    description: 'Rich and bold espresso shot, perfect for a quick energy boost',
    price: '$3.50',
    image: '/coffee/espresso.jpg'
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    description: 'Espresso with steamed milk and caramel, topped with foam',
    price: '$4.75',
    image: '/coffee/macchiato.jpg'
  },
  {
    id: 3,
    name: 'Cold Brew',
    description: 'Smooth and refreshing cold brew, steeped for 24 hours',
    price: '$4.25',
    image: '/coffee/coldbrew.jpg'
  }
]

export default function FeaturedSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-3 sm:mb-4">Featured Items</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Discover our most popular coffee selections, crafted with care and premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  quality={85}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold text-base sm:text-lg">{item.price}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{item.description}</p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base py-2">
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button 
            variant="outline" 
            className="border-amber-600 text-amber-600 hover:bg-amber-50 text-sm sm:text-base px-6 py-2"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
} 