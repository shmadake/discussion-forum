import SendIcon from "@mui/icons-material/Send";
import TopicIcon from "@mui/icons-material/Topic";
import ReplyIcon from "@mui/icons-material/Reply";
import axios from "axios";
import { useState, useEffect } from "react";

const Homec22 = () => {
  const [posts, setPosts] = useState([]);
  const [replies, setReplies] = useState([]);

  const fetchData = async () => {
    try {
      const result1 = await axios.get(`${window.location.origin}/posts`);
      setPosts(result1.data);
      const result2 = await axios.get(`${window.location.origin}/replies`);
      setReplies(result2.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex md:flex-row md:justify-between justify-center gap-10 flex-col p-10">
        <div className="flex flex-row justify-between items-center w-full md:shadow-xl shadow-lg px-10 py-6">
          <div className="bg-[#364253] text-white rounded-full md:p-6 p-4">
            <SendIcon />
          </div>
          <div className="flex flex-col justify-center items-end">
            <p className="md:text-2xl text-xl text-[#9AA0A9] font-semibold">
              POSTS
            </p>
            <p className="md:text-3xl text-2xl text-[#364253] font-semibold">
              {posts.length}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full md:shadow-xl shadow-lg px-10 py-6">
          <div className="bg-[#364253] text-white rounded-full md:p-6 p-4">
            <TopicIcon />
          </div>
          <div className="flex flex-col justify-center items-end">
            <p className="md:text-2xl text-xl text-[#9AA0A9] font-semibold">
              TOPICS
            </p>
            <p className="md:text-3xl text-2xl text-[#364253] font-semibold">
              {posts.length === 0 ? 0 : posts.length - 1}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full md:shadow-xl shadow-lg px-10 py-6">
          <div className="bg-[#364253] text-white rounded-full md:p-6 p-4">
            <ReplyIcon />
          </div>
          <div className="flex flex-col justify-center items-end">
            <p className="md:text-2xl text-xl text-[#9AA0A9] font-semibold">
              REPLIES
            </p>
            <p className="md:text-3xl text-2xl text-[#364253] font-semibold">
              {replies.length}
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Homec22;
