import agapeLogo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full px-8 md:px-16 py-4 bg-[#100E18] backdrop-blur-lg border-b border-gray-800">
      <div className="flex items-center justify-between">
        <img src={agapeLogo} alt="Agape Logo" className="h-5" />
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#me"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Project
          </a>
        </div>
        <div className="relative hidden md:inline-block">
          {/* Gradient border belakang */}
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 opacity-80"></div>

          {/* Tombol utama */}
          <button className="relative z-10 px-6 py-2 bg-[#100E18] rounded-lg hover:cursor-pointer hover:bg-gray-700 active:bg-gray-400 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
