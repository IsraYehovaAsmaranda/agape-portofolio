function Card({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="snap-start flex flex-col w-full gap-4">
      <div className="rounded-lg overflow-hidden w-full h-60 sm:h-80 md:h-[450px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Text and Button */}
      <div className="flex flex-col sm:flex-row w-full gap-4 items-start sm:items-center justify-between">
        {/* Title & Description */}
        <div className="flex flex-col w-full sm:w-3/4">
          <h1 className="font-bold text-2xl sm:text-3xl">{title}</h1>
          <p className="text-base sm:text-lg">{description}</p>
        </div>

        {/* Button */}
        <div className="w-full sm:w-1/4">
          <button className="px-6 py-2 border border-gray-400 w-full bg-[#100E18] rounded-3xl hover:cursor-pointer font-bold text-base sm:text-lg hover:bg-gray-700 active:bg-gray-400 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
