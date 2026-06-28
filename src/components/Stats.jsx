const stats = [
  { value: '15,000', suffix: '+', label: 'Verified Properties' },
  { value: '2,500', suffix: '+', label: 'Trusted Agents & Partners' },
  { value: '8,700', suffix: '+', label: 'Active Listings Nationwide' },
]

export const Stats = () => {
  return (
    <section className="mx-auto mt-24 w-[94%] max-w-[1280px] overflow-x-auto lg:mt-32">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:flex-nowrap">
        <div className="shrink-0">
          <h2 className="whitespace-nowrap text-[28px] font-semibold leading-tight text-black sm:text-[32px]">
            We&rsquo;re Across Every Corner of Nigeria.
          </h2>
          <p className="mt-4 max-w-[480px] text-base leading-7 text-gray-400">
            From Lagos to Abuja, Port Harcourt to Kano — Havena connects you to verified homes, trusted
            agents, and seamless property experiences wherever you are.
          </p>
        </div>

        <div className="flex flex-nowrap items-start gap-x-4 shrink-0 sm:gap-x-5 lg:gap-x-[22px]">
          {stats.map((stat) => (
            <div key={stat.label} className="shrink-0">
              <p className="whitespace-nowrap text-[28px] font-medium leading-tight text-black sm:text-[34px] lg:text-[40px]">
                {stat.value}
                <span className="text-gray-400">{stat.suffix}</span>
              </p>
              <p className="mt-1 whitespace-nowrap text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}