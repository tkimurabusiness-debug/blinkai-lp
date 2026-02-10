import { useEffect, useState } from 'react'

export function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime = null
    const endNum = parseInt(end, 10)
    if (isNaN(endNum)) {
      setCount(end)
      return
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * endNum))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [end, duration, start])

  return count
}
