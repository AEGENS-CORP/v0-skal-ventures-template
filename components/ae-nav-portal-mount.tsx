"use client"

import { useEffect, useRef } from "react"

export const AeNavPortalMount = () => {
  const createdRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof document === "undefined") {
      return
    }

    let portal = document.getElementById("ae-nav-portal") as HTMLDivElement | null

    if (!portal) {
      portal = document.createElement("div")
      portal.setAttribute("id", "ae-nav-portal")
      document.body.appendChild(portal)
      createdRef.current = portal
    }

    return () => {
      if (createdRef.current && createdRef.current.parentElement) {
        createdRef.current.parentElement.removeChild(createdRef.current)
      }
    }
  }, [])

  return null
}
