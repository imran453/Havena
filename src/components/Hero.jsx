import { SearchBar } from './SearchBar'
import { IconVerified, IconAgent, IconShield } from './icons'

const trustItems = [
  { icon: IconVerified, label: 'Verified Listings' },
  { icon: IconAgent, label: 'Trusted Agents' },
  { icon: IconShield, label: 'Secure Payments' },
]

export const Hero = () => {
  return (
    <section className="relative mx-auto mt-[88px] w-full lg:mt-[124px] lg:w-[94%] lg:max-w-[1392px]">

      <div className="relative h-[780px] overflow-visible sm:h-[600px] sm:overflow-hidden lg:h-[773px] lg:overflow-hidden lg:rounded-3xl">
        <img
          src="/images/hero.jpg"
          alt="Modern home exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />

        <div className="relative z-10 px-6 pt-16 sm:px-10 sm:pt-16 lg:px-14 lg:pt-40">
          <h1 className="max-w-[480px] text-[32px] font-bold leading-[1.2] tracking-tight text-white sm:text-[44px] lg:text-[48px] lg:leading-[1.2]">
            Find Your Safe Place
          </h1>
          <p className="mt-4 max-w-[400px] text-sm leading-7 text-white/90 sm:mt-5 sm:text-base">
            Discover verified properties across Nigeria. Buy, rent, or book inspections with confidence.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs font-medium text-white sm:text-sm">
                <Icon className="size-4" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* mobile card — floats inside hero, anchored to bottom of image */}
        <div className="absolute inset-x-4 top-[340px] z-20 sm:hidden">
          <SearchBar />
        </div>

        {/* desktop card */}
        <div className="hidden lg:block">
          <SearchBar />
        </div>
      </div>

      {/* tablet card */}
      <div className="hidden sm:block lg:hidden">
        <SearchBar />
      </div>

    </section>
  )
}