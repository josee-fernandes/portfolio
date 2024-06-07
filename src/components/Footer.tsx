import { useCallback } from 'react'

import { cn } from '@/lib/tailwind'

import { Icon } from './Icon'

interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const handleGitHub = useCallback(() => {
    window.open(
      'https://github.com/josee-fernandes',
      '_blank',
      'noopener,noreferrer',
    )
  }, [])

  return (
    <div className="absolute bottom-[5.25rem] w-full">
      <footer
        className={cn(
          'mx-auto flex w-[95%] max-w-[1600px] items-center justify-between ',
          className,
        )}
      >
        <div className="flex items-center gap-2.5">
          <Icon name="code" className="size-6" />
          <span className="text-base leading-none">WITH</span>
          <Icon name="heart" className="size-6 fill-inherit stroke-none" />
          <span>BY ME</span>
        </div>
        <div>
          <Icon
            role="button"
            name="github"
            className="size-6 fill-inherit transition-all duration-200"
            onClick={handleGitHub}
          />
        </div>
      </footer>
    </div>
  )
}

Footer.displayName = 'Footer'
