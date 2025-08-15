import React from 'react'
import { zamalekDirectors } from '@/utils/data'
import Image from 'next/image'
import TitleSection from '@/Components/TitleSection'

const Page = () => {
  // نفترض أن بيانات الأعضاء بهذا الشكل في zamalekDirectors:
  // [{ id, name, role, img }, ...]
  // ورئيس النادي هو أول عنصر، نائب الرئيس ثاني، أمين الصندوق ثالث

  const president = zamalekDirectors[0]
  const vicePresident = zamalekDirectors[1]
  const treasurer = zamalekDirectors[2]
  const members = zamalekDirectors.slice(3)

  return (
    <div className='w-full max-w-7xl mx-auto py-10 px-6 flex flex-col items-center'>
      <TitleSection title="مجلس ادارة الزمالك" subtitle="احنا الملوك احنا الزمالك" />

      {/* رئيس النادي */}
      <div className="flex flex-col items-center mb-14">
        <div className="w-[400px] h-[500px] rounded-lg relative overflow-hidden shadow-lg border-4 border-red-700">
          <Image
            src={president.img}
            alt={president.name}
            fill
            className=""
            priority
          />
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-red-700">{president.name}</h3>
        <p className="text-gray-700 text-lg mt-1">{president.position}</p>
      </div>

      {/* نائب الرئيس و أمين الصندوق */}
      <div className="flex flex-col md:flex-row gap-10 mb-14 justify-center w-full max-w-4xl">
        {[vicePresident, treasurer].map(member => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="w-[400px] h-[500px] relative rounded-lg overflow-hidden shadow-md border-2 border-red-600">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className=""
                priority
              />
            </div>
            <h4 className="mt-3 text-xl font-semibold text-red-600">{member.name}</h4>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>

      {/* أعضاء المجلس */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {members.map(member => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="w-[300px] h-[400px] relative rounded-lg overflow-hidden shadow-md border border-red-500">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className=""
                priority
              />
            </div>
            <h5 className="mt-3 text-lg font-semibold text-red-500">{member.name}</h5>
            <p className="text-gray-600 text-center">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
