
'use client'

import React from 'react'
import { zscTeams } from '@/utils/data'
import TitleSection from './TitleSection'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { Carousel } from './ui/carousel'
export default function TeamsSlider() {
  return (
    <section className="py-16 text-black" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <TitleSection title="فرق نادي الزمالك الرياضية" subtitle="اكتشف جميع الفرق الرياضية التابعة للنادي عبر معرض الصور" />
        {/* <InfiniteMovingCards
          items={zscTeams}
          direction="left"
          // speed="fast"
          pauseOnHover={true}
        /> */}
        <Carousel slides={zscTeams} />
      </div>
    </section>
  )
}
