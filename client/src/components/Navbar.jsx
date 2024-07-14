import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="md:text-lg bg-[#1D84B5] md:px-5 px-3 md:py-3 py-2"
      onClick={() => loginWithRedirect()}
    >
      LOGIN
    </button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="md:text-lg bg-[#1D84B5] md:px-5 px-3 md:py-3 py-2"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      LOGOUT
    </button>
  );
};

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();
  const [modal, setModal] = useState(false);
  return (
    <div className="bg-[#364253] flex flex-row justify-between items-center text-white md:px-10 px-5 py-5">
      {modal && (
        <div className="fixed flex justify-center items-center inset-0 text-white bg-slate-700 bg-opacity-30">
          <div className="flex flex-col bg-[#364253] items-end gap-5 justify-center">
            <div className="flex items-center justify-center">
              <button
                onClick={() => setModal(false)}
                className="bg-red-600 p-2"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col gap-5 pb-10 px-20 justify-center items-center">
              <p className="text-lg">{user && user.email}</p>
              <img src={user.picture} alt="profile" />
              <p className="text-xl">Hi, {user && user.name}!</p>
              <LogoutButton />
            </div>
          </div>
        </div>
      )}

      <div>
        <Link to="/" className="md:text-4xl text-xl font-semibold italic">
          AISSMS FORUM
        </Link>
      </div>
      <div className="flex flex-row md:gap-10 gap-5 items-center">
        {isAuthenticated && (
          <>
            <Link className="md:text-lg" to="/posts">
              POSTS
            </Link>
            <button
              onClick={() => setModal(true)}
              className="h-12 w-12 overflow-hidden rounded-full"
            >
              <img src={user.picture} alt="profile" />
            </button>
          </>
        )}
        {!isAuthenticated && <LoginButton />}
      </div>
    </div>
  );
};

export default Navbar;
