import { IconHeart, IconStar, IconArea, IconBath, IconBed, IconPin } from './icons'

const tagColors = {
  'For sale': 'bg-havena-orange',
  'For Rent': 'bg-havena-orange',
  'Short-let': 'bg-havena-orange',
}

export const PropertyCard = ({ property }) => {
  const { tag, price, title, location, rating, area, baths, beds, image } = property

  return (
    <article className="flex flex-col gap-6">
      <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[340px] lg:h-[388px]">
        <img src={image} alt={title} className="size-full object-cover" />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between sm:inset-x-5">
          <span className={`rounded-lg px-3 py-1.5 text-xs font-bold text-white ${tagColors[tag] ?? 'bg-havena-orange'}`}>
            {tag}
          </span>
          <button
            aria-label="Save property"
            className="flex size-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white"
          >
            <IconHeart className="size-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-[#141414]">{price}</p>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-gray-800">{title}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <IconPin className="size-4 shrink-0" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 border-t border-gray-100 pt-4 text-[10px] font-semibold text-[#5f5d5d]">
          <span className="flex items-center gap-1.5 rounded-full bg-gray-200 px-2.5 py-2">
            <IconStar className="size-3.5 text-amber-500" />
            {rating}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-gray-200 px-2.5 py-2 text-zinc-500">
            <IconArea className="size-3.5" />
            {area}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-gray-200 px-2.5 py-2">
            <IconBath className="size-3.5" />
            {baths}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-gray-200 px-2.5 py-2">
            <IconBed className="size-3.5" />
            {beds}
          </span>
        </div>
      </div>
    </article>
  )
}
