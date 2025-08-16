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
