import React, {useEffect, useState} from 'react'

const Timer = ({startTime}) => {
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [startTime])

  return <span>Time: {Math.floor(elapsedTime / 1000)}s</span>
}

export default Timer
