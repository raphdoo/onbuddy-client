import React, { useEffect } from 'react';
import logo from '../../assets/images/lgo.png';
import pana from '../../assets/images/pana.png';
import amico from '../../assets/images/amico.png';
import amico2 from '../../assets/images/amico2.png';
import { BsHousesFill } from 'react-icons/bs';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import ppic from '../../assets/images/ppic.png';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useApi } from 'hooks/api';
import Loader from 'components/common/loader/loader';

interface CurrentUser {
  currentUser: any;
}

const LandingPage: React.FC<CurrentUser> = ({ currentUser }) => {
  const [response] = useApi.get(
    `/users/${currentUser.currentUser.id}`
  );

  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);

  return (
    <div>
      {response && response.isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col bg-blue-100">
          <div className="bg-blue-500 py-6 px-8 h-10 flex items-center justify-between">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <div className="flex gap-4 text-white h-full items-center">
              <BsHousesFill className="text-2xl" />
              <BsFillCalendarDateFill className="text-2xl" />
              <BiSolidMessageSquareDetail className="text-2xl" />
              <BsFillCalendarEventFill className="text-2xl" />
              <img src={ppic} alt="" className="rounded-full" />
            </div>
          </div>
          <div className="flex-1 px-10 py-6 flex flex-col gap-8">
            <p className="font-bold text-xl">Hi, {response && response.data!.firstname}</p>
            <p>
              Congratulations on securing a place on our internship! Welcome to
              our team and our on boarding portal, full of important information
              to get you ready for your first day.
            </p>
            <p>
              On this portal, you’ll find much more important information about
              what it’s like working here and we’ll update you over the next few
              months on things you need to do before and during the internship.
              Please make sure you bookmark this page and get familiar with all
              the information available so far. Click below to view key
              information and discover more content.
            </p>
            <div>
              <p>
                We’re really looking forward to you joining us in onbuddy
                company!
              </p>
              <div className="w-full grid grid-cols-3 p-4 items-center">
                <div className="flex flex-col items-center gap-4">
                  <img src={pana} alt="" />
                  <button className="w-fulll bg-blue-500 px-2 py-3 text-white font-semibold m-auto flex items-center gap-4 rounded-xl">
                    How to use our portal{' '}
                    <BsFillArrowRightSquareFill className="text-xl" />
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <img src={amico} alt="" />
                  <button className="w-fulll bg-blue-500 px-2 py-3 text-white font-semibold m-auto flex items-center gap-4 rounded-xl">
                    Welcome to our family{' '}
                    <BsFillArrowRightSquareFill className="text-xl" />
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <img src={amico2} alt="" />
                  <button className="w-full bg-blue-500 px-2 py-3 text-white font-semibold m-auto flex items-center gap-4 rounded-xl">
                    Our business{' '}
                    <BsFillArrowRightSquareFill className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500 py-6 px-4 h-10 flex items-center justify-center">
            <h3 className="text-center font-bold text-white text-xl">
              The Ultimate <span className="text-blue-500">HR</span>HR solution
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
