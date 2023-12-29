import { forwardRef, useState } from "react"
import BannerImage from "./assets/black-friday-discount-mobile.png"
import CloseIcon from "@assets/icons/close.svg?react"
import ArrowRightIcon from "@assets/icons/arrow-right.svg?react"

export const HeaderBanner = forwardRef<
  HTMLDivElement,
  { toggleVisibility: (value: boolean) => void }
>(({ toggleVisibility }, ref) => {
  const [closed, setClosed] = useState(false)

  if (closed) return null

  return (
    <div
      className="w-full top-14 absolute flex justify-between bg-gradientBlack text-white  before:bg-radialGold before:blur-[92px] before:w-[1400px] before:aspect-square before:absolute before:-right-1/4 overflow-hidden relative before:-bottom-20 before:-z-10"
      ref={ref}
    >
      <div>
        <img
          src={BannerImage}
          alt="header-banner"
          className="w-[212px] h-[54px] object-cover max-lg:w-[180px] max-lg:object-right max-sm:w-[150px]"
        />
      </div>

      <div className="flex gap-3 items-center max-sm:gap-1">
        <div>
          <span className="font-semibold">
            Black Friday<span className="hidden max-sm:inline">,</span>
          </span>

          <span className="max-lg:hidden">, 24-27 Nov</span>
        </div>
        <div className="bg-white/[0.15] h-[3px] w-[3px] rounded-full max-md:hidden" />
        <div className="font-semibold text-accent">10%OFF</div>
        <div className="bg-white/[0.15] h-[3px] w-[3px] rounded-full max-md:hidden" />
        <div className="max-sm:hidden">
          Use code <span className="font-semibold text-accent">10FRIDAY</span>
          <span className="max-lg:hidden"> at checkout</span>
        </div>
      </div>
      <div className="flex gap-3 items-center mr-3 max-sm:mr-5">
        <button className="bg-white rounded-full px-4 py-1.5  font-medium text-transparent max-sm:hidden">
          <div className="bg-gradient-to-r from-black/[.55] from-10% to-30%  to-black bg-clip-text">
            Shop now
          </div>
        </button>
        <CloseIcon
          className="cursor-pointer max-lg:hidden"
          onClick={() => {
            setClosed(true)
            toggleVisibility(false)
          }}
        />
        <ArrowRightIcon className="hidden max-sm:block" />
      </div>
    </div>
  )
})
