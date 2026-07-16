import { useEffect, useRef, useState } from 'react'
import './ScrollCar.css'

import carImage from '../assets/car.png'
import CarSound from './CarSound'

function ScrollCar() {
  const [soundEnabled, setSoundEnabled] = useState(false)

  const carRef = useRef(null)
  const speedValueRef = useRef(null)
  const statusRef = useRef(null)
  const carSoundRef = useRef(null)

  const previousScrollRef = useRef(0)
  const previousTimeRef = useRef(0)

  const displayedSpeedRef = useRef(0)
  const targetSpeedRef = useRef(0)

  const scrollFrameRef = useRef(null)
  const speedFrameRef = useRef(null)
  const speedStopTimeoutRef = useRef(null)
  const lastSpeedUpdateRef = useRef(0)

  useEffect(() => {
    previousScrollRef.current = window.scrollY
    previousTimeRef.current = performance.now()

    const updateCarPosition = () => {
      const scrollTop = window.scrollY

      const documentHeight =
        document.documentElement.scrollHeight

      const viewportHeight = window.innerHeight

      const maximumScroll = Math.max(
        documentHeight - viewportHeight,
        1
      )

      const scrollProgress = Math.min(
        Math.max(scrollTop / maximumScroll, 0),
        1
      )

      const minimumTop = 115
      const carSize = 120
      const bottomSpacing = 20

      const maximumTop = Math.max(
        minimumTop,
        viewportHeight - carSize - bottomSpacing
      )

      const newPosition =
        minimumTop +
        scrollProgress * (maximumTop - minimumTop)

      if (carRef.current) {
        carRef.current.style.transform =
          `translate3d(0, ${newPosition}px, 0)`
      }
    }

    const updateScroll = () => {
      const currentScroll = window.scrollY
      const currentTime = performance.now()

      const scrollDifference = Math.abs(
        currentScroll - previousScrollRef.current
      )

      const timeDifference = Math.max(
        currentTime - previousTimeRef.current,
        1
      )

      const calculatedSpeed = Math.min(
        Math.round(
          (scrollDifference / timeDifference) * 18
        ),
        100
      )

      targetSpeedRef.current = calculatedSpeed

      updateCarPosition()

      previousScrollRef.current = currentScroll
      previousTimeRef.current = currentTime

      clearTimeout(speedStopTimeoutRef.current)

      speedStopTimeoutRef.current = setTimeout(() => {
        targetSpeedRef.current = 0
      }, 80)

      scrollFrameRef.current = null
    }

    const handleScroll = () => {
      if (scrollFrameRef.current !== null) return

      scrollFrameRef.current =
        requestAnimationFrame(updateScroll)
    }

    const handleResize = () => {
      updateCarPosition()
    }

    const animateSpeed = (time) => {
      if (time - lastSpeedUpdateRef.current >= 45) {
        const currentSpeed = displayedSpeedRef.current
        const targetSpeed = targetSpeedRef.current

        if (currentSpeed < targetSpeed) {
          displayedSpeedRef.current = Math.min(
            currentSpeed + 2,
            targetSpeed
          )
        } else if (currentSpeed > targetSpeed) {
          displayedSpeedRef.current = Math.max(
            currentSpeed - 2,
            targetSpeed
          )
        }

        const displayedSpeed = displayedSpeedRef.current

        if (speedValueRef.current) {
          speedValueRef.current.textContent =
            displayedSpeed
        }

        if (statusRef.current) {
          statusRef.current.textContent =
            displayedSpeed > 0 ? 'MOVING' : 'IDLE'
        }

        carSoundRef.current?.setSpeed(displayedSpeed)

        lastSpeedUpdateRef.current = time
      }

      speedFrameRef.current =
        requestAnimationFrame(animateSpeed)
    }

    updateCarPosition()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', handleResize)

    speedFrameRef.current =
      requestAnimationFrame(animateSpeed)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)

      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current)
      }

      if (speedFrameRef.current !== null) {
        cancelAnimationFrame(speedFrameRef.current)
      }

      clearTimeout(speedStopTimeoutRef.current)
      carSoundRef.current?.pause()
    }
  }, [])

  const toggleSound = async () => {
    if (soundEnabled) {
      carSoundRef.current?.pause()
      setSoundEnabled(false)
      return
    }

    const started = await carSoundRef.current?.play()

    if (started) {
      setSoundEnabled(true)
    }
  }

  return (
    <>
      <CarSound ref={carSoundRef} />

      <button
        type="button"
        className={`car-sound-toggle ${
          soundEnabled ? 'car-sound-toggle--active' : ''
        }`}
        onClick={toggleSound}
        aria-label={
          soundEnabled
            ? 'Turn car sound off'
            : 'Turn car sound on'
        }
        title={
          soundEnabled
            ? 'Turn sound off'
            : 'Turn sound on'
        }
      >
        {soundEnabled ? '🔊' : '🔇'}
      </button>

      <div className="scroll-speedometer">
        <span className="scroll-speedometer__route">
          ROUTE
        </span>

        <div className="scroll-speedometer__value">
          <span ref={speedValueRef}>0</span>
          <small>km/h</small>
        </div>

        <span
          ref={statusRef}
          className="scroll-speedometer__status"
        >
          IDLE
        </span>
      </div>

      <div ref={carRef} className="scroll-car">
        <img
          src={carImage}
          alt="Scroll car"
          className="scroll-car__image"
          draggable="false"
        />
      </div>
    </>
  )
}

export default ScrollCar