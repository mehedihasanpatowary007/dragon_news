import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleNews = ({ singleNews }) => {
  return (
    <div className="border-2 border-gray-200 rounded-md">
      <div className="flex justify-between items-center bg-gray-200 p-4">
        <div className="flex gap-3 items-center">
          <img
            className="size-10 rounded-full object-cover"
            src={singleNews?.author?.img}
            alt=""
          />
          <span>
            <h4>{singleNews?.author?.name}</h4>
            <p>{singleNews?.author?.published_date}</p>
          </span>
        </div>
        <div className="flex items-center gap-3 text-xl">
          <span>
            <FaRegBookmark />
          </span>
          <span>
            <FaShareAlt />
          </span>
        </div>
      </div>
      <div className="p-4 mt-4  flex flex-col gap-4">
        <h2 className="text-[#403F3F] text-xl font-bold leading-9">
          {singleNews?.title}
        </h2>
        <div>
          <img src={singleNews?.image_url} alt="thumbnail_image" />
        </div>
        <div>
          <p className="text-justify">{singleNews?.details.slice(0, 280)}</p>
          <Link
            to={`/news/${singleNews._id}`}
            className="text-base text-[#FF8C47] font-bold"
          >
            Read more...
          </Link>
        </div>
        <hr className="border border-[#E7E7E7]" />
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center text-xl">
            <span className="text-[#FF8C47] flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p className="text-gray-600">{singleNews?.rating?.number}</p>
          </div>
          <div className="flex items-center gap-2 text-xl text-gray-600">
            <span>
              <FaEye />
            </span>
            <span>{singleNews?.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
