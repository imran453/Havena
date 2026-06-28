import { Logo } from './Logo'
import { IconPin } from './icons'

const navTabs = ['Buy', 'Rent', 'Short-let']

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex w-[94%] max-w-[1280px] items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-6">
          <Logo className="shrink-0" />
          <nav className="hidden items-center gap-6 lg:flex">
            {navTabs.map((tab) => (
              <button
                key={tab}
                className={`relative pb-1.5 text-sm font-medium transition-colors ${
                  tab === 'Buy' ? 'text-havena-green' : 'text-gray-600 hover:text-havena-green'
                }`}
              >
                {tab}
                {tab === 'Buy' && (
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-havena-green" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <button className="hidden items-center gap-1.5 border-r border-gray-200 pr-4 text-sm font-medium text-gray-700 md:flex">
            <span>Find Agent</span>
          </button>
          <button className="hidden items-center gap-1.5 text-xs text-gray-700 md:flex">
            <IconPin className="size-4" />
            <span>Your Location</span>
          </button>
          <button className="rounded-full bg-havena-green-light px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-havena-green">
            Register / Login
          </button>
        </div>
      </div>
    </header>
  )
}
