import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Newpost from "./components/Newpost";
import Footer from "./components/Footer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      ),
    },
    {
      path: "/posts",
      element: (
        <div>
          <Navbar />
          <Posts />
          <Footer />
        </div>
      ),
    },
    {
      path: "/posts/newpost",
      element: (
        <div>
          <Navbar />
          <Newpost />
          <Footer />
        </div>
      ),
    },
  ]);

  return (
    <Auth0Provider
      domain="dev-duzhhixj2wnai2n6.us.auth0.com"
      clientId="MWTq6nbvBSMkcon8Frs4qnzyaMQr6Y9E"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  );
};

export default App;
