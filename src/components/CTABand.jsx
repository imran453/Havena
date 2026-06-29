export const CTABand = () => {
  return (
    <section className="relative mx-auto mt-28 w-[94%] max-w-[1392px] overflow-hidden rounded-3xl bg-[#ddddde] py-16 lg:mt-32 lg:h-[630px] lg:py-0">
      <img
        src="/images/cta/map-pattern.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden h-full w-[51%] object-cover lg:block"
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col items-start justify-center gap-7 px-6 lg:absolute lg:inset-0 lg:px-0">
        <div className="lg:ml-[53.5%] lg:w-[532px] lg:pr-6">
          <h2 className="text-[32px] font-bold leading-tight text-black sm:text-[44px] lg:text-[48px]">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mt-5 max-w-[420px] text-lg leading-7 text-black sm:text-xl">
            Join thousands of Nigerians using Havena to discover, rent, and buy properties with absolute
            confidence.
          </p>
          <button className="mt-9 rounded-xl bg-havena-green px-8 py-4 text-lg font-medium text-white shadow-lg shadow-black/10 transition-colors hover:bg-havena-green-light">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}