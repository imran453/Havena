import { SearchBar } from './SearchBar'
import { IconVerified, IconAgent, IconShield } from './icons'

const trustItems = [
  { icon: IconVerified, label: 'Verified Listings' },
  { icon: IconAgent, label: 'Trusted Agents' },
  { icon: IconShield, label: 'Secure Payments' },
]

export const Hero = () => {
  return (
    <section className="relative mx-auto mt-9 w-[94%] max-w-[1392px]">
      <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[460px] lg:h-[773px]">
        <img
          src="/images/hero.jpg"
          alt="Modern home exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/60" />

        <div className="relative z-10 px-6 pb-10 pt-16 sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
          <h1 className="max-w-[600px] text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px] lg:text-[48px] lg:leading-[1.2]">
            Find Your <span className="text-gray-100">Safe Place</span>
          </h1>
          <p className="mt-5 max-w-[450px] text-sm leading-7 text-white/90">
            Discover verified properties across Nigeria. Buy, rent, or book inspections with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-white">
                <Icon className="size-5" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <SearchBar />
        </div>
      </div>
      <div className="lg:hidden">
        <SearchBar />
      </div>
    </section>
  )
}
