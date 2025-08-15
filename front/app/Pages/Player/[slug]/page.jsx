'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Calendar, Globe } from 'lucide-react'

export default function PlayerPage() {
  const { slug } = useParams()

  const player = {
    number: 98,
    name: "Oday Dabbagh",
    position: "Centre-Forward",
    mainPosition: "Forward",
    birthDate: "Dec 3, 1998",
    age: 26,
    nationality: "Palestine",
    marketValue: "€1.20m",
    img: "/Players/oday.jpg",
    matches: 15,
    goals: 8,
    assists: 4,
    career: [
      { year: "2018-2020", club: "Al-Wehdat", img: "/Clubs/wehdat.jpg" },
      { year: "2020-2022", club: "Zamalek", img: "/Clubs/zamalek.jpg" },
    ],
    gallery: [
      "/Players/oday.jpg",
      "/Players/oday2.jpg",
      "/Players/oday3.jpg",
    ],
  }

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen font-sans flex flex-col md:flex-row w-full">
      
      {/* صورة اللاعب */}
      <div className="relative bg-black w-full md:w-1/3 flex items-center justify-center p-6">
        {/* خلفية خفيفة */}
        <div className="absolute inset-0">
          <Image 
            src={player.img} 
            alt={player.name} 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* صورة اللاعب الرئيسية */}
        <div className="relative z-10 w-[260px] h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600">
          <Image 
            src={player.img} 
            alt={player.name} 
            fill 
            className="object-cover"
          />
        </div>
      </div>

      {/* بيانات اللاعب */}
      <div className="flex flex-col w-full md:w-2/3">
        <div className="w-full p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* بطاقة معلومات */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-red-600">
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">معلومات اللاعب</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><Calendar className="w-5 h-5"/> {player.birthDate} ({player.age} سنة)</li>
              <li className="flex items-center gap-2"><Globe className="w-5 h-5"/> {player.nationality}</li>
              <li>المركز الأساسي: {player.mainPosition}</li>
              <li>القيمة السوقية: <span className="text-red-600 font-semibold">{player.marketValue}</span></li>
            </ul>
          </div>

          {/* بطاقة الإحصائيات */}
          <div className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6 border-t-4 border-black">
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">إحصائيات الموسم</h2>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-red-50 rounded-xl p-4 hover:scale-105 transition-transform">
                <p className="text-4xl font-bold">{player.matches}</p>
                <p className="text-gray-600">مباريات</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 hover:scale-105 transition-transform">
                <p className="text-4xl font-bold">{player.goals}</p>
                <p className="text-gray-600">أهداف</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 hover:scale-105 transition-transform">
                <p className="text-4xl font-bold">{player.assists}</p>
                <p className="text-gray-600">أسيست</p>
              </div>
            </div>
          </div>
        </div>

        {/* مسيرة اللاعب */}
        <div className="w-full p-6 mt-6">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">مسيرة اللاعب</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {player.career.map((c, idx) => (
              <div key={idx} className="flex-1 bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-2xl transition-shadow">
                <Image src={c.img} alt={c.club} width={60} height={60} className="rounded-full"/>
                <div>
                  <p className="font-semibold">{c.club}</p>
                  <p className="text-gray-500">{c.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* معرض الصور */}
        <div className="w-full p-6 mt-6">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">صور اللاعب</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {player.gallery.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl hover:scale-105 transition-transform shadow-lg">
                <Image src={img} alt={`${player.name}-${idx}`} width={300} height={300} className="object-cover w-full h-full"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
