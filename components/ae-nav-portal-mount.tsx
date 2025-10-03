"use client"

import { useEffect } from "react"

export const AeNavPortalMount = () => {
  useEffect(() => {
    if (typeof document === "undefined") {
      return
    }

    let mount = document.getElementById("ae-nav-portal")

    if (!mount) {
      mount = document.createElement("div")
      mount.setAttribute("id", "ae-nav-portal")
      document.body.appendChild(mount)
    }

    return () => {
      if (mount && mount.childElementCount === 0 && mount.parentElement) {
        mount.parentElement.removeChild(mount)
      }
    }
  }, [])

  return null
}
