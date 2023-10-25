// components/SocialWall.tsx
import React from 'react'
import { FaCamera, FaPaperPlane } from 'react-icons/fa'
import { user } from '../../../../assets/Assets'
import AdminPost from './AdminPost'

const SocialWall: React.FC = () => {
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
              placeholder="Write your post..."
              className="flex-1 border min-h-[15rem] border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex  items-center justify-between">
            <label
              htmlFor="file-upload"
              className="cursor-pointer w-fit flex gap-4 items-center font-semibold border-blue-500 border-[1px] px-4 py-2 rounded-lg"
            >
              <FaCamera size={20} className="text-blue-500" /> Upload
            </label>
            <input type="file" id="file-upload" className="hidden" />
            <button className="bg-blue-500 text-white rounded-md px-8 justify-between flex items-center w-fit py-2 hover:bg-blue-600">
              Post <FaPaperPlane className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <AdminPost
        userName="Kelvin Doe"
        userImage={user}
        time="2 hours ago"
        postContent='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"Thanks'
        likes={42}
        comments={8}
      />
    </div>
  )
}

export default SocialWall
