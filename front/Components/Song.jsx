'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export default function ZamalekSongButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio
        ref={audioRef}
        src="/zamaleksong.mp3"
        preload="auto"
      />
      
      <motion.button
        onClick={togglePlay}
        className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg border-2 
          ${isPlaying ? 'bg-red-600 border-white' : 'bg-white border-red-600'}
          text-white`}
        animate={isPlaying ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.8, repeat: isPlaying ? Infinity : 0 }}
      >
        {isPlaying ? <Volume2 size={28} color="white" /> : <VolumeX size={28} color="red" />}
      </motion.button>
    </div>
  )
}
