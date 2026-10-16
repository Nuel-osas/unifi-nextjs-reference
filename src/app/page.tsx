import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import GridRoom from "@/components/sections/GridRoom";
import History from "@/components/sections/History";
import HexagonTiles from "@/components/sections/HexagonTiles";
import Future from "@/components/sections/Future";
import FutureSlider from "@/components/sections/FutureSlider";
import Partnerships from "@/components/sections/Partnerships";
import Community from "@/components/sections/Community";
import Footer from "@/components/sections/Footer";
import SiteRuntime from "@/components/SiteRuntime";
import LoadingScreen from "@/components/LoadingScreen";
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="main home" id="smooth-wrapper">
        <div className="main-wrap" id="smooth-content">
          <Hero />
          <Vision />
          <GridRoom />
          <History />
          <HexagonTiles />
          <Future />
          <FutureSlider />
          <Partnerships />
          <Community />
          <Footer />
        </div>
      </main>
      <SiteRuntime />
    </>
  );
}
