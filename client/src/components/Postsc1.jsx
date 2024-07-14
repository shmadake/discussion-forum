import { Link } from "react-router-dom";

const Postsc1 = () => {
  return (
    <div className="bg-[#364253] text-white md:h-[87.8vh] h-[80vh] md:py-24 w-full flex flex-col justify-center items-center md:gap-10 gap-6">
      <div className="flex flex-col justify-center items-center md:gap-5 gap-3">
        <p className="md:text-5xl text-2xl font-semibold text-white">
          START NEW DISCUSSION
        </p>
        <p className="md:text-xl text-lg italic text-white">
          Let's delve into the complexities together!
        </p>
      </div>

      <Link
        className="bg-[#1D84B5] text-white md:px-8 px-5 md:py-4 py-3 md:text-lg"
        to="/posts/newpost"
      >
        CLICK HERE
      </Link>
    </div>
  );
};

export default Postsc1;
