import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { cn } from '@/lib/tailwind'

interface NavProps {
  className?: string
  hasColoredHover?: boolean
}

export const Nav: React.FC<NavProps> = ({ className, hasColoredHover }) => {
  const pathname = usePathname()

  const hasLogo = useMemo(() => pathname.includes('/about'), [pathname])

  const menuHoverClassName = useMemo(
    () =>
      cn(
        'absolute top-full size-full cursor-pointer font-playfair-display font-bold italic transition-all duration-200 group-hover:top-0',
        hasColoredHover ? 'text-brand-accent' : '',
      ),
    [hasColoredHover],
  )

  return (
    <div className="fixed top-[5.25rem] z-[999] w-full">
      <nav
        className={cn(
          'relative mx-auto flex w-[95%] max-w-[1600px] items-center justify-between',
          className,
        )}
      >
        {hasLogo && (
          <Link href="/" className="logo absolute -left-1/2">
            <span className="font-humane text-8xl">JFERNANDES</span>
          </Link>
        )}

        <ul className="menus absolute flex gap-6">
          <li className="relative">
            <Link
              href="/projects"
              className="group relative block h-full cursor-pointer overflow-hidden pb-1 pr-1"
            >
              <span className="relative top-0 block h-max transition-all duration-200 group-hover:-top-full">
                PROJECTS
              </span>
              <span className={menuHoverClassName}>PROJECTS</span>
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/about"
              className="group relative block h-full cursor-pointer overflow-hidden pb-1 pr-1"
            >
              <span className="relative top-0 block h-full transition-all duration-200 group-hover:-top-full">
                ABOUT
              </span>
              <span className={menuHoverClassName}>ABOUT</span>
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/contact"
              className="group relative block h-full cursor-pointer overflow-hidden pb-1 pr-1"
            >
              <span className="relative top-0 block h-full transition-all duration-200 group-hover:-top-full">
                CONTACT
              </span>
              <span className={menuHoverClassName}>CONTACT</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

Nav.displayName = 'Nav'
