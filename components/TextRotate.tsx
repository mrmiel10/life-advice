"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

//const text = ['Syntax UI', 'UI Library', 'Text Rotate']

export const TextRotate = ({text}:{text:string[]}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0
        return state + 1
      })
    }, 10000)
    return () => clearInterval(id)
  }, [])

  return (
    // <div className="relative flex w-full items-center justify-center py-8 text-center">
      <AnimatePresence>
        <motion.h4
          className="absolute cursor-pointer text-lg  font-semibold tracking-tight"
        //   className="absolute cursor-pointer text-3xl font-semibold tracking-tight text-red-500"
          key={index}
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -20, opacity: 0, scale: 0.8 }}
          transition={{ ease: 'easeInOut', delay: 0.5, duration: 0.9 }}
        //   whileHover={{ scale: 1.1 }}
        >
          {text[index]}
        </motion.h4>
      </AnimatePresence>
    // </div>
  )
}

export default TextRotate
