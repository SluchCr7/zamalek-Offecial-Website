'use client'
import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ArrowTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // مراقبة السكول
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    isVisible && (
      <button
        className="fixed bottom-6 left-10 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
        onClick={handleScroll}
      >
        <FaArrowUp size={18} />
      </button>
    )
  )
}

export default ArrowTopButton
