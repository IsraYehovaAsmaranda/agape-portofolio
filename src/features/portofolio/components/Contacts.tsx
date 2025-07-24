import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/16/solid";
import instagramIcon from "../../../assets/instagram.svg";
import whatsappIcon from "../../../assets/whatsapp.svg";

function Contacts() {
  return (
    <div
      id="contactus"
      className="relative flex flex-col lg:flex-row justify-between flex-wrap gap-y-12 gap-x-10 px-4 sm:px-6 md:px-10 lg:px-20 pt-8 pb-16"
    >
      {/* BACKGROUND BLOB */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 z-0 -translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob" />

      {/* QUICK LINKS */}
      <div className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-auto z-10">
        <h1 className="text-3xl sm:text-4xl font-bold">QUICK LINKS</h1>
        <div className="flex flex-col gap-2">
          <a href="#me" className="text-lg">About Me</a>
          <a href="#projects" className="text-lg">Projects</a>
          <a href="#testimonials" className="text-lg">Testimonials</a>
          <a href="#contactus" className="text-lg">Contact Us</a>
        </div>
      </div>

      {/* CONTACT US */}
      <div className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-auto z-10">
        <h1 className="text-3xl sm:text-4xl font-bold">CONTACT US</h1>
        <div className="flex flex-col gap-3 items-center lg:items-start">
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="size-5 text-pink-500" />
            <p>Ikanhidupdanterbang@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="size-5 text-pink-500" />
            <p>Perum Keboncandi Permai, Karangsentul Gondangwetan</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="size-5 text-pink-500" />
            <p>+62 821-3545-9508</p>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-auto z-10">
        <h1 className="text-3xl sm:text-4xl font-bold">SUBSCRIBE</h1>
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <div className="flex w-full max-w-md overflow-hidden rounded-full bg-[#1B293A]">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-6 py-4 bg-[#1B293A] text-white placeholder-white/70 focus:outline-none"
            />
            <button className="bg-[#FB0182] text-white font-semibold px-6 py-4 rounded-r-full hover:bg-pink-600 transition-colors">
              Subscribe
            </button>
          </div>
          <div className="flex flex-row gap-4">
            <a href="#" target="_blank" className="rounded-full border border-[#FB0182] p-4 hover:bg-pink-200 active:bg-pink-500 transition">
              <img src={instagramIcon} alt="Instagram" className="size-5" />
            </a>
            <a href="#" target="_blank" className="rounded-full border border-[#FB0182] p-4 hover:bg-pink-200 active:bg-pink-500 transition">
              <img src={whatsappIcon} alt="Whatsapp" className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
