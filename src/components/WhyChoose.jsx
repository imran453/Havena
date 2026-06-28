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
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[408px_1fr] lg:gap-10">
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="text-[32px] font-semibold leading-tight text-black sm:text-[36px]">
              Why Choose Havena
            </h2>
            <p className="mt-2 max-w-[400px] text-lg leading-7 text-gray-500">
              We&rsquo;re redefining the real estate experience in Nigeria with trust and transparency.
            </p>
          </div>

          <div className="flex flex-col gap-4">
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

          <button className="flex w-fit items-center gap-2.5 rounded-full bg-havena-green px-5 py-3 text-lg text-white transition-colors hover:bg-havena-green-light">
            Explore Listing
            <IconArrow className="size-5" />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="aspect-[762/428] w-full overflow-hidden rounded-2xl">
            <img
              src="/images/why-choose/collage-1.jpg"
              alt="Modern home exterior"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="aspect-[434/293] overflow-hidden rounded-2xl sm:w-[59.13%]">
              <img
                src="/images/why-choose/collage-2.jpg"
                alt="Property interior"
                className="size-full object-cover"
              />
            </div>
            <div className="relative aspect-[300/293] overflow-hidden rounded-2xl bg-black sm:w-[40.87%]">
              <img
                src="/images/why-choose/collage-3.jpg"
                alt=""
                className="size-full object-cover opacity-15"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
                <div
                  className="inline-flex items-center justify-center gap-[13.878px] rounded-2xl bg-havena-orange"
                  style={{ height: '68px', padding: '13.878px' }}
                >
                  <span className="text-2xl font-semibold text-white sm:text-3xl">95%</span>
                </div>
                <p className="text-lg font-semibold text-white">Customer Satisfaction</p>
                <p className="max-w-[220px] text-sm leading-6 text-gray-400">
                  Delivering exceptional service, ensuring client satisfaction every step
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}