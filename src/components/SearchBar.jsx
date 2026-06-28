import { IconChevronDown, IconSearch } from './icons'

const fields = [
  { label: 'Location', value: 'Abuja, Nigeria' },
  { label: 'Property Type', value: 'Duplex House' },
  { label: 'Price Range', value: '₦5,000,000 – ₦8,000,000' },
]

export const SearchBar = () => {
  return (
    <div className="relative z-20 mx-auto -mt-2 w-[88%] max-w-[845px] rounded-2xl border border-gray-400/30 bg-white p-5 shadow-[0_0_3px_rgba(0,0,0,0.12),0_1px_0_rgba(0,0,0,0.12)] sm:p-6 lg:absolute lg:left-1/2 lg:top-[532px] lg:mt-0 lg:w-[94%] lg:-translate-x-1/2">
      <div className="flex gap-7 border-b border-gray-100 pb-4 text-sm font-medium">
        <button className="relative pb-2 text-havena-green">
          Buy
          <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-havena-green" />
        </button>
        <button className="pb-2 text-gray-500 hover:text-gray-700">Rent</button>
        <button className="pb-2 text-gray-500 hover:text-gray-700">Short-let</button>
      </div>

      <div className="flex flex-col divide-y divide-gray-100 pt-5 sm:flex-row sm:divide-x sm:divide-y-0">
        {fields.map((field, i) => (
          <div key={field.label} className={`flex-1 py-3 sm:py-0 sm:pl-5 ${i === 0 ? 'sm:pl-0' : ''}`}>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">{field.label}</p>
            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="truncate text-[14.5px] font-medium text-gray-900">{field.value}</span>
              <IconChevronDown className="size-5 shrink-0 text-gray-400" />
            </div>
          </div>
        ))}
        <div className="flex items-center pt-4 sm:ml-5 sm:pt-0">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-havena-green px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-havena-green-light sm:w-auto">
            <IconSearch className="size-5" />
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
