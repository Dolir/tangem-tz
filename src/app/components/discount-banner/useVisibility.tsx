import { useState } from "react"

const key = "discount-banner-visible" as const

export const useVisibility = () => {
  const [visible, setVisible] = useState(!localStorage.getItem(key))
  const toggleVisibility = (value: boolean) => {
    if (!value) localStorage.setItem(key, String(value))
    setVisible(value)
  }
  return { visible, toggleVisibility } as const
}
