
'use client'

import React from 'react'
import { zscTeams } from '@/utils/data'
import TitleSection from './TitleSection'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { Carousel } from './ui/carousel'
export default function TeamsSlider() {
  const slideDataTeams = [

    {title : "Football Men" , src : "/squads/foot-min.png"  , open : true },
    { title: "Football Women", src: "/squads/football-min.png" , open : false},
    { title: "Basketball Men", src: "/squads/basket-min.png" , open : false},
    { title: "Volleyball Men", src: "/squads/volly-min.png", open : false},
    { title: "Volleyball Women", src: "/squads/vollyzsc.png", open : false},
    { title: "Handball Men", src: "/squads/hand-min.png", open : false},
    { title: "Handball Women", src: "/squads/handball-min.png", open : false },
  ];
  return (
    <div classtitle="relative overflow-hidden w-full min-h-screen py-20">
      <TitleSection title="الفرق الرياضيه" subtitle="فرق نادي الزمالك الرياضيه" />
      <Carousel slides={slideDataTeams} />
    </div>
  )
}
