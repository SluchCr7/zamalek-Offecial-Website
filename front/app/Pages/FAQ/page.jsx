'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { sections } from '@/utils/data'


const FAQ = () => {
  const [active, setActive] = useState({ section: null, question: null })

  const toggle = (sectionIndex, questionIndex) => {
    if (
      active.section === sectionIndex &&
      active.question === questionIndex
    ) {
      setActive({ section: null, question: null })
    } else {
      setActive({ section: sectionIndex, question: questionIndex })
    }
  }

  return (
    <div dir='rtl' className="min-h-screen bg-gradient-to-br w-full from-white to-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">الأسئلة الشائعة</h1>
        <p className="text-gray-600 text-lg">
          كل ما تحتاج معرفته عن نادي الزمالك في مكان واحد 💬
        </p>
      </div>

      <div className="space-y-10 w-full">
        {sections.map((section, sIndex) => (
          <div
            key={sIndex}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-red-600 text-white py-3 px-6 text-xl font-bold">
              {section.title}
            </div>
            <div className="divide-y divide-gray-200">
              {section.questions.map((item, qIndex) => {
                const isOpen =
                  active.section === sIndex && active.question === qIndex
                return (
                  <div
                    key={qIndex}
                    onClick={() => toggle(sIndex, qIndex)}
                    className="cursor-pointer px-6 py-5 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {item.q}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiChevronDown className="text-red-600 text-xl" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 mt-3 leading-relaxed"
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600">
          لم تجد إجابتك؟ <span className="font-semibold text-red-600 cursor-pointer hover:underline">تواصل معنا مباشرة</span>
        </p>
      </div>
    </div>
  )
}

export default FAQ
