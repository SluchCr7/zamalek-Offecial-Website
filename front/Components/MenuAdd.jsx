'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText, ImagePlus, Video } from 'lucide-react'

export default function AddMenuModalAll({ open, onClose }) {
    const {openModal , setOpenModal} = useNews()
    const menuItems = [
        { id: 'news', icon: <FileText size={30} />, label: 'إضافة خبر' , onClick: () => setOpenModal(true) },
        { id: 'photo', icon: <ImagePlus size={30} />, label: 'إضافة صورة'   },
        { id: 'video', icon: <Video size={30} />, label: 'إضافة فيديو' },
    ]
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* المحتوى */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* زر الإغلاق */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 text-gray-500 hover:text-red-700 transition"
            >
              <X size={26} />
            </button>

            {/* العنوان */}
            <div className="text-center py-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                🎯 اختر ما تريد إضافته
              </h2>
              <p className="text-gray-500 mt-1 text-sm">
                قم باختيار نوع المحتوى الذي ترغب بإضافته
              </p>
            </div>

            {/* الخيارات */}
            <div className="p-6 flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255,255,255,0.6)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                  className="flex items-center gap-4 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-md p-4 text-gray-800 text-lg font-semibold"
                  onClick={item.onClick}
                >
                  <div className="bg-red-700 text-white p-3 rounded-xl shadow-md">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
