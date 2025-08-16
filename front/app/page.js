import Image from "next/image";
// import Hero from '../Components/Hero'
import MatchesLine from "@/Components/MatchesLine";
import News from "@/Components/News";
import Table from "@/Components/Table";
import ZamalekAchievements from "@/Components/Competitions";
import FirstTeam from "@/Components/FirstTeam";
import { FaArrowUp } from "react-icons/fa";
import ZamalekStoreBanner from "@/Components/StoreAd";
import ZamalekKitShowcase from "@/Components/Store";
import ArrowTopButton from "@/Components/ArrowTopButton";
import TeamsSlider from "@/Components/Teams";
import HeroNews from "../Components/Hero";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="overflow-hidden min-h-screen w-full">
      <HeroNews />
      <MatchesLine />
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 bottom-0 z-0 flex min-h-screen w-full items-center justify-center bg-white dark:bg-Black-100">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#ff4d4d_1px,transparent_1px),linear-gradient(to_bottom,#ff4d4d_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#b91c1c_1px,transparent_1px),linear-gradient(to_bottom,#b91c1c_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-Black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />
        </div>
        <News/>
        <Table />
        <TeamsSlider/>
        <ZamalekAchievements/>
        <FirstTeam/>
        <ZamalekKitShowcase/>
        {/* <ZamalekStoreBanner/> */}
      </div>
      <ArrowTopButton/>
    </div>
  );
}
