import { useNavigate, useParams } from "react-router-dom";
import Header from "../ShareComponent/Header";
import RightNavigation from "../ShareComponent/RightNavigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
    const navigate = useNavigate()
  const { _id } = useParams();
  const [singleNews, setSingleNews] = useState({})
  console.log(singleNews)
  useEffect(()=>{
    fetch("../../../public/news.json")
      .then((res) => res.json())
      .then((data) => {
        const findSingleNews = data.find(
          (singleData) => singleData._id === _id
        );
        setSingleNews(findSingleNews);
      })
      .catch((err) => console.log(err));
  },[])
  return (
    <div className="w-[80%] mx-auto">
      <Header />
      <div className="grid grid-cols-5 gap-10 mt-10">
        <div className="col-span-3">
          <h1 className="text-2xl font-bold">Dragon News</h1>
          <div className="mt-5  shadow border-2 border-gray-200 p-4 rounded-md">
            <img
              className="w-full"
              src={singleNews?.image_url}
              alt="thumbnail_image"
            />
            <p className="mt-5 text-justify">{singleNews?.details}</p>
            <button onClick={()=> navigate(-1)} className="bg-[#D72050] flex items-center gap-2 text-white px-4 py-1 rounded mt-3">
              <span>
                <FaArrowLeft />
              </span>
              <span>All News</span>
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <RightNavigation />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
