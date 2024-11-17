import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};

export default App;
