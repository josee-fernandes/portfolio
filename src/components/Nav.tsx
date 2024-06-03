import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { cn } from '@/lib/tailwind'

interface NavProps {
  onAboutClick?: () => void
}

export const Nav: React.FC<NavProps> = ({ onAboutClick }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { contextSafe } = useGSAP()

  const navClass = cn(
    'navbar mx-auto flex w-[95%] max-w-[1600px] items-center justify-between',
    pathname.includes('/about') ? 'text-brand-primary' : 'text-brand-secondary',
  )
  const animationSpanClass = cn(
    'absolute top-full size-full cursor-pointer font-playfair-display font-bold italic transition-all duration-200 group-hover:top-0',
    pathname.includes('/about') ? 'text-brand-primary' : 'text-brand-accent',
  )
  const hasLogo = useMemo(() => pathname.includes('/about'), [pathname])

  const handleHomeMenu = useCallback(() => {
    router.push('/')
  }, [router])

  const handleProjectsMenu = useCallback(() => {
    router.push('/projects')
  }, [router])

  const handleAboutMenu = contextSafe(
    useCallback(() => {
      if (onAboutClick) {
        onAboutClick()

        gsap.to('.navbar', {
          duration: 1,
          color: '#000000',
        })
      }
    }, [onAboutClick]),
  )

  const handleContactMenu = useCallback(() => {
    router.push('/contact')
  }, [router])

  return (
    <div className="fixed top-[5.25rem] z-[999] w-full">
      <nav className={navClass}>
        {hasLogo && (
          <div role="button" onClick={handleHomeMenu}>
            <span className="font-humane text-8xl">JFERNANDES</span>
          </div>
        )}

        <ul className="flex gap-6">
          <li
            role="button"
            className="group relative block cursor-pointer overflow-hidden pb-1 pr-1"
            onClick={handleProjectsMenu}
          >
            <span className="relative top-0 block h-max transition-all duration-200 group-hover:-top-full">
              PROJECTS
            </span>
            <span className={animationSpanClass}>PROJECTS</span>
          </li>
          <li
            role="button"
            className="group relative block cursor-pointer overflow-hidden pb-1 pr-1"
            onClick={handleAboutMenu}
          >
            <span className="relative top-0 block h-full transition-all duration-200 group-hover:-top-full">
              ABOUT
            </span>
            <span className={animationSpanClass}>ABOUT</span>
          </li>
          <li
            role="button"
            className="group relative block cursor-pointer overflow-hidden pb-1 pr-1"
            onClick={handleContactMenu}
          >
            <span className="relative top-0 block h-full transition-all duration-200 group-hover:-top-full">
              CONTACT
            </span>
            <span className={animationSpanClass}>CONTACT</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

Nav.displayName = 'Nav'
