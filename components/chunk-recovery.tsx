"use client"

import { useEffect } from "react"

const RECOVERY_FLAG = "__aegens_chunk_recovery_once__"

function extractErrorMessage(value: unknown) {
  if (typeof value === "string") return value
  if (value && typeof value === "object") {
    const maybeError = value as { message?: string; name?: string; reason?: { message?: string; name?: string } }
    return [maybeError.name, maybeError.message, maybeError.reason?.name, maybeError.reason?.message].filter(Boolean).join(" ")
  }
  return ""
}

function isChunkLoadError(value: unknown) {
  const message = extractErrorMessage(value)
  return /ChunkLoadError|Loading chunk [0-9]+ failed|Failed to fetch dynamically imported module|Importing a module script failed/i.test(
    message,
  )
}

export function ChunkRecovery() {
  useEffect(() => {
    const recover = () => {
      if (typeof window === "undefined") return
      try {
        if (!window.sessionStorage.getItem(RECOVERY_FLAG)) {
          window.sessionStorage.setItem(RECOVERY_FLAG, "1")
          window.location.reload()
        }
      } catch {
        window.location.reload()
      }
    }

    const handleError = (event: ErrorEvent) => {
      if (isChunkLoadError(event.error ?? event.message)) {
        recover()
      }
    }

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (isChunkLoadError(event.reason)) {
        recover()
      }
    }

    window.addEventListener("error", handleError)
    window.addEventListener("unhandledrejection", handleRejection)

    const clearTimer = window.setTimeout(() => {
      try {
        window.sessionStorage.removeItem(RECOVERY_FLAG)
      } catch {
        // no-op
      }
    }, 120000)

    return () => {
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handleRejection)
      window.clearTimeout(clearTimer)
    }
  }, [])

  return null
}
