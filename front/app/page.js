import Image from "next/image";
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
import PartnershipAd from "@/Components/PartnershipAd";
import MatchesSlider from "@/Components/MatchesLine";
import AddMenuModalAll from "@/Components/MenuAdd";

export default function Home() {
  return (
    <div className="overflow-hidden min-h-screen w-full">
      <HeroNews />
      <MatchesSlider />
      <div className="w-full relative">
        <News />
        <Table />
        <TeamsSlider />
        <ZamalekAchievements />
        <FirstTeam />
        <PartnershipAd />
        <ZamalekKitShowcase />
      </div>
      <ArrowTopButton />
    </div>
  );
}
