import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'

import carSound from '../assets/car-sound.mp3'

const CarSound = forwardRef(function CarSound(_, ref) {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    audio.loop = true
    audio.volume = 0.2
    audio.preload = 'auto'

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  useImperativeHandle(ref, () => ({
    async play() {
      const audio = audioRef.current

      if (!audio) return false

      try {
        await audio.play()
        return true
      } catch (error) {
        console.error('Unable to play car sound:', error)
        return false
      }
    },

    pause() {
      const audio = audioRef.current

      if (!audio) return

      audio.pause()
    },

    setSpeed(speed = 0) {
      const audio = audioRef.current

      if (!audio) return

      const playbackRate = 0.85 + speed / 300

      audio.playbackRate = Math.min(
        Math.max(playbackRate, 0.85),
        1.2
      )
    },
  }))

  return (
    <audio
      ref={audioRef}
      src={carSound}
      loop
      preload="auto"
    />
  )
})

export default CarSound