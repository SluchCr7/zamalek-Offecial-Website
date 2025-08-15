// 'use client'
// import { useMatch } from '@/app/Context/MartchContext'
// import Image from 'next/image'
// import React from 'react'

// const Match = ({ match }) => {
//   const { matchSelected, setMatchSelected } = useMatch()
//   return (
//     <div
//       onClick={() => setMatchSelected(match)}
//       className="relative min-w-[260px] rounded-2xl bg-gradient-to-b from-white to-gray-50 border border-gray-300 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer overflow-hidden"
//       aria-label={`تفاصيل مباراة الزمالك ضد ${match.opponent} بتاريخ ${match.date}`}
//       role="button"
//       tabIndex={0}
//       onKeyDown={e => { if(e.key === 'Enter' || e.key === ' ') setMatchSelected(match) }}
//     >
//       {/* خلفية الشعار الباهت */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/head.png"
//           alt="Zamalek Theme Background"
//           fill
//           className="object-cover opacity-30"
//           priority
//         />
//       </div>

//       {/* تاريخ المباراة */}
//       <div className="relative bg-red-700 text-white text-center py-2 rounded-t-2xl shadow-sm z-10 border-b border-red-800">
//         <p className="text-sm font-semibold">{match.date}</p>
//       </div>

//       {/* الفرق والنتيجة */}
//       <div className="relative flex items-center justify-between px-5 py-5 z-10 gap-4">
//         {/* الزمالك */}
//         <div className="flex flex-col items-center w-1/3">
//           <Image
//             src="/teams/zamalek.png"
//             alt="Zamalek Logo"
//             width={48}
//             height={48}
//             className="object-contain"
//             priority
//           />
//           {/* <span className="mt-2 font-semibold text-gray-800">الزمالك</span> */}
//         </div>

//         {/* النتيجة أو vs */}
//         <div className="w-1/3 text-center">
//           {match.result ? (
//             <p className="text-2xl font-extrabold text-red-700">{match.result}</p>
//           ) : (
//             <p className="text-lg font-semibold text-gray-500">vs</p>
//           )}
//           <p className="text-xs text-gray-400 mt-1">{match.time}</p>
//         </div>

//         {/* الفريق المنافس */}
//         <div className="flex flex-col items-center w-1/3">
//           <Image
//             src={`/teams/${match.opponentLogo}`}
//             alt={`${match.opponent} Logo`}
//             width={48}
//             height={48}
//             className="object-contain"
//             priority
//           />
//           {/* <span className="mt-2 font-semibold text-gray-800">{match.opponent}</span> */}
//         </div>
//       </div>

//       {/* الاستاد وحالة المباراة */}
//       <div className="relative px-5 pb-4 text-center z-10">
//         <p className="text-xs text-gray-500">{match.stadium}</p>
//         <p
//           className={`text-xs font-semibold mt-1 ${
//             match.status === "Finished"
//               ? "text-green-600"
//               : "text-blue-600"
//           }`}
//         >
//           {match.status}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Match


'use client'
import { useMatch } from '@/app/Context/MartchContext'
import Image from 'next/image'
import { Trophy, MapPin, Home, Plane } from 'lucide-react'
import React from 'react'

const Match = ({ match }) => {
  const { setMatchSelected } = useMatch()

  // تحديد ألوان حالة المباراة
  const getStatusStyles = () => {
    switch (match.status) {
      case 'Finished':
        return 'bg-green-100 text-green-700'
      case 'Live':
        return 'bg-red-100 text-red-700 animate-pulse'
      default:
        return 'bg-blue-100 text-blue-700'
    }
  }

  return (
    <div
      onClick={() => setMatchSelected(match)}
      className="relative min-w-[260px] rounded-2xl bg-white border border-gray-200 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden"
      aria-label={`تفاصيل مباراة الزمالك ضد ${match.opponent} بتاريخ ${match.date}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setMatchSelected(match)
      }}
    >
      {/* رأس البطاقة: التاريخ */}
      <div className="bg-[#b30000] text-white text-center py-1.5 text-sm font-semibold">
        {match.date}
      </div>

      {/* وسط البطاقة: الفرق والنتيجة */}
      <div className="flex items-center justify-between px-4 py-5 gap-3">
        {/* الزمالك */}
        <div className="flex flex-col items-center w-1/3">
          <Image
            src="/teams/zamalek.png"
            alt="Zamalek Logo"
            width={50}
            height={50}
          />
        </div>

        {/* النتيجة أو VS */}
        <div className="flex flex-col items-center w-1/3">
          {match.result ? (
            <p className="text-2xl font-extrabold text-[#b30000]">
              {match.result}
            </p>
          ) : (
            <p className="text-lg font-semibold text-gray-500">vs</p>
          )}
          <p className="text-xs text-gray-400">{match.time}</p>
        </div>

        {/* الفريق المنافس */}
        <div className="flex flex-col items-center w-1/3">
          <Image
            src={`/teams/${match.opponentLogo}`}
            alt={`${match.opponent} Logo`}
            width={50}
            height={50}
          />
        </div>
      </div>

      {/* أسفل البطاقة: تفاصيل إضافية */}
      <div className="px-4 pb-4 space-y-2 text-center">
        {/* الملعب */}
        <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
          <MapPin size={14} />
          <span>{match.stadium}</span>
        </div>

        {/* نوع المباراة */}
        {match.matchType && (
          <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
            {match.matchType === 'Home' ? (
              <>
                <Home size={14} className="text-green-600" />
                <span>Home</span>
              </>
            ) : (
              <>
                <Plane size={14} className="text-blue-600" />
                <span>Away</span>
              </>
            )}
          </div>
        )}

        {/* البطولة */}
        {match.competition && (
          <div className="flex items-center justify-center gap-1 text-xs text-gray-700">
            <Trophy size={14} className="text-yellow-600" />
            <span>{match.competition}</span>
          </div>
        )}

        {/* حالة المباراة */}
        <div
          className={`w-fit mx-auto px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyles()}`}
        >
          {match.status}
        </div>
      </div>
    </div>
  )
}

export default Match
