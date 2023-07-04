import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function AccessibleNavigationAnnouncer() {
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    // ignore the /
    if (router.pathname.slice(1)) {
      // make sure navigation has occurred and screen reader is ready
      setTimeout(() => setMessage(`Navigated to ${router.pathname.slice(1)} page.`), 500)
    } else {
      setMessage('')
    }
  }, [router])

  return (
    <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {message}
    </span>
  )
}

export default AccessibleNavigationAnnouncer
