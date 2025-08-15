import React from "react";
import { zamalekPresidents } from "@/utils/data";
import Image from "next/image";

const PresidentsPage = () => {
  return (
    <div dir="rtl" className="w-full p-6 bg-white max-w-7xl mx-auto">
        <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">رؤساء نادي الزمالك</h2>
            <p className="mt-2 text-gray-600">معلومات عن رجال صنعوا تاريخ النادي</p>
            <div className="mx-auto mt-4 h-1 w-28 bg-red-600 rounded"></div>
        </div>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {zamalekPresidents.map((president, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* صورة الرئيس */}
            <div className="relative w-full h-100 overflow-hidden">
              <Image
                width={500}
                height={500}
                src={president.img.replace("../public", "")}
                alt={president.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
                {president.term}
              </div>
            </div>

            {/* معلومات الرئيس */}
            <div className="flex flex-col flex-1 p-4">
              <h3 className="text-lg font-bold text-red-600 mb-2">{president.name}</h3>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                {president.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresidentsPage;
