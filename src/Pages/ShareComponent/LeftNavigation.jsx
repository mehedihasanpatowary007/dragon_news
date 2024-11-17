import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavigation = () => {
  const [categories, setCategories] = useState();
  const loadCategories = async () => {
    const res = await fetch("categories.json");
    const data = await res.json();
    setCategories(data);
  };
  useEffect(() => {
    loadCategories();
  }, []);
  return (
    <div className="sticky top-36">
      <h3 className="text-2xl font-semibold">All Categories</h3>
      <ul className="ps-4 pt-5 flex flex-col gap-4">
        {categories?.map((singleCategories) => {
          return (
            <li key={singleCategories?.id}>
              <NavLink
              to={singleCategories?.path}
                className={({ isActive }) => {
                  return isActive ? "font-bold text-black bg-gray-200" : "text-gray-600";
                }}
              >
                {singleCategories?.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftNavigation;
