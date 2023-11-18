import React, { useState } from "react";
import moment from "moment";
import CommentSection from "./CommentSection";
import { FaHeart, FaComment } from "react-icons/fa";
import api from "../../../../utils/api";

interface PostProps {
  updateStateLikes: () => void;
  userName: string;
  userImage: string;
  postContent: string;
  currentUserId: string;
  likes: string[];
  id: string;
  createdAt: Date;
}

const AdminPost: React.FC<PostProps> = ({
  userName,
  userImage,
  postContent,
  likes,
  id,
  currentUserId,
  createdAt,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [likesArray, setLikesArray] = useState(likes);

  const removeUserIdInArray = (id: string, array: any) => {
    return array.filter((userId: string) => userId !== id);
  };

  const addUserIdToArray = (id: string, array: any) => {
    return array.concat(id);
  };

  const isLiked = likesArray.includes(currentUserId);

  const likePost = () => {
    let updatedFields = isLiked
      ? removeUserIdInArray(currentUserId, likesArray)
      : addUserIdToArray(currentUserId, likesArray);
    api.optimisticUpdate(`/post/${id}/like`, {
      updatedFields,
      currentFields: likesArray,
      setLocalData: setLikesArray,
    });
    setLikesArray(updatedFields);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div className="bg-white p-4 mb-4 border rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <img
          src={userImage}
          alt={userName}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{userName}</h2>
          <p className="text-gray-500">{timeAgo}</p>
        </div>
      </div>
      <p>{postContent}</p>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex items-center mt-5">
          <FaHeart
            className={`${isLiked ? "text-red-500" : "text-[#d7cece]"} mr-2`}
            onClick={likePost}
          />
          <span>
            {likesArray.length} {likesArray.length <= 1 ? "Like" : "Likes"}
          </span>
        </div>
        <div className="flex items-center" onClick={toggleComments}>
          <FaComment className="text-blue-500 mr-2" />
          <span>View Comments</span>
        </div>
      </div>
      {showComments && (
        <div className="mt-5">
          <CommentSection postId={id} />
        </div>
      )}
    </div>
  );
};

export default AdminPost;
