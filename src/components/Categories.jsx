import { IconArrow } from './icons'

const categories = [
  { label: 'Apartments', count: '2,400+', tall: true, image: '/images/categories/apartments.jpg' },
  { label: 'Houses', count: '1,850+', tall: false, image: '/images/categories/houses.jpg' },
  { label: 'Short-let', count: '940+', tall: true, image: '/images/categories/short-let.jpg' },
  { label: 'Duplexes', count: '1,200+', tall: false, image: '/images/categories/duplexes.jpg' },
  { label: 'Land', count: '560+', tall: true, image: '/images/categories/land.jpg' },
  { label: 'Commercial', count: '320+', tall: false, image: '/images/categories/commercial.jpg' },
  { label: 'Studios', count: '780+', tall: true, image: '/images/categories/studios.jpg' },
  { label: 'Bungalows', count: '1,040+', tall: false, image: '/images/categories/bungalows.jpg' },
]

export const Categories = () => {
  return (
    <section className="mx-auto mt-28 w-[94%] max-w-[1280px] overflow-hidden lg:mt-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[490px_1fr] lg:items-start">
        <h2 className="text-[34px] font-semibold text-black sm:text-[32px]">
          Explore Popular Categories
        </h2>
        <div className="flex flex-col gap-6 lg:items-start">
          <p className="max-w-[510px] text-lg text-gray-500">
            Find exactly what you&rsquo;re looking for by browsing our most popular property types.
          </p>
          <button className="flex items-center gap-2.5 rounded-full bg-havena-green px-5 py-3 text-lg text-white transition-colors hover:bg-havena-green-light">
            Discover More
            <IconArrow className="size-5" />
          </button>
        </div>
      </div>

      <div className="-mx-4 mt-12 overflow-x-auto px-4 pb-2 [scrollbar-width:none]">
        <div className="flex items-end gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className={`relative shrink-0 overflow-hidden rounded-2xl ${
                cat.tall ? 'h-[340px] w-[200px]' : 'h-[210px] w-[170px]'
              } ${i === categories.length - 1 ? 'mr-[-50%] sm:mr-[-100px]' : ''}`}
            >
              <img src={cat.image} alt={cat.label} className="size-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute inset-x-0 bottom-4 flex flex-col items-center gap-1 text-center text-white">
                <p className="text-sm font-semibold">{cat.label}</p>
                <p className="text-[11px] text-white/80">
                  {cat.count}
                  <br />
                  properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}