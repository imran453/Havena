import { Logo } from './Logo'
import { IconFacebook, IconInstagram, IconTwitter, IconLinkedin } from './icons'

const linkColumns = [
  {
    heading: 'Explore',
    links: ['Buy Property', 'Rent Property', 'Short-lets', 'Find Agents'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Contact'],
  },
]

const socials = [IconFacebook, IconInstagram, IconTwitter, IconLinkedin]

export const Footer = () => {
  return (
    <footer className="relative mt-28 overflow-hidden border-t border-gray-100 bg-havena-green-light pb-10 pt-10 lg:mt-32">
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-bold leading-none tracking-tighter text-white/10 lg:text-[260px]"
      >
        Havena
      </p>

      <div className="relative z-10 mx-auto w-[94%] max-w-[1280px]">
        <div className="flex flex-col gap-10 border-b border-white/20 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[503px]">
            <h3 className="text-[28px] font-semibold text-white sm:text-[32px]">
              Let&rsquo;s Find your dream Home
            </h3>
            <p className="mt-3 text-lg text-white/80">
              Let our expert team provide you with outstanding support as you navigate the real estate
              market
            </p>
          </div>

          <div className="max-w-[503px] lg:pt-1">
            <p className="text-lg text-white">Stay Updated with Real Estate Insights</p>
            <form className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full rounded-full border border-white/60 bg-transparent px-5 py-3 text-base text-white placeholder:text-white/70 focus:border-white focus:outline-none sm:w-[260px]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-havena-amber px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Join Our Newsletter
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 max-w-[280px] text-base leading-7 text-white/80">
              The most trusted real estate platform in Nigeria. Discover, rent, buy, or book property
              inspections with confidence.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex size-11 items-center justify-center rounded-full bg-[#f9fafb] text-havena-green transition-opacity hover:opacity-80"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {linkColumns.map((col) => (
            <div key={col.heading}>
              <p className="text-lg font-bold text-white">{col.heading}</p>
              <ul className="mt-5 flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-lg text-white/80 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-lg font-bold text-white">Subscribe to Newsletter</p>
            <p className="mt-5 text-lg text-white/80">
              Get the latest property updates and market insights directly in your inbox.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-base text-[#ddddde] sm:flex-row">
          <p>© 2026 Havena. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
