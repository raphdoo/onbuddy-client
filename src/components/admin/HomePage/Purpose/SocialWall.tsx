// components/SocialWall.tsx
import React, { useEffect, useState } from 'react';
import { user } from '../../../../assets/Assets';
import AdminPost from './AdminPost';
import { useApi } from 'hooks/api';

interface CurrentUser {
  currentUser: any;
}

const SocialWall: React.FC<CurrentUser> = () => {
  const [content, setContent] = useState('');

  // const [{data: user}] = useApi.get(
  //   `/users/${currentUser.currentUser.id}`
  // );

  const [response, makerequest] = useApi.post('/post/create');

  const [{ data }] = useApi.get('/post/index');

  const sendPost = () => {
    makerequest({ content });
  };

  useEffect(() => {
    if (response) {
      // console.log(response)
    }
    if (data) {
      // console.log(data);
    }
  }, [response, data]);

  return (
    <div className="max-w-full flex flex-col gap-3 w-full mx-auto p-4">
      <div className="bg-white   flex flex-col shadow-md  rounded-lg">
        <h2 className="text-xl rounded-t-lg p-4 text-white bg-[#309CFF] font-semibold mb-4">
          Social Wall
        </h2>
        <div className="p-4 flex flex-col justify-between">
          <div className="flex   mb-4">
            <img src={user} alt="User" className="w-8 h-8 rounded-full mr-2" />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post..."
              className="flex-1 border min-h-[15rem] border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex">
            <button
              onClick={sendPost}
              className="bg-blue-500 text-white flex rounded-md px-8 w-fit py-2 hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </div>
      </div>
      {data &&
        data.length &&
        data.map((post: any, index: number) => {
          return (
            <div key={index}>
              <AdminPost
              userName={post.userId.name}
              userImage={post.userId.avatar.url}
              time="2 hours ago"
              postContent={post.content}
              likes={post.likes ? post.likes.length : 0}
              id={post.id}
            />
            </div>
          );
        })}
    </div>
  );
};

export default SocialWall;
