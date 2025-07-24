import { StarIcon } from "@heroicons/react/16/solid";
import { parseDate } from "../../../../../utils/DateUtils";

function TestimonialCard({ name, tag, description, date, rating, isEven }) {
  return (
    <div className={`min-w-[300px] sm:min-w-[350px] max-w-sm flex-shrink-0 flex flex-col gap-4 rounded-xl border border-white p-4 sm:p-6 bg-[#100E18] text-white`}>
      <h1 className="text-xl sm:text-2xl font-bold">{name}</h1>

      <p className="text-base sm:text-lg font-bold bg-[linear-gradient(93.87deg,_#FB0182_-0.03%,_#D21CE6_36.84%,_#2FACF7_68.1%,_#519FFC_76.95%,_#3934F1_99.98%)] bg-clip-text text-transparent inline-block">
        {tag}
      </p>

      <div className="py-2 sm:py-4">
        <p className="text-sm sm:text-base md:text-lg">{description}</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
        <p className="text-sm sm:text-base">{parseDate(date)}</p>
        <div className="flex items-center gap-1 sm:gap-2">
          <p className="text-sm sm:text-base">{rating}</p>
          <StarIcon className="w-5 h-5 text-yellow-400" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
