import { HTMLAttributes } from "react"
import BannerImage from "./assets/black-friday-discount.png"
import { cn } from "@utils/cn"
import CloseIcon from "@assets/icons/close.svg?react"

export const BottomBanner = ({
  toggleVisibility,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  toggleVisibility: (value: boolean) => void
}) => {
  return (
    <div
      {...props}
      className={cn(
        "right-10 bottom-[10vh] fixed shadow-primary rounded-large h-[350px] w-[600px] bg-black flex max-md:right-5 max-sm:right-0 max-sm:w-full max-sm:bottom-0 max-sm:rounded-none",
        props.className
      )}
    >
      <CloseIcon
        className="cursor-pointer absolute right-4 top-4 z-10"
        onClick={() => toggleVisibility(false)}
      />

      <div
        className="relative 
        w-full max-sm:w-[unset]
      before:hidden
      before:max-sm:block before:w-10 before:h-full before:bg-gradient-to-r before:from-transparent before:to-black before:absolute before:top-0 before:-right-5 before:w-[150px]"
      >
        <img
          src={BannerImage}
          alt="header-banner"
          className="object-cover absolute w-full h-full top-0 left-0 -z-10 rounded-large max-sm:rounded-none 
          relative max-sm:w-[240px]"
        />
        <div />
      </div>

      <div className="absolute right-10 top-16 flex flex-col max-sm:translate-x-1/2 max-sm:right-1/2 max-sm:w-full">
        <div className="text-5xl text-white font-medium text-center mb-3">
          Black Friday
        </div>
        <div className="text-center bg-gradient-to-r from-accent/[.60] from-35% to-[#EDDF95] to-65% bg-clip-text text-transparent text-[40px] font-medium mb-2">
          10%OFF
        </div>
        <div className="text-center text-secondary font-medium mb-10">
          Use code <span className="font-semibold text-accent">10FRIDAY</span>{" "}
          at checkout
        </div>
        <button className="rounded-large bg-white/[0.1] rounded-medium px-6 p-2 font-medium text-white self-center w-fit">
          Shop now <span className="max-sm:hidden">through Monday</span>
        </button>
      </div>
    </div>
  )
}
