import React, { useState } from 'react'
import { FaHeart, FaComment } from 'react-icons/fa'

interface CommentSectionProps {
  comments: number
  onAddComment: (comment: string) => void
}

const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  onAddComment,
}) => {
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value)
  }

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      onAddComment(newComment)
      setNewComment('')
    }
  }

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleComments}
      >
        <div className="flex items-center">
          <FaHeart className="text-red-500 mr-2" />
          <span>48 Likes</span>
        </div>
        <div className="flex items-center">
          <FaComment className="text-blue-500 mr-2" />
          <span>{comments} Comments</span>
        </div>
      </div>
      {showComments && (
        <div className="mt-4">sdsd{/* Render your comment items here */}</div>
      )}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={handleCommentChange}
          className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>
    </div>
  )
}

export default CommentSection
