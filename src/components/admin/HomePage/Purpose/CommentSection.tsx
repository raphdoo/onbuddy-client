import { useApi } from 'hooks/api';
import React, { useEffect, useState } from 'react';

interface CommentSectionProps {
  showComments?: Boolean;
  id: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  showComments,
  id,
}) => {
  const [content, setContent] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const [{ data: singlePost }] = useApi.get(`/post/${id}`);

  const [{data}, makerequest] = useApi.post(`/post/${id}/comment/create`);

  const handleAddComment = () => {
    makerequest({ content });
  };

  useEffect(() => {
    if (singlePost) {
      
    }
    if(data) {

    }

  }, [singlePost, data]);

  return (
    <div>
      {(showComments &&
        singlePost &&
        singlePost.comments &&
        singlePost.comments.length) ?
        singlePost.comments.map((comment: any, index: number) => {
          return (
            <div className="mt-8 ml-5" key={index}>
              <div className="flex items-center mb-2">
                <img
                  src={comment.userId.avatar.url}
                  alt={comment.userId.firstname}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{comment.userId.name}</h2>
                </div>
              </div>
              <p>{comment.content}</p>
            </div>
          );
        })
      
        : <p></p>}
      <div className="mt-4 ml-3">
        <input
          type="text"
          placeholder="Write a comment..."
          value={content}
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
  );
};

export default CommentSection;
