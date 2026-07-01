const stats = [
  { value: '15,000', suffix: '+', label: 'Verified Properties' },
  { value: '2,500', suffix: '+', label: 'Trusted Agents & Partners' },
  { value: '8,700', suffix: '+', label: 'Active Listings Nationwide' },
]

export const Stats = () => {
  return (
    <section className="mx-auto mt-16 w-[94%] max-w-[1280px] lg:mt-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:flex-nowrap">

        {/* heading + paragraph — wraps normally on mobile */}
        <div className="lg:shrink-0">
          <h2 className="text-[28px] font-semibold leading-tight text-black sm:text-[32px] lg:whitespace-nowrap">
            We&rsquo;re Across Every Corner of Nigeria.
          </h2>
          <p className="mt-4 max-w-[480px] text-base leading-7 text-gray-400">
            From Lagos to Abuja, Port Harcourt to Kano — Havena connects you to verified homes, trusted
            agents, and seamless property experiences wherever you are.
          </p>
        </div>

        {/* stats — 3-column grid on mobile, flex row on desktop */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-8 lg:flex lg:shrink-0 lg:flex-nowrap lg:items-start lg:gap-x-[22px]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[24px] font-medium leading-tight text-black sm:text-[34px] lg:text-[40px] lg:whitespace-nowrap">
                {stat.value}
                <span className="text-gray-400">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-base sm:leading-7 lg:whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}