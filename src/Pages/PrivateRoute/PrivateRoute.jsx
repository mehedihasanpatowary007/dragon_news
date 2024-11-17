import { useContext } from "react";
import { AuthInfoContext } from "../../Context/AuthInfo";
import { Navigate, useLocation } from "react-router-dom";
import { Audio } from "react-loader-spinner";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthInfoContext);
  const location = useLocation()
  if (loading) {
    return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"} />;
  }
};

export default PrivateRoute;
