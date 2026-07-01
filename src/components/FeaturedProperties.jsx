import { useState } from 'react'
import { PropertyCard } from './PropertyCard'
import { IconArrow } from './icons'

const filters = ['All', 'Rent', 'Buy', 'Short-let']

const properties = [
  {
    tag: 'For sale',
    price: '₦150,000,000/yr',
    title: 'Luxury 5-Bed Detached Duplex',
    location: 'Lekki Phase 1, Lagos',
    rating: '4.2',
    area: '4500sqft',
    baths: '6 Baths',
    beds: '6 Bedrooms',
    image: '/images/properties/property-1.jpg',
  },
  {
    tag: 'For Rent',
    price: '₦5,000,000/yr',
    title: 'Modern 3-Bed Apartment',
    location: 'Victoria Island, Lagos',
    rating: '3.8',
    area: '2100sqft',
    baths: '3 Baths',
    beds: '3 Bedrooms',
    image: '/images/properties/property-2.jpg',
  },
  {
    tag: 'Short-let',
    price: '₦150,000/yr',
    title: 'Cozy Studio Short-let',
    location: 'Ikoyi, Lagos',
    rating: '3.2',
    area: '800sqft',
    baths: '1 Baths',
    beds: '1 Bedrooms',
    image: '/images/properties/property-3.jpg',
  },
  {
    tag: 'For Rent',
    price: '₦81,000,000/yr',
    title: 'Ocean Breeze Villa',
    location: 'Lekki Phase 1, Lagos',
    rating: '3.8',
    area: '4500sqft',
    baths: '4 Baths',
    beds: '4 Bedrooms',
    image: '/images/properties/property-4.jpg',
  },
  {
    tag: 'Short-let',
    price: '₦50,000,000/yr',
    title: 'Villa Esperanza',
    location: 'Lekki Phase 1, Lagos',
    rating: '3.2',
    area: '4500sqft',
    baths: '6 Baths',
    beds: '6 Bedrooms',
    image: '/images/properties/property-5.jpg',
  },
  {
    tag: 'For sale',
    price: '₦1,000,000,000/yr',
    title: 'Case Del Mar',
    location: 'Lekki Phase 1, Lagos',
    rating: '4.2',
    area: '4500sqft',
    baths: '6 Baths',
    beds: '6 Bedrooms',
    image: '/images/properties/property-6.jpg',
  },
]

export const FeaturedProperties = () => {
  const [active, setActive] = useState('All')

  return (
    <section className="mt-16 bg-[#f5f6f7] px-[5%] py-14 lg:mt-20 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px] font-semibold text-black sm:text-[32px]">Featured Properties</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === filter
                      ? 'bg-havena-green text-white'
                      : 'border border-[#eceeec] bg-white text-gray-500 hover:border-havena-green/40 hover:text-havena-green'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <p className="max-w-[390px] text-lg text-black lg:text-right">
              Handpicked premium properties available right now.
            </p>
            <button className="flex items-center gap-2.5 rounded-full bg-havena-green px-5 py-3 text-lg text-white transition-colors hover:bg-havena-green-light">
              Discover More
              <IconArrow className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.title} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
