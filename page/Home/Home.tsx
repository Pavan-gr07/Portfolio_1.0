import { Navbar } from "@/layout/Navbar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import Projects from "./Projects";
import ChatSection from "@/components/custom/chat";
import { Experience } from "./Experience";
import Contact from "./Contact";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <ChatSection />
      <Experience />
      <Contact />
    </>
  );
};
