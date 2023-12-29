import { BottomBanner } from "./bottom-banner"
import { HeaderBanner } from "./header-banner"
import { useRef } from "react"
import { useIsInView } from "@hooks/useIsInView"
import { cn } from "@utils/cn"
import { useVisibility } from "./useVisibility"

export const DiscountBanner = () => {
  const headerRef = useRef(null)
  const isIntersecting = useIsInView({ ref: headerRef, defaultValue: true })
  const { visible, toggleVisibility } = useVisibility()

  return (
    <div className="relative w-full h-screen">
      <HeaderBanner ref={headerRef} toggleVisibility={toggleVisibility} />
      {visible && (
        <BottomBanner
          toggleVisibility={toggleVisibility}
          className={cn({
            "animate-enter": !isIntersecting,
            "animate-leave": isIntersecting && headerRef.current,
            "opacity-0": isIntersecting
          })}
        />
      )}
    </div>
  )
}
