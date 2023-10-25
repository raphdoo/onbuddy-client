// components/Post.tsx
import React from 'react'
import { FaHeart, FaComment } from 'react-icons/fa'
import CommentSection from './CommentSection'

interface PostProps {
  userName: string
  userImage: string // Replace with the actual user image URL
  time: string
  postContent: string
  likes: number
  comments: number
}

const AdminPost: React.FC<PostProps> = ({
  userName,
  userImage,
  time,
  postContent,
  likes,
  comments,
}) => {
  const handleAddComment = (comment: string) => {
    // You can implement a function to add the comment to the post here
    // For example, you can update the state or make an API call.
    console.log(`Added comment: ${comment}`)
  }
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

      <CommentSection comments={comments} onAddComment={handleAddComment} />
    </div>
  )
}

export default AdminPost
