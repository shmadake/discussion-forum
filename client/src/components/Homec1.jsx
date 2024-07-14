import SearchIcon from "@mui/icons-material/Search";

const Homec1 = () => {
  return (
    <div className="bg-[#364253] text-white md:h-[88vh] h-[80vh] py-24 w-full flex flex-col justify-center items-center md:gap-10 gap-6">
      <div className="flex flex-col justify-center items-center md:gap-5 gap-3">
        <p className="md:text-5xl text-2xl font-semibold">
          WELCOME TO AISSMS FORUM
        </p>
        <p className="md:text-xl text-lg italic">
          The most popular forum on the internet!
        </p>
      </div>
      <form className="flex flex-row justify-center items-center w-full md:text-lg">
        <input
          className="bg-[#303B4B] px-5 md:py-5 py-3 md:w-1/2 w-3/5 outline-none"
          placeholder="Enter a keyword..."
        ></input>
        <button className="bg-[#1D84B5] md:px-5 px-4 md:py-5 py-3">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Homec1;
