'use client'
import { useMatch } from '@/app/Context/MartchContext'
import Image from 'next/image'
import React from 'react'
import { CiCalendarDate, CiTimer } from "react-icons/ci"
import { MdOutlineStadium, MdOutlineLocationCity } from "react-icons/md"
import { GiWhistle } from "react-icons/gi"
import { GrStatusGood } from "react-icons/gr"
import { motion, AnimatePresence } from "framer-motion"

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 50, scale: 0.9 }
}

const MatchViewer = () => {
  const { matchSelected, setMatchSelected } = useMatch()

  return (
    <AnimatePresence>
      {Object.keys(matchSelected).length > 0 && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setMatchSelected({})}
          aria-modal="true"
          role="dialog"
          aria-labelledby="match-modal-title"
        >
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 mx-4 md:mx-0"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            {/* خلفية شفافة */}
            <div
              className="absolute inset-0 bg-center rounded-3xl bg-no-repeat bg-cover opacity-40 pointer-events-none"
              style={{ backgroundImage: "url('/head.png')" }}
            />
            {/* زر الإغلاق */}
            <button
              onClick={() => setMatchSelected({})}
              aria-label="Close match details"
              className="absolute top-5 right-5 text-gray-500 hover:text-red-600 text-3xl font-bold transition-colors"
            >
              &times;
            </button>

            {/* خلفية الشعار الباهت */}
            <div className="absolute inset-0 -z-10 opacity-20">
              <Image
                src="/head.png"
                alt="Zamalek Theme"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>

            {/* العنوان */}
            <h2
              id="match-modal-title"
              className="text-center text-2xl font-extrabold mb-8 text-gray-900 select-none"
            >
              تفاصيل المباراة
            </h2>

            {/* فرق المباراة */}
            <div className="flex items-center justify-between mb-8 gap-6">
              {/* الزمالك */}
              <div className="flex flex-col items-center w-1/3">
                <Image
                  src="/teams/zamalek.png"
                  alt="Zamalek Logo"
                  width={72}
                  height={72}
                  priority
                />
                <p className="mt-3 font-bold text-lg text-gray-900 select-text">الزمالك</p>
              </div>

              {/* النتيجة أو VS */}
              <div className="flex flex-col items-center w-1/3">
                {matchSelected.result ? (
                  <p className="text-4xl font-extrabold text-red-700 select-text">
                    {matchSelected.result}
                  </p>
                ) : (
                  <p className="text-2xl font-semibold text-gray-600 select-text">VS</p>
                )}
                <p className="text-gray-500 text-sm mt-1 select-text">{matchSelected.time}</p>
              </div>

              {/* الفريق الخصم */}
              <div className="flex flex-col items-center w-1/3">
                <Image
                  src={`/teams/${matchSelected.opponentLogo}`}
                  alt={`${matchSelected.opponent} Logo`}
                  width={72}
                  height={72}
                  priority
                />
                <p className="mt-3 font-bold text-lg text-gray-900 select-text">{matchSelected.opponent}</p>
              </div>
            </div>

            {/* أيقونات المعلومات فقط */}
            <div className="grid grid-cols-6 gap-6 justify-center text-gray-700 text-2xl select-none">
              <div title={`${matchSelected.date}`} className="flex justify-center items-center cursor-default hover:text-red-600 transition-colors">
                <CiCalendarDate />
              </div>
              <div title={`${matchSelected.time}`} className="flex justify-center items-center cursor-default hover:text-red-600 transition-colors">
                <CiTimer />
              </div>
              <div title={`${matchSelected.stadium}`} className="flex justify-center items-center cursor-default hover:text-red-600 transition-colors">
                <MdOutlineStadium />
              </div>
              <div title={`${matchSelected.city}`} className="flex justify-center items-center cursor-default hover:text-red-600 transition-colors">
                <MdOutlineLocationCity />
              </div>
              <div title={`${matchSelected.referee || "لم يتم الإعلان بعد"}`} className="flex justify-center items-center cursor-default hover:text-red-600 transition-colors">
                <GiWhistle />
              </div>
              <div title={`${matchSelected.status}`} className="flex justify-center items-center cursor-default hover:text-red-600 transition-colors">
                <GrStatusGood />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MatchViewer
