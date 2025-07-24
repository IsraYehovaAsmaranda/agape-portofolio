import weddingCeremony from "../../../../assets/WeddingCeremony.jpg";
import dishcraft from "../../../../assets/dishcraft.png";
import urrofi from "../../../../assets/urrofi.png";
import churchLogo from "../../../../assets/church-logo.jpg";
import Card from "./components/Card";

function LatestProjects() {
  return (
    <div id="projects" className="relative flex flex-col px-4 py-16 sm:px-6 md:px-10 lg:px-20 gap-12 sm:gap-14 md:gap-16">
      {/* Geometric shape background */}
      <div className="absolute top-40 right-4 w-[30rem] h-[30rem] z-0 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>

      <div className="relative z-10 space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Latest Project
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto md:mx-0">
          Here, you’ll find a collection of projects that showcase my skills,
          creativity, and dedication. Each project reflects my passion for
          delivering quality and innovation.
        </p>
      </div>

      {/* Projects */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <Card
          image={weddingCeremony}
          title={"Wedding Ceremony"}
          description={"The Wedding Ceremony of Bram & Valent"}
        />
        <Card
          image={dishcraft}
          title={"DishCraft"}
          description={"An AI Based recipe cookbook App"}
        />
        <Card
          image={urrofi}
          title={"URROFI Color Grade"}
          description={"A Unique color grading style for urrofis car"}
        />
        <Card
          image={churchLogo}
          title={"Church Logo Screen"}
          description={
            "A Dedicated Logo Screen for a certain church in Pasuruan"
          }
        />
      </div>
    </div>
  );
}

export default LatestProjects;
