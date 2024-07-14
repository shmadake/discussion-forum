import bg from "../postbg.jpg";
import axios from "axios";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Newpostc2 = () => {
  const { user } = useAuth0();
  const [data, setData] = useState({
    topic: "",
    title: "",
    content: "",
    author: user.email,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(`${window.location.origin}/newpost`, data);
      setData({
        ...data,
        title: "",
        content: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#1D84B5] flex flex-row max-md:py-16 md:mx-36">
      <div className="md:w-1/2 w-full flex flex-col justify-center md:items-start items-center gap-10 md:px-10 px-5">
        <form
          className="flex flex-col justify-center items-center md:p-10 w-full md:text-lg gap-5"
          onSubmit={handleSubmit}
        >
          <p className="text-white md:text-4xl text-2xl font-semibold md:mb-5">
            POST FROM HERE
          </p>
          <div className="w-full flex flex-col md:gap-2 justify-center items-start">
            <p className="text-[#364355] text-sm">Topic</p>
            <select
              name="topic"
              id="topic"
              className="bg-[#303B4B] px-5 md:py-5 py-3 w-full outline-none text-white"
              required
              onChange={(e) => {
                setData({ ...data, topic: e.target.value });
              }}
            >
              <option value="General">Select topic</option>
              <option value="Examinations">Examinations</option>
              <option value="Scholarships">Scholarships</option>
              <option value="Placements">Placements</option>
              <option value="Sports">Sports</option>
              <option value="Events">Events</option>
              <option value="Clubs">Clubs</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="w-full flex flex-col md:gap-2 justify-center items-start">
            <p className="text-[#364355] text-sm">Title</p>
            <input
              id="title"
              name="title"
              type="text"
              className="bg-[#303B4B] px-5 md:py-5 py-3 w-full outline-none text-white"
              placeholder="Enter title of post"
              required
              value={data.title}
              onChange={(e) => {
                setData({ ...data, title: e.target.value });
              }}
            ></input>
          </div>
          <div className="w-full flex flex-col md:gap-2 justify-center items-start">
            <p className="text-[#364355] text-sm">Content</p>
            <textarea
              id="content"
              name="content"
              className="bg-[#303B4B] px-5 md:py-5 py-3 w-full outline-none text-white"
              placeholder="Enter content of post"
              required
              value={data.content}
              onChange={(e) => {
                setData({ ...data, content: e.target.value });
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#364253] text-white md:px-8 px-5 md:py-4 py-3 mt-10 md:text-lg"
          >
            POST
          </button>
        </form>
      </div>
      <div className="w-1/2 max-md:hidden">
        <img className="h-full w-full" src={bg} alt="background"></img>
      </div>
    </div>
  );
};

export default Newpostc2;
