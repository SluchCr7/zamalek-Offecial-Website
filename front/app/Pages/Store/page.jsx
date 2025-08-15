'use client'
import Image from 'next/image'

export default function StoreComingSoon() {
  return (
    <div dir="rtl" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      
      {/* Logo */}
      <div className="mb-8">
        <Image 
          src="/zsc.png" 
          alt="Zamalek Logo" 
          width={120} 
          height={120} 
          className="mx-auto"
        />
      </div>

      {/* Main message */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 mb-4 animate-pulse">
        المتجر قادم قريبًا!
      </h1>
      <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        نحن نعمل على تجهيز متجر نادي الزمالك ليقدم لك أفضل المنتجات الرسمية، من تيشرتات وإكسسوارات وأدوات رياضية. 
        ترقبوا قريبًا إطلاق المتجر مع تجربة تسوق احترافية ومميزة.
      </p>

      {/* Coming soon image
      <div className="relative w-full max-w-xl h-80 md:h-96 mb-8">
        <Image 
          src="/store-coming-soon.jpg" 
          alt="Store Coming Soon" 
          fill 
          className="object-cover rounded-2xl shadow-xl"
        />
      </div> */}

      {/* Call to action */}
      <div className="flex flex-col md:flex-row gap-4">
        <a 
          href="#"
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition"
        >
          تابعنا للمزيد من التحديثات
        </a>
        <a 
          href="/"
          className="px-6 py-3 bg-white border border-red-600 text-red-600 font-semibold rounded-xl shadow-lg hover:bg-red-50 transition"
        >
          العودة للرئيسية
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm">
        © 2025 نادي الزمالك. كل الحقوق محفوظة.
      </footer>
    </div>
  )
}
