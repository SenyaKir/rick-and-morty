'use client'

import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()

  return (
    <button className="episode-detail__header-back" onClick={() => router.back()}>
      Back
    </button>
  )
}