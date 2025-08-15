'use client'
import React from 'react'
import Image from 'next/image'
import TitleSection from '@/Components/TitleSection'

const page = () => {
  const zamalekBildings = [
    {
      name: "الفرع الرئيسي",
      address: "شارع جامعة الدول العربية، حي ميت عقبة، المهندسين، الجيزة، مصر",
      img: "/زمالك ميت عقبه.jpg",
      description:
        "مقر نادي الزمالك التاريخي في ميت عقبة بالمهندسين، يضم ملاعب كرة القدم، ملاعب بطولة مثل حلمي زامورا، ويُعد القلب النابض لجميع أنشطة النادي منذ عقود. يقع على شارع جامعة الدول العربية، ويتميز بتراثه العريق وكونه رمزاً معترفاً به لجماهير القلعة البيضاء.",
    },
    {
      name: "فرع 6 أكتوبر",
      address: "مدينة 6 أكتوبر، محافظة الجيزة، مصر",
      img: "/زمالك 6 أكتوبر.jpg",
      status: "قيد الإنشاء",
      description:
        "فرع نادي الزمالك الجديد بمدينة 6 أكتوبر على مساحة حوالي 128-129 فدانًا، يتم تطويره ليصبح مدينة رياضية متكاملة تشمل ملاعب للناشئين والفريق الأول، ومناطق للألعاب الجماعية (سلة، طائرة، يد)، حمامات سباحة، مدرسة كرة قدم، مسجد، مستشفى رياضي، صالات جمباز وكاراتيه وتنس الطاولة والبادل، بالإضافة لمنطقة تجارية واستثمارية (مول، فنادق، مطاعم). المرحلة الأولى بدأت بأعمال الحفر وإنشاء ملاعب خارجية، وتهدف إلى الانتهاء من المرحلة الأولى خلال السنة ونص، مع مرحلة ثالثة تشمل استاداً سعة تتراوح بين 8-10 آلاف متفرج أو حتى 40 ألف حسب التصاميم.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-10 px-4">

        <TitleSection title={"فروع نادي الزمالك"} subtitle={"مباني النادي"}/>
      <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
        {zamalekBildings.map((branch, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-red-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {
              branch.img ?     
              <div className="relative h-64 w-full">
                <Image
                  src={branch.img}
                  alt={branch.name}
                  fill
                  className="object-cover"
                />
                {branch.status && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    {branch.status}
                  </span>
                )}
              </div>
                : 
                <div className="relative h-64 w-full bg-gray-200 flex items-center justify-center">
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    {branch.status}
                  </span>
                </div>
            }

            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-600 pb-2">
                {branch.name}
              </h2>
              <p className="text-gray-600 text-sm flex items-center gap-2">
                📍 {branch.address}
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                {branch.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
