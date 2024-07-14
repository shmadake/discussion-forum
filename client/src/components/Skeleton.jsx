const Skeleton = () => {
  return (
    <div className="flex flex-col w-full md:px-20 md:py-10 px-2 py-5">
      <div className=" grid grid-rows-2 w-full bg-gray-200 animate-pulse">
        <div className="bg-gray-300 row-span-1 px-5 py-5 md:text-2xl text-lg border flex justify-between animate-pulse">
          <div className="bg-gray-400 w-2/5 h-10 animate-pulse"></div>
          <div className="flex flex-row gap-3 justify-center items-center bg-gray-400 animate-pulse w-1/4"></div>
        </div>
        <div className="row-span-1 px-5 py-3 flex flex-row justify-between items-center border bg-gray-100 animate-pulse">
          <div className="text-sm bg-gray-200 animate-pulse w-1/6 h-10"></div>
          <div className="text-sm bg-gray-200 animate-pulse w-1/6 h-10 "></div>
        </div>
      </div>
      <div className="border p-5 h-fit bg-gray-100 animate-pulse"></div>
      <div className="flex justify-end">
        <button className="text-right italic underline px-5 text-[#6B717E]">
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Skeleton;
