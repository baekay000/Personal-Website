import Image from "next/image";
// import Intro from "/intro.jpg";
import HeroSection from "@/components/home/herosection";
import AboutMe from "@/components/home/aboutme";
import Experiences from "@/components/home/experiences";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <>
      <div className="bg-[url('../../public/code.png')] bg-no-repeat bg-fixed bg-right bg-cover">
        <div className="flex min-h-screen flex-col container mx-auto px-12 py-4">
          <div className="bg-cover bg-scroll">
              <HeroSection />
              <AboutMe />
              <Experiences />
              <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
