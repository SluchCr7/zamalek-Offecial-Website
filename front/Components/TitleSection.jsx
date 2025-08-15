import React from 'react'

const TitleSection = ({title , subtitle}) => {
  return (
    <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-600">{subtitle}</p>
        <div className="mx-auto mt-4 h-1 w-28 bg-red-600 rounded"></div>
    </div>
  )
}

export default TitleSection