import Marquee from "react-fast-marquee";
import { BiFootball } from "react-icons/bi";
const BreakingNews = () => {
    return (
      <div className="sticky top-0 flex w-full bg-gray-100 p-2 mt-5">
        <button className="bg-[#d72151] text-white font-semibold py-1 px-5">
          Latest
        </button>
        <Marquee pauseOnHover autoFill>
          <p className="me-5 flex gap-1 items-center">
            <BiFootball className="text-[#d72151] text-xl" />
            <span>Match Highlights: Germany vs Spain — as it happened !</span>
          </p>
        </Marquee>
      </div>
    );
};

export default BreakingNews;