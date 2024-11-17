import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Qzone1 from '../../assets/swimming.png'
import Qzone2 from '../../assets/class.png'
import Qzone3 from '../../assets/playground.png'
import { useContext } from "react";
import { AuthInfoContext } from "../../Context/AuthInfo";


const RightNavigation = () => {
  const {user} = useContext(AuthInfoContext)
    return (
      <div>
        {/* log in with  */}
        {!user && (
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Login with</h2>
            <div className="flex flex-col gap-3 items-center w-full">
              <button className="flex gap-1 items-center justify-center border-2 border-blue-500 text-blue-500 w-full py-1 rounded-lg">
                <FaGoogle />
                <span>Login with Google</span>
              </button>
              <button className="flex gap-1 items-center justify-center border-2 border-black w-full py-1 rounded-lg">
                <FaGithub />
                <span>Login with github</span>
              </button>
            </div>
          </div>
        )}

        {/* find us on  */}
        <div className="mt-8 w-full">
          <h3 className="text-2xl font-bold">Find us on</h3>
          <div className="mt-4 border border-gray-400 rounded-md">
            <Link
              to={"https://www.facebook.com/mehedi.hasan.patowary07"}
              className="flex items-center gap-2 text-xl text-gray-600 hover:text-orange-500 duration-300 cursor-pointer border-b border-gray-400 p-4"
            >
              <span className="bg-gray-200 p-2 rounded-full">
                <FaFacebook />
              </span>
              <span>Facebook</span>
            </Link>
            <Link
              to={"https://x.com/mehedipatowary7"}
              className="flex items-center gap-2 text-xl text-gray-600 hover:text-orange-500  border-b border-gray-400 p-4 duration-300"
            >
              <span className="bg-gray-200 p-2 rounded-full">
                <FaTwitter />
              </span>
              <span>Twitter</span>
            </Link>
            <Link
              to={"https://www.instagram.com/mdmehedypatowary/"}
              className="flex items-center gap-2 text-xl text-gray-600 hover:text-orange-500 p-4 duration-300"
            >
              <span className="bg-gray-200 p-2 rounded-full">
                <FaInstagram />
              </span>
              <span>Instagram</span>
            </Link>
          </div>
        </div>

        {/* Q zone ? */}
        <div className="px-1 py-3 mt-10 bg-[#F3F3F3]">
          <h3 className="text-2xl font-bold ps-3">Q zone</h3>
          <img
            className="w-full"
            src={Qzone1}
            alt="children swim in the swimming pool"
          />
          <img className="w-full" src={Qzone2} alt="class room" />
          <img className="w-full" src={Qzone3} alt="playground" />
        </div>
      </div>
    );
};

export default RightNavigation;