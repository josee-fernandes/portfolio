import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export const Nav: React.FC = () => {
  const router = useRouter()

  const handleProjectsMenu = useCallback(() => {
    router.push('/projects')
  }, [router])

  const handleAboutMenu = useCallback(() => {
    router.push('/projects')
  }, [router])

  const handleContactMenu = useCallback(() => {
    router.push('/projects')
  }, [router])

  return (
    <div className="fixed top-[5.25rem] z-[999] w-full">
      <nav className="mx-auto flex w-[95%] max-w-[1600px] text-brand-secondary">
        <ul className="flex gap-6">
          <li
            role="button"
            className="group relative block cursor-pointer overflow-hidden pb-1 pr-1"
            onClick={handleProjectsMenu}
          >
            <span className="relative top-0 block h-full transition-all duration-200 group-hover:-top-full">
              PROJECTS
            </span>
            <span className="absolute top-full size-full cursor-pointer font-playfair-display font-bold italic text-brand-accent transition-all duration-200 group-hover:top-0">
              PROJECTS
            </span>
          </li>
          <li
            role="button"
            className="group relative block cursor-pointer overflow-hidden pb-1 pr-1"
            onClick={handleAboutMenu}
          >
            <span className="relative top-0 block h-full transition-all duration-200 group-hover:-top-full">
              ABOUT
            </span>
            <span className="absolute top-full size-full cursor-pointer font-playfair-display font-bold italic text-brand-accent transition-all duration-200 group-hover:top-0">
              ABOUT
            </span>
          </li>
          <li
            role="button"
            className="group relative block cursor-pointer overflow-hidden pb-1 pr-1"
            onClick={handleContactMenu}
          >
            <span className="relative top-0 block h-full transition-all duration-200 group-hover:-top-full">
              CONTACT
            </span>
            <span className="absolute top-full size-full cursor-pointer font-playfair-display font-bold italic text-brand-accent transition-all duration-200 group-hover:top-0">
              CONTACT
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

Nav.displayName = 'Nav'
