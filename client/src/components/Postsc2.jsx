import ReplyIcon from "@mui/icons-material/Reply";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Skeleton from "./Skeleton";

const Postsc2 = () => {
  const { user } = useAuth0();
  const [posts, setPosts] = useState([]);
  const [replies, setReplies] = useState([]);
  const [replyModal, setReplyModal] = useState(false);
  const [replyId, setReplyId] = useState("");
  const [reply, setReply] = useState("");
  const [toggleReply, setToggleReply] = useState(false);
  const [showReplyId, setShowReplyId] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState("");
  const [edit, setEdit] = useState({
    topic: "",
    title: "",
    content: "",
    author: "",
  });
  const [showAnime, setAnime] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result1 = await axios.get(`${window.location.origin}/posts`);
      //console.log(result.data);
      setPosts(result1.data);
      const result2 = await axios.get(`${window.location.origin}/replies`);
      //console.log(result2.data);
      setReplies(result2.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sendReply = async () => {
    try {
      await axios.post(`${window.location.origin}/posts/reply/${replyId}`, {
        reply: reply,
        author: user.email,
      });
      //console.log(result.data);
      setReply("");
      setReplyModal(false);
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReply = async (replyId) => {
    try {
      await axios.delete(`${window.location.origin}/replies/delete/${replyId}`);
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`${window.location.origin}/posts/delete/${postId}`);
      await fetchData();
      //console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async () => {
    try {
      await axios.put(`${window.location.origin}/posts/edit/${editId}`, edit);
      setEditModal(false);
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#FFFFFF] md:mx-20 shadow-md">
      {replyModal && (
        <div className="fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="bg-[#1D84B5] text-white">
            <div className="flex justify-end">
              <button
                className="bg-red-600 p-2"
                onClick={() => {
                  setReplyModal(false);
                }}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="px-10 pt-4">
              <p className="text-xl">
                Replying to {posts.find((post) => replyId === post._id).author}
              </p>
            </div>
            <div className="flex gap-5 pl-10 py-6 pb-10">
              <textarea
                className="px-5 text-black py-2 text-lg w-4/5"
                placeholder="Enter your reply..."
                type="text"
                onChange={(e) => {
                  setReply(e.target.value);
                }}
                value={reply}
              ></textarea>
              <button onClick={sendReply}>
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}
      {editModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm w-full">
          <div className="bg-[#1D84B5] text-white w-1/2">
            <div className="flex justify-end">
              <button
                className="bg-red-600 p-2"
                onClick={() => {
                  setEditModal(false);
                }}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="p-10 flex flex-col items-center justify-center gap-2">
              <div className="w-full flex flex-col md:gap-2 justify-center items-start">
                <p className="text-[#364355] text-sm">Topic</p>
                <select
                  name="topic"
                  id="topic"
                  className="bg-[#303B4B] px-5 md:py-5 py-3 w-full outline-none text-white"
                  onChange={(e) => {
                    setEdit({ ...edit, topic: e.target.value });
                  }}
                  value={edit.topic}
                >
                  <option value="Examinations">Examinations</option>
                  <option value="Scholarships">Scholarships</option>
                  <option value="Placements">Placements</option>
                  <option value="Sports">Sports</option>
                  <option value="Events">Events</option>
                  <option value="Clubs">Clubs</option>
                  <option value="Other" selected>
                    Other
                  </option>
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
                  onChange={(e) => {
                    setEdit({ ...edit, title: e.target.value });
                  }}
                  value={edit.title}
                ></input>
              </div>
              <div className="w-full flex flex-col md:gap-2 justify-center items-start">
                <p className="text-[#364355] text-sm">Content</p>
                <textarea
                  id="content"
                  name="content"
                  className="bg-[#303B4B] px-5 md:py-5 py-3 w-full outline-none text-white"
                  placeholder="Enter content of post"
                  onChange={(e) => {
                    setEdit({ ...edit, content: e.target.value });
                  }}
                  value={edit.content}
                ></textarea>
              </div>
              <button
                className="bg-[#364253] text-white md:px-8 px-5 md:py-4 py-3 mt-10 md:text-lg"
                onClick={editPost}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="px-20 pt-10 flex justify-center items-center ">
        <p className="md:text-2xl text-xl font-semibold italic py-10">POSTS</p>
      </div>

      {posts.length === 0 ? (
        <div className="flex justify-center md:justify-end items-center gap-5 px-20">
          <div className="md:text-lg">
            <button
              onClick={() => {
                setAnime(false);
              }}
            >
              All Posts ({posts.length})
            </button>
            {!showAnime && <div className="bg-[#1D84B5] w-full h-1"></div>}
          </div>
          <div className="md:text-lg">
            <button
              onClick={() => {
                setAnime(true);
              }}
            >
              My Posts (
              {posts.filter((post) => post.author === user.email).length})
            </button>
            {showAnime && <div className="bg-[#1D84B5] w-full h-1"></div>}
          </div>
        </div>
      ) : (
        <div className="flex justify-center md:justify-end items-center gap-5 px-20">
          <div className="md:text-lg">
            <button
              onClick={() => {
                setAnime(false);
              }}
            >
              All Posts ({posts.length})
            </button>
            {!showAnime && <div className="bg-[#1D84B5] w-full h-1"></div>}
          </div>
          <div className="md:text-lg">
            <button
              onClick={() => {
                setAnime(true);
              }}
            >
              My Posts (
              {user &&
                posts.filter((post) => post.author === user.email).length}
              )
            </button>
            {showAnime && <div className="bg-[#1D84B5] w-full h-1"></div>}
          </div>
        </div>
      )}
      {loading ? (
        <Skeleton />
      ) : (
        <div>
          {posts
            .filter((post) =>
              user && showAnime
                ? post.author === user.email
                : post.title.length > 0
            )
            .map((post) => {
              return (
                <div
                  key={post._id}
                  className="md:px-20 px-5 md:py-10 py-5 flex flex-col w-full "
                >
                  <div className="grid grid-rows-2 w-full ">
                    <div className="bg-[#F1F1F1] row-span-1 px-5 py-5 md:text-2xl text-lg border flex justify-between">
                      <div>{post.title}</div>
                      <div className="flex flex-row gap-3 justify-center items-center">
                        <div className="bg-[#1D84B5] rounded-full">
                          <p className="text-xs font-semibold text-white md:px-4 px-2 py-1 md:py-2 italic">
                            {post.topic.toUpperCase()}
                          </p>
                        </div>
                        {user && post.author === user.email && (
                          <button
                            onClick={() => {
                              setEditModal(!editModal);
                              setEditId(post._id);
                              setEdit({
                                topic: post.topic,
                                title: post.title,
                                content: post.content,
                                author: post.author,
                              });
                            }}
                          >
                            <EditIcon />
                          </button>
                        )}
                        {user && post.author === user.email && (
                          <button
                            onClick={() => {
                              deletePost(post._id);
                            }}
                          >
                            <DeleteIcon />
                          </button>
                        )}

                        <button
                          onClick={() => {
                            setReplyModal(!replyModal);
                            setReplyId(post._id);
                          }}
                        >
                          <ReplyIcon />
                        </button>
                      </div>
                    </div>
                    <div className="row-span-1 px-5 py-3 flex flex-row justify-between items-center border text-[#6B717E]">
                      <div className="text-sm">{post.createdAt}</div>
                      <div className="text-sm">{post.author}</div>
                    </div>
                  </div>
                  <div className="border p-5 h-fit text-[#6B717E]">
                    {post.content}
                  </div>

                  {replies &&
                    replies.filter((reply) => reply.postId === post._id)
                      .length !== 0 && (
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            setToggleReply(!toggleReply);
                            setShowReplyId(post._id);
                          }}
                          className="text-right italic underline px-5 pt-2 text-[#6B717E]"
                        >
                          {toggleReply && post._id === showReplyId ? (
                            <span>hide replies</span>
                          ) : (
                            <span>
                              show replies(
                              {
                                replies.filter(
                                  (reply) => reply.postId === post._id
                                ).length
                              }
                              )
                            </span>
                          )}
                        </button>
                      </div>
                    )}

                  {toggleReply &&
                    post._id === showReplyId &&
                    replies
                      .filter((reply) => reply.postId === post._id)
                      .map((reply) => {
                        return (
                          <div className="py-1">
                            <div className="row-span-1 px-5 py-3 flex flex-row justify-between items-center border text-[#6B717E]">
                              <div className="text-sm">{reply.createdAt}</div>
                              <div className="flex gap-3 justify-center items-center">
                                <div className="text-sm">{reply.author}</div>
                                {reply.author === user.email && (
                                  <button
                                    className="text-black"
                                    onClick={() => {
                                      deleteReply(reply._id);
                                    }}
                                  >
                                    <DeleteIcon />
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="border p-5 h-fit text-[#6B717E]">
                              {reply.reply}
                            </div>
                          </div>
                        );
                      })}
                </div>
              );
            })}
          {posts.filter((post) =>
            showAnime ? post.author === user.email : post.title.length > 0
          ).length === 0 && (
            <div className="flex justify-center items-center text-lg py-32">
              No Posts Yet ...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Postsc2;
