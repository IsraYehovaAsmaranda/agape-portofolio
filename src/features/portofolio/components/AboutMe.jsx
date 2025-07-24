import imagePlaceholder from "../../../assets/personPlaceholder.jpg";

function AboutMe() {
  return (
    <div id="me" className="bg-[#292929] flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-20 gap-16 rounded-b-[220px]">
      
      {/* Teks Bagian Atas */}
      <div className="max-w-5xl flex flex-col items-center gap-8 text-white text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">About Me</h1>
        <p className="text-base sm:text-lg leading-relaxed">
          Hi, I’m Agape Kurnia Asmaranda also known as Angga, passionate about Design 
          and specializing in Graphic Design, Photo Videography, etc. I thrive on turning 
          ideas into impactful design and have achieved many satisfactory results along 
          the way. Outside of work, I enjoy Photography, always seeking inspiration and 
          new challenges. Let’s connect and create something great!
        </p>

        {/* Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full border border-gray-500 py-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl sm:text-5xl">7+</h1>
            <p className="text-lg sm:text-xl font-semibold">Years Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl sm:text-5xl">100+</h1>
            <p className="text-lg sm:text-xl font-semibold">World Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl sm:text-5xl">50+</h1>
            <p className="text-lg sm:text-xl font-semibold">Projects Done</p>
          </div>
        </div>
      </div>

      {/* Gambar Bawah */}
      <div className="w-full h-64 sm:h-96 md:h-[500px] overflow-hidden rounded-b-[220px]">
        <img
          src={imagePlaceholder}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default AboutMe;
