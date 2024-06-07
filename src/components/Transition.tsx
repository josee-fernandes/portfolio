import { PropsWithChildren, useEffect, useState } from 'react'

import { usePageTransition } from '@/context/Transition'

interface TransitionProps extends PropsWithChildren {}

export const Transition: React.FC<TransitionProps> = ({ children }) => {
  const { timeline } = usePageTransition()

  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (children?.key !== displayChildren?.key) {
      timeline.play().then(() => {
        setDisplayChildren(children)
        window.scrollTo(0, 0)
        timeline.pause().clear()
      })
      // setDisplayChildren(children)
      // window.scrollTo(0, 0)
    }
  }, [timeline, children, displayChildren])

  return <div>{displayChildren}</div>
}

Transition.displayName = 'Transition'
