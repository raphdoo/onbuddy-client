import React, {useState, useEffect} from 'react';
import CommentSection from './CommentSection';
import { FaHeart, FaComment } from 'react-icons/fa';
import { useApi } from 'hooks/api';

interface PostProps {
  userName: string;
  userImage: string;
  time: string;
  postContent: string;
  likes: number;
  id: string
}

const AdminPost: React.FC<PostProps> = ({
  userName,
  userImage,
  time,
  postContent,
  likes,
  id
}) => {

  const [value, setValue] = useState(false)
  const [showComments, setShowComments] = useState(false)


  const [response, makerequest] = useApi.patch(`/post/${id}/like`)


  const likePost = () => {
    if(!value) {
      makerequest()
    }
    setValue(!value)
  }

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  useEffect(() => {
    if(response) {
      
    }
  }, [response])


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
          <p className="text-gray-500">{time}</p>
        </div>
      </div>
      <p>{postContent}</p>
      <div className='flex flex-col sm:flex-row sm:justify-between'>
        <div className="flex items-center mt-5">
          <FaHeart className="text-red-500 mr-2" onClick={likePost}/>
          <span>{likes} {likes === 1 ? "Like" : "Likes"}</span>
        </div>
        <div className="flex items-center" onClick={toggleComments}>
          <FaComment className="text-blue-500 mr-2"/>
          <span>View Comments</span>
        </div>
      </div>
      <div className="mt-5">
         <CommentSection showComments={showComments} id={id}/>
      </div>
    </div>
  );
};

export default AdminPost;
