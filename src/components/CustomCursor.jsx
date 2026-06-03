import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 300 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)
  const dotSmoothX = useSpring(dotX, { damping: 40, stiffness: 500 })
  const dotSmoothY = useSpring(dotY, { damping: 40, stiffness: 500 })

  const isHoveredRef = useRef(false)
  const ringRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 18)
      cursorY.set(e.clientY - 18)
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
    }

    const addHover = () => {
      if (ringRef.current) ringRef.current.classList.add('hovered')
    }
    const removeHover = () => {
      if (ringRef.current) ringRef.current.classList.remove('hovered')
    }

    const setInteractiveListeners = () => {
      document.querySelectorAll('a, button, input, textarea, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }

    window.addEventListener('mousemove', move)
    setInteractiveListeners()

    const observer = new MutationObserver(setInteractiveListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x: dotSmoothX, y: dotSmoothY }}
      />
    </>
  )
}
