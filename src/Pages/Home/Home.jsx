import { useEffect, useState } from "react";
import Header from "../ShareComponent/Header";
import LeftNavigation from "../ShareComponent/LeftNavigation";
import Navbar from "../ShareComponent/Navbar";
import RightNavigation from "../ShareComponent/RightNavigation";
import BreakingNews from "./BreakingNews";
import SingleNews from "./SingleNews";

const Home = () => {
  const [news, setNews] = useState([]);
  const loadNews = async () => {
    const response = await fetch("news.json");
    const data = await response.json();
    setNews(data);
  };
  useEffect(() => {
    loadNews();
  }, []);
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid xl:grid-cols-4 grid-cols-1 gap-4">
        <div>
          <LeftNavigation />
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl font-semibold">Dragon news home</h1>
          <div className="mt-5 flex flex-col gap-8">
            {news.map((singleNews) => {
              return (
                <SingleNews key={singleNews?._id} singleNews={singleNews} />
              );
            })}
          </div>
        </div>
        <div>
          <RightNavigation />
        </div>
      </div>
    </div>
  );
};

export default Home;
