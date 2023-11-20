import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'components/common/Images/Image'
import { notFoundImage } from '../../assets/Assets'

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-gray-700 mb-8">
        Oops! The page you are looking for might be in another castle.
      </p>
      <Image src={notFoundImage} alt="404 Not Found" className="w-full max-w-md" />
      <Link to="/" className="mt-8 text-[#309CFF] hover:underline">
        Go back to the home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
