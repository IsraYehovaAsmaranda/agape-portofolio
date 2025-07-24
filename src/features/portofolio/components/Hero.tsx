const SafetyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.04 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

import personImage from "../../../assets/person.png";

export default function Hero() {
  return (
    <main className="relative pt-16 px-8 md:px-16 z-0">
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 z-0 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-40 w-144 h-144 z-0 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kiri: Gambar */}
        <div className="relative z-10 flex justify-center md:justify-center">
          <img
            src={personImage} // Ganti dengan URL gambar Anda
            alt="Agape Kurnia Asmaranda"
            className="max-w-md w-full"
          />
        </div>

        {/* Kanan: Teks */}
        <div className="relative z-10 text-center md:text-left">
          <p className="text-gray-400 tracking-widest mb-4">
            AGAPE KURNIA ASMARANDA
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Creative <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Design & Photo
            </span>
            <br />
            Video Grapher
          </h1>
          <p className="mt-6 text-gray-400 max-w-lg mx-auto md:mx-0">
            Discover my journey, expertise, and passion for Design & Photo Video
            Graphy. This space showcases my work, achievements, and ongoing
            projects that reflect my commitment to excellence and innovation.
            Whether you're here to explore my skills, connect for
            collaborations, or simply learn more about me, you're in the right
            place.
          </p>
          <button className="mt-8 px-8 py-3 border border-gray-600 rounded-lg hover:cursor-pointer hover:bg-white/10 active:bg-white/50 transition-colors transform hover:scale-105">
            View My Portfolio
          </button>
        </div>
      </div>

      {/* Stats Section (Overlap) */}
      <div className="pt-4 lg:pt-0 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2 w-full max-w-4xl z-20 px-4">
        <div className="bg-gray-900/20 backdrop-blur-md rounded-2xl border border-gray-700 flex flex-wrap justify-center md:justify-between items-center p-4 shadow-2xl">
          <div className="flex items-center gap-3 p-4">
            <p className="text-3xl font-bold">100+</p>
            <p className="text-gray-400">Happy Clients</p>
          </div>

          <div className="h-10 w-px bg-gray-700 hidden md:block"></div>

          <div className="flex items-center gap-3 p-4">
            <SafetyIcon />
            <div>
              <p className="font-bold">100%</p>
              <p className="text-gray-400 text-sm">Safety Privacy</p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-700 hidden md:block"></div>

          <div className="flex items-center gap-3 p-4">
            <StarIcon />
            <div>
              <p className="font-bold">100%</p>
              <p className="text-gray-400 text-sm">Happy Rating</p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-700 hidden md:block"></div>

          <div className="flex items-center gap-3 p-4">
            <p className="text-3xl font-bold">50+</p>
            <p className="text-gray-400">Projects Done</p>
          </div>
        </div>
      </div>
    </main>
  );
}
