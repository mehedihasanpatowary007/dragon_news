import { Link, NavLink } from "react-router-dom";
import UserDefaultImg from "../../assets/user.png";
import { useContext, useEffect, useState } from "react";
import { AuthInfoContext } from "../../Context/AuthInfo";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const { user, logOut } = useContext(AuthInfoContext);
  console.log(user)

  const handleLogout = () => {
    logOut()
      .then(() => {
        //logout successfully
      })
      .catch((err) => console.log(err));
  };

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
    <div
      className={`sticky top-14 flex justify-between items-center transition-colors duration-300 p-4 mt-2 ${
        navColor ? "bg-gray-200 bg-opacity-85" : ""
      }`}
    >
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
          <label htmlFor="profileImg">
            <img
              className="relative  rounded-full object-cover size-9 border border-black cursor-pointer"
              src={`${user ? user.photoURL : UserDefaultImg}`}
              alt="user_default_image"
            />
          </label>
          <input
            className="peer hidden"
            type="checkbox"
            id="profileImg"
            name="profileImg"
          />
          {user && (
            <label
              className="opacity-0 peer-checked:opacity-100 duration-500"
              htmlFor="profileImg"
            >
              <div className="absolute right-0 top-20 bg-gray-700 p-4 rounded-md text-gray-300">
                <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                <p className="text-base">{user?.email}</p>
                <button
                  onClick={handleLogout}
                  className="text-3xl mt-5 flex justify-end w-full"
                >
                  <FaSignOutAlt />
                </button>
                <div className="absolute size-5 bg-gray-700 rotate-45 -top-2 right-6"></div>
              </div>
            </label>
          )}
        </span>
        {!user && (
          <Link
            to={"/login"}
            className="bg-gray-800 text-white px-10 py-2 font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
