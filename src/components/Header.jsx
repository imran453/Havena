import { useState } from 'react'
import { Logo } from './Logo'
import { IconPin } from './icons'

const navTabs = ['Buy', 'Rent', 'Short-let']

const IconMenu = ({ className = 'size-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const IconClose = ({ className = 'size-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[88px] border-b border-gray-100 bg-white/90 backdrop-blur-[7px]">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between gap-4 px-6 lg:px-10">
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
            <button className="hidden items-center gap-1.5 border-r border-gray-400/60 pr-4 text-sm font-medium text-gray-800 md:flex">
              <span>Find Agent</span>
            </button>
            <button className="hidden items-center gap-1.5 text-xs text-gray-800 md:flex">
              <IconPin className="size-4" />
              <span>Your Location</span>
            </button>
            <button className="hidden rounded-full bg-havena-green-light px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-havena-green lg:flex">
              Register / Login
            </button>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex size-10 items-center justify-center rounded-full text-gray-800 transition-colors hover:bg-black/5 lg:hidden"
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-x-0 top-[88px] bottom-0 z-[60] flex flex-col overflow-y-auto px-6 py-10 lg:hidden"
          style={{ backgroundColor: '#ffffff' }}
        >
          <nav className="flex flex-col gap-9">
            {navTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setMenuOpen(false)}
                className={`text-left text-2xl font-medium transition-colors ${
                  tab === 'Buy' ? 'text-havena-green' : 'text-gray-500 hover:text-havena-green'
                }`}
              >
                {tab}
              </button>
            ))}

            <button
              onClick={() => setMenuOpen(false)}
              className="text-left text-2xl font-medium text-gray-500 hover:text-havena-green"
            >
              Find Agent
            </button>

            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-left text-2xl font-medium text-gray-500 hover:text-havena-green"
            >
              <IconPin className="size-6 shrink-0 text-havena-green" />
              <span>Your Location</span>
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-12 w-full rounded-full bg-havena-green px-5 py-4 text-lg font-semibold text-white transition-colors hover:bg-havena-green-light"
          >
            Register/Login
          </button>
        </div>
      )}
    </>
  )
}