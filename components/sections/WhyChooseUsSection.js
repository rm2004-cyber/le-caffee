import { Coffee, Leaf, Store, Users } from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: "No Compromise on Quality",
    description: "We maintain the highest standards in coffee selection, from bean grinding to brewing. Our baristas are extensively trained with state-of-the-art equipment to ensure every cup is perfect."
  },
  {
    icon: Leaf,
    title: "Environmentally Friendly",
    description: "We serve only Fair Trade coffee®, use recycled materials, and ensure all waste is recycled. Our coffee grounds are composted, making us environmentally conscious."
  },
  {
    icon: Store,
    title: "Iconic Locations",
    description: "Located in some of the most iconic places in New York City, our stores feature award-winning design and provide an outstanding coffee experience."
  },
  {
    icon: Users,
    title: "Fresh Daily",
    description: "All our pastries and sandwiches are prepared daily using the finest organic ingredients, ensuring the highest quality and freshness."
  }
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-500 hover:scale-[1.02]">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-3 sm:mb-4 hover:text-amber-800 transition-colors duration-300">
            Why Choose Le Cafe Coffee?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 hover:text-gray-700 transition-colors duration-300">
            We go beyond just serving coffee - we create experiences that bring people together
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg 
                hover:shadow-2xl hover:bg-amber-50/50 transition-all duration-300 
                transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 
                    group-hover:text-amber-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed 
                    group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <blockquote className="text-base sm:text-lg md:text-xl italic text-gray-700 max-w-3xl mx-auto 
            hover:text-gray-800 transition-colors duration-300 px-4">
            "Do not wait for life. Do not long for it. Be aware always and at every moment that the miracle is in the here and now."
            <footer className="mt-3 sm:mt-4 text-amber-900 font-semibold text-sm sm:text-base
              hover:text-amber-800 transition-colors duration-300">
              - Marcel Proust
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
} 