import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Le Café Coffee is one of the best discoveries I've made on my way to work in the morning. Now I go there every day during my coffee break and each time it brings me a moment of calm and serenity.",
    author: "Milana",
    role: "Designer",
    rating: 5
  },
  {
    id: 2,
    quote: "I love going to Le Café Coffee, the quality of their coffees, the professionalism and friendliness of their baristas make this an unforgettable moment.",
    author: "Natacha Tannous",
    role: "Regular Customer",
    rating: 5
  },
  {
    id: 3,
    quote: "When I go to Le Café Coffee, I know that my coffee will be good and served quickly so that I am on time for my next meeting. I really appreciate that.",
    author: "Felix",
    role: "Hedge Fund Manager",
    rating: 5
  },
  {
    id: 4,
    quote: "When I drink coffee, the taste and quality are as important as the origin of the beans. When I go to Le Café Coffee, I know that my coffee has been produced in an ecologically responsible way.",
    author: "Lin",
    role: "Tech Start-up Founder",
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-500 hover:scale-[1.02]">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-3 sm:mb-4 
            hover:text-amber-800 transition-colors duration-300">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 
            hover:text-gray-700 transition-colors duration-300">
            Join our community of coffee lovers who have found their perfect cup at Le Cafe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group bg-amber-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg 
                hover:shadow-2xl hover:bg-amber-100/50 transition-all duration-300 
                transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-current 
                      transform transition-all duration-300 group-hover:scale-110 
                      group-hover:text-amber-600" 
                  />
                ))}
              </div>
              <blockquote className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 
                group-hover:text-gray-800 transition-colors duration-300">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-amber-200 rounded-full 
                  flex items-center justify-center text-amber-900 font-bold text-sm sm:text-base md:text-lg
                  transform transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-300">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base 
                    group-hover:text-amber-800 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 
                    group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 text-center transform transition-all duration-500 hover:scale-[1.02]">
          <div className="inline-block bg-amber-100 rounded-full px-4 sm:px-6 py-2 sm:py-3
            hover:bg-amber-200 transition-colors duration-300 cursor-pointer">
            <p className="text-amber-900 font-semibold text-xs sm:text-sm md:text-base 
              hover:text-amber-800 transition-colors duration-300">
              Great Days Start With Great Coffee
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 