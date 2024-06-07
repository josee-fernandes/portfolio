import { gsap } from 'gsap'
import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

interface TransitionContextType {
  timeline: gsap.core.Timeline
  setTimeline: React.Dispatch<SetStateAction<gsap.core.Timeline>>
}

interface TransitionProviderProps extends PropsWithChildren {}

const TransitionContext = createContext({} as TransitionContextType)

export const TransitionProvider: React.FC<TransitionProviderProps> = ({
  children,
}) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true }),
  )

  const contextValues = useMemo(
    () => ({ timeline, setTimeline }),
    [timeline, setTimeline],
  )

  return (
    <TransitionContext.Provider value={contextValues}>
      {children}
    </TransitionContext.Provider>
  )
}

export const usePageTransition = () => useContext(TransitionContext)

TransitionProvider.displayName = 'TransitionProvider'
