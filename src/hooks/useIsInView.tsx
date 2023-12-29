import { MutableRefObject, useEffect, useMemo, useState } from "react"

export const useIsInView = ({
  ref,
  options,
  defaultValue = false
}: {
  ref: MutableRefObject<Element | null>
  options?: IntersectionObserverInit
  defaultValue?: boolean
}) => {
  const [isIntersecting, setIntersecting] = useState(defaultValue)

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        options
      ),
    [options]
  )

  useEffect(() => {
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [observer, ref])

  return isIntersecting
}
