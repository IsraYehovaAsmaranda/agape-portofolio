import Navbar from "../../components/Navbar";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import LatestProjects from "./components/latest-projects/LatestProjects";
import Testimonials from "./components/testimonials/Testimonials";

const Portfolio = () => {
  return (
    <div className="bg-[#100E18] text-white font-sans overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <LatestProjects />
      <Testimonials />
      <Contacts />
    </div>
  );
};

export default Portfolio;
