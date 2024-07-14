import bg from "../bg.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="bg-[#364253] text-white md:px-8 px-5 md:py-4 py-3 md:text-lg"
      onClick={() => loginWithRedirect()}
    >
      REGISTER NOW!
    </button>
  );
};

const Homec21 = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="bg-[#1D84B5] flex flex-row max-md:py-16">
      {isAuthenticated ? (
        <div className="md:w-1/2 flex flex-col justify-center md:items-start items-center gap-10 md:px-10 px-5">
          <p className="text-white md:text-4xl text-2xl font-semibold">
            THANKS FOR JOINING FORUM!
          </p>
          <p className="text-[#364355] leading-8 md:leading-10 md:text-2xl text-xl italic">
            Welcome back to our AISSMS Forum! As a registered member of our
            community, you now have full access to view and participate in
            discussions. Join existing topics, start new discussions, and engage
            with other members to contribute to our vibrant community. We're
            glad to have you as a part of our growing community, and we look
            forward to your active participation!
          </p>
          {isAuthenticated ? null : <LoginButton />}
        </div>
      ) : (
        <div className="md:w-1/2 flex flex-col justify-center md:items-start items-center gap-10 md:px-10 px-5">
          <p className="text-white md:text-4xl text-2xl font-semibold">
            JOIN OUR FORUM !
          </p>
          <p className="text-[#364355] leading-8 md:leading-10 md:text-2xl text-xl italic">
            Talk about anything that's on your mind and see what others think.
            As a guest to our forum you are only able to view post analysis. When you
            register with the Forumix forum you can view posts and join in with topics, start
            new topics and generally be a part of the first level of our
            community.
          </p>

          {isAuthenticated ? null : <LoginButton />}
        </div>
      )}

      <div className="w-1/2 max-md:hidden">
        <img className="h-full w-full" src={bg} alt="background"></img>
      </div>
    </div>
  );
};

export default Homec21;
