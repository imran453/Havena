import { IconStepSearch, IconStepInspect, IconStepDecide, IconStepMoveIn } from './icons'

const steps = [
  {
    icon: IconStepSearch,
    title: 'Search Properties',
    body: 'Browse thousands of verified listings tailored to your needs.',
  },
  {
    icon: IconStepInspect,
    title: 'Book Inspection',
    body: 'Schedule an in-person or virtual tour at your convenience.',
  },
  {
    icon: IconStepDecide,
    title: 'Make Decision',
    body: 'Review, negotiate, and finalize your choice securely.',
  },
  {
    icon: IconStepMoveIn,
    title: 'Move In',
    body: 'Get your keys and step into your new dream home.',
  },
]

export const HowItWorks = () => {
  return (
    <section className="mx-auto mt-28 w-[94%] max-w-[1280px] lg:mt-32">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-[28px] font-semibold text-black sm:text-[32px]">How it works</h2>
        <p className="max-w-[300px] text-lg text-gray-400 sm:text-right">
          Your journey to a new home, simplified into four easy steps.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex flex-col gap-5">
            <div className="flex size-20 items-center justify-center rounded-full bg-havena-green-light/40">
              <Icon className="size-8 text-havena-green" />
            </div>
            <div>
              <p className="text-xl font-semibold text-black">{title}</p>
              <p className="mt-2 max-w-[265px] text-base leading-7 text-gray-400">{body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-16 h-[280px] overflow-hidden rounded-3xl sm:h-[400px] lg:h-[549px]">
        <img
          src="/images/how-it-works/banner.jpg"
          alt="Modern housing development"
          className="size-full object-cover"
        />
      </div>
    </section>
  )
}
