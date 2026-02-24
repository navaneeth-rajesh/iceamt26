import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutCollege } from "./components/AboutCollege";
import { AboutConference } from "./components/AboutConference";
import { Timeline } from "./components/Timeline";
import { CallForPapers } from "./components/CallForPapers";
import { Committee } from "./components/Committee";
import { Registration } from "./components/Registration";
import { Venue } from "./components/Venue";
import { Footer } from "./components/Footer";

export function Home() {
  return (
    <div className="font-sans bg-white text-slate-900 overflow-x-hidden scroll-smooth selection:bg-[#C6A75E] selection:text-white">
      <Navbar />
      <Hero />
      <AboutCollege />
      <AboutConference />
      <Timeline />
      <CallForPapers />
      <Committee />
      <Registration />
      <Venue />
      <Footer />
    </div>
  );
}
