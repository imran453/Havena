import { IconArrow } from './icons'

const categories = [
  { label: 'Houses', count: '1,850+', tall: false, image: '/images/categories/houses.jpg' },
  { label: 'Apartments', count: '2,400+', tall: true, image: '/images/categories/apartments.jpg' },
  { label: 'Duplexes', count: '1,200+', tall: false, image: '/images/categories/duplexes.jpg' },
  { label: 'Short-let', count: '940+', tall: true, image: '/images/categories/short-let.jpg' },
  { label: 'Commercial', count: '320+', tall: false, image: '/images/categories/commercial.jpg' },
  { label: 'Land', count: '560+', tall: true, image: '/images/categories/land.jpg' },
  { label: 'Bungalows', count: '1,040+', tall: false, image: '/images/categories/bungalows.jpg' },
  { label: 'Studios', count: '780+', tall: true, image: '/images/categories/studios.jpg' },
]

const CategoryCard = ({ cat }) => (
  <div
    className={`relative shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-transform duration-200 active:scale-95 hover:scale-[1.03] ${
      cat.tall ? 'h-[365px] w-[216px]' : 'h-[225px] w-[183px]'
    }`}
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
)

export const Categories = () => {
  return (
    <section className="mt-16 w-full overflow-hidden lg:mt-20">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto flex w-[94%] max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* left — heading only */}
        <h2 className="text-[34px] font-semibold leading-[1.15] text-black sm:max-w-[387px] sm:text-[36px]">
          Explore Popular Categories
        </h2>

        {/* right — subtitle + button */}
        <div className="flex flex-col items-start gap-6 sm:max-w-[510px] lg:items-end">
          <p className="text-lg leading-[1.55] text-gray-500 lg:text-right">
            Find exactly what you&rsquo;re looking for by browsing our most popular property types.
          </p>
          <button className="flex items-center gap-2.5 rounded-full bg-havena-green px-5 py-3 text-lg text-white transition-colors hover:bg-havena-green-light">
            Discover More
            <IconArrow className="size-5" />
          </button>
        </div>
      </div>

      <div className="mt-12 pb-2">
        <div className="marquee-track flex w-max items-end gap-6">
          {categories.map((cat) => (
            <CategoryCard key={`a-${cat.label}`} cat={cat} />
          ))}
          {categories.map((cat) => (
            <CategoryCard key={`b-${cat.label}`} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}