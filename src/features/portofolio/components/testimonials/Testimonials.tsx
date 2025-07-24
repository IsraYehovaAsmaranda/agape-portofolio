import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { TestimonialData } from "../../../../data/testimonial";
import TestimonialCard from "./components/TestimonialCard";
import { useRef } from "react";

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div
      id="testimonials"
      className="flex flex-col px-4 py-16 sm:px-6 md:px-10 lg:px-20 gap-12 sm:gap-14 md:gap-16"
    >
      <div className="flex flex-row flex-wrap justify-between">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          What They Say
        </h1>
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={scrollLeft}
            className="rounded-full border hover:cursor-pointer active:bg-white/50 border-white p-3 hover:bg-white/10 transition"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="rounded-full border hover:cursor-pointer active:bg-white/50 border-white p-3 hover:bg-white/10 transition"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-hidden" ref={scrollRef}>
        <div className="flex flex-nowrap gap-6 px-4 py-10 pr-8">
          {TestimonialData.map((testimonial, index) => {
            return (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                tag={testimonial.tag}
                description={testimonial.description}
                date={testimonial.date}
                rating={testimonial.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
