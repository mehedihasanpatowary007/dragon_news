import { NavLink } from "react-router-dom";
import UserDefaultImg from "../../assets/user.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    const handleNavColor = () => {
      if (window.scrollY > 200) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };
    window.addEventListener("scroll", handleNavColor);

    return () => {
      window.removeEventListener("scroll", handleNavColor);
    };
  }, []);
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/career", name: "Career" },
  ];
  return (
    <div className={`sticky top-14 flex justify-between items-center transition-colors duration-300 p-4 mt-2 ${navColor ? "bg-gray-200 bg-opacity-85" : ""}`}>
      <ul className="flex items-center justify-end gap-4 w-1/2">
        {navItems.map((item) => {
          return (
            <li key={item?.name} className="text-base text-gray-600">
              <NavLink
                to={item?.path}
                className={({ isActive }) => {
                  return isActive ? "text-black font-bold" : "";
                }}
              >
                {item?.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-2 items-center">
        <span>
          <img className="rounded-full" src={UserDefaultImg} alt="user_default_image" />
        </span>
        <button className="bg-gray-800 text-white px-10 py-2 font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
