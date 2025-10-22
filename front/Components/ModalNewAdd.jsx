'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ImagePlus } from 'lucide-react'
import { useNews } from '@/app/Context/NewsContext'

export default function AddNewsModal() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
    const {addNews , openModal , setOpenModal}= useNews()
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImage(url)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // هنا يمكنك إضافة لوجيك الحفظ أو النشر
    console.log({ title, content, image })
    addNews(title , content , image)
    setTitle('')
    setContent('')
    setImage(null)
    setOpenModal(false)
  }

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* زر الإغلاق */}
            <button
              onClick={()=> setOpenModal(false)}
              className="absolute top-4 left-4 text-gray-500 hover:text-red-600 transition"
            >
              <X size={26} />
            </button>

            {/* العنوان */}
            <div className="text-center py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">
                📰 إضافة خبر جديد
              </h2>
              <p className="text-gray-500 mt-1 text-sm">
                شارك آخر أخبار النادي معنا بطريقة احترافية
              </p>
            </div>

            {/* النموذج */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* رفع الصورة */}
              <div className="w-full h-60 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center relative group overflow-hidden">
                {image ? (
                  <>
                    <Image
                      src={image}
                      alt="Selected"
                      fill
                      className="object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <label
                        htmlFor="imageUpload"
                        className="cursor-pointer bg-white/90 text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white"
                      >
                        تغيير الصورة
                      </label>
                    </div>
                  </>
                ) : (
                  <label
                    htmlFor="imageUpload"
                    className="flex flex-col items-center justify-center cursor-pointer text-gray-400 hover:text-red-700 transition"
                  >
                    <ImagePlus size={42} />
                    <span className="mt-2 font-medium">اختر صورة الخبر</span>
                    <span className="text-xs text-gray-400 mt-1">
                      (PNG, JPG, JPEG)
                    </span>
                  </label>
                )}
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              {/* العنوان */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  العنوان
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="أدخل عنوان الخبر..."
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  required
                />
              </div>

              {/* المحتوى */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  المحتوى
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="5"
                  placeholder="اكتب تفاصيل الخبر هنا..."
                  className="w-full border border-gray-300 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  required
                />
              </div>

              {/* الأزرار */}
              <div className="flex justify-end gap-4 pt-2">
                <button
                  type="button"
                  onClick={()=> setOpenModal(false)}
                  className="px-5 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                >
                  إلغاء
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-red-700 text-white font-semibold shadow-md hover:bg-red-800 transition"
                >
                  نشر الخبر
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
