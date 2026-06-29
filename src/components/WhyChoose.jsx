import { IconVerified, IconAgent, IconShield, IconSupport, IconArrow } from './icons'

const features = [
  {
    icon: IconVerified,
    title: 'Verified Listings',
    body: 'Every property on our platform undergoes a strict verification process.',
    dark: false,
    iconBg: 'bg-havena-green-light/40',
  },
  {
    icon: IconAgent,
    title: 'Trusted Agents',
    body: 'Work with top-rated professionals who know the market inside out.',
    dark: true,
    iconBg: 'bg-havena-green-light',
  },
  {
    icon: IconShield,
    title: 'Safe & Secure',
    body: 'Your payments and personal data are protected with bank-grade security.',
    dark: false,
    iconBg: 'bg-havena-green-soft',
  },
  {
    icon: IconSupport,
    title: '24/7 Support',
    body: 'Our dedicated team is always here to help you at every step.',
    dark: false,
    iconBg: 'bg-havena-green-soft',
  },
]

export const WhyChoose = () => {
  return (
    <section className="mx-auto mt-28 w-[94%] max-w-[1280px] lg:mt-32">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-[106px]">
        <div className="flex flex-col gap-9 lg:w-[408px] lg:shrink-0">
          <div className="flex flex-col gap-2">
            <h2 className="text-[32px] font-semibold leading-tight text-black sm:text-[36px]">
              Why Choose Havena
            </h2>
            <p className="max-w-[400px] text-lg leading-7 text-gray-500">
              We&rsquo;re redefining the real estate experience in Nigeria with trust and transparency.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {features.map(({ icon: Icon, title, body, dark, iconBg }) => (
              <div
                key={title}
                className={`flex items-center gap-4 rounded-xl p-3 ${dark ? 'bg-black' : 'bg-[#e5e5e6]'}`}
              >
                <div className={`flex size-11 shrink-0 items-center justify-center rounded-[11px] ${iconBg}`}>
                  <Icon className={`size-[22px] ${dark ? 'text-white' : 'text-havena-green'}`} />
                </div>
                <div>
                  <p className={`text-lg font-semibold leading-7 ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                  </p>
                  <p className={`text-base leading-[26px] ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="flex h-[50px] w-fit items-center gap-2.5 rounded-full bg-havena-green px-5 text-lg text-white transition-colors hover:bg-havena-green-light">
            Explore Listing
            <IconArrow className="size-5" />
          </button>
        </div>

        <div className="flex flex-col gap-[25px] lg:w-[762px] lg:shrink-0">
          <div className="aspect-[762/428] w-full overflow-hidden rounded-lg">
            <img
              src="/images/why-choose/collage-1.jpg"
              alt="Modern home exterior"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[28px] sm:flex-row sm:items-center">
            <div className="aspect-[434/293] overflow-hidden rounded-lg sm:w-[434px] sm:shrink-0">
              <img
                src="/images/why-choose/collage-2.jpg"
                alt="Property interior"
                className="size-full object-cover"
              />
            </div>
            <div className="relative aspect-[300/293] overflow-hidden rounded-lg sm:w-[300px] sm:shrink-0">
              <img
                src="/images/why-choose/collage-3.jpg"
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.93)]" />

              <div className="absolute left-1/2 top-[89px] flex h-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[11px] bg-havena-orange px-[14px]">
                <span className="text-[50px] font-semibold leading-none text-white">95%</span>
              </div>
              <p className="absolute left-1/2 top-[122px] -translate-x-1/2 whitespace-nowrap text-xl font-semibold text-white">
                Customer Satisfaction
              </p>
              <p className="absolute left-1/2 top-[150px] w-[232px] -translate-x-1/2 text-center text-base leading-[26px] text-gray-400">
                Delivering exceptional service, ensuring client satisfaction every step
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}