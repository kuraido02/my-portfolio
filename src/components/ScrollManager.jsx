import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView()
      }, 50)
      return () => clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return null
}

export default ScrollManager