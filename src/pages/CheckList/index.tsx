import Image from 'components/common/Images/Image';
import Button from 'components/common/Button/Button';
import React, { useEffect, useState } from 'react';
import { arrowleft, elipse, ticksquare, user, check, add } from '../../assets/Assets';

interface CurrentUser {
  currentUser: any;
}

const CheckListPage: React.FC<CurrentUser> = ({currentUser}) => {
  const [myobject, setmyobject] = useState<number | null>(null);
  const [isAddItemFormVisible, setIsAddItemFormVisible] = useState(false);

  const headings = [
    {
      heading: '[4/4] Lets get started - Using the onboarding portal and actions',
      text: 'Complete your onboarding portal profile and add your photograph',
      text2: 'Review the cases assigned to you',
      text3: 'Please note the early career email address under the contact us page if you have any queries',
      text4: 'Browse the portal and familiarise yourself with all the functions, especially the',
    },
    {
      heading: '[4/4] Your Dashboard - Using the onboarding portal and actions',
      text: 'Complete your onboarding portal profile and add your photograph',
      text2: 'Review the cases assigned to you',
      text3: 'Please note the early career email address under the contact us page if you have any queries',
      text4: 'Browse the portal and familiarise yourself with all the functions, especially the',
    },
    {
      heading: '[4/4] Your message - Using the onboarding portal and actions',
      text: 'Complete your onboarding portal profile and add your photograph',
      text2: 'Review the cases assigned to you',
      text3: 'Please note the early career email address under the contact us page if you have any queries',
      text4: 'Browse the portal and familiarise yourself with all the functions, especially the',
    },
  ];

  const toggleheading = (index: number) => {
    if (myobject === index) {
      setmyobject(null);
    } else {
      setmyobject(index);
    }
  };

  const toggleAddItemForm = () => {
    setIsAddItemFormVisible(!isAddItemFormVisible);
  };
  
  useEffect(() => {
    if (isAddItemFormVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isAddItemFormVisible]);

  return (
    <>
      <div className="sm:mt-[50px] sm:px-20 pb-32">
        {/* <section className="sm:grid grid-cols-12 py-32 sm:gap-10 border-b border-b-[#000]">
          <div className="col-span-7 space-y-4 sm:space-y-10 py-20" data-aos="fade-up">
            <h2 className="text-[#309CFF] text-3xl font-bold">CHECKLIST</h2>
            <h2 className="text-base text-gray-700 sm:text-xl" data-aos="fade-up">
              Here is a great place to connect with your colleagues. It's a great place to share information about yourself, and ask headings.
            </h2>
            <h2 className="text-base text-gray-700 sm:text-xl">We hope you find this session useful.</h2>
          </div>
          <div className="col-span-5" data-aos="zoom-in-up">
            <Image src={check} alt="" className="" />
          </div>
        </section> */}

        <section className="bg-white  mt-10  py-5 max-w-6xl mx-auto space-y-10 rounded-md shadow-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-[#309CFF] text-xl font-bold px-5">Internship Checklist</h2>
            {/* <div className="bg-[#309CFF] hover:bg-blue-600 text-white p-3 sm:px-11 text-center items-center gap-3 cursor-pointer rounded-lg flex justify-start">
              <Image src={arrowleft} alt="arrow" className="h-10 w-10" />
              <h2 className="">Back</h2>
            </div> */}
          </div>
          <div className="bg-[#309CFF]  p-5">
            <div className="flex justify-start items-center space-x-2 px-5">
              <Image src={currentUser.avatar.url} alt="user" className="w-10 h-10 rounded-full" />
              <h2 className="text-white font-bold">Your responses</h2>
            </div>
          </div>

          <section className="sm:grid grid-cols-12 bg-[#D6EBFF] space-y-4 sm:space-y-0 p-2 px-5">
            <div className="col-span-3 flex items-center sm:px-5 sm:p-2 gap-2" data-aos="fade-left">
              <h2 className="bg-[#309CFF] p-1 w-10 text-center">0</h2>
              <h2 className="">Overdue items</h2>
            </div>
            <div className="col-span-3 flex items-center gap-2" data-aos="fade-left">
              <h2 className="bg-[#979797] p-1 w-10 text-center">0</h2>
              <h2 className="">Items due this week</h2>
            </div>
            <div className="col-span-3 flex items-center gap-2" data-aos="fade-left">
              <h2 className="bg-[#979797] p-1 w-10 text-center">0</h2>
              <h2 className="">Items you can complete</h2>
            </div>
            <div className="col-span-3 flex items-center gap-2" data-aos="fade-left">
              <h2 className="bg-[#85E3F7] p-1 w-10 text-center">0</h2>
              <h2 className="">Items others can complete</h2>
            </div>
          </section>
          <section className="sm:grid grid-cols-12">
            <div className="col-span-6 bg-[#309CFF] p-5"></div>
            <div className="col-span-3 bg-[#2068AA] p-5 sm:p-0"></div>
            <div className="col-span-3 bg-[#103455] text-white font-bold text-right py-2 pr-5">100%</div>
          </section>

          <section className="sm:grid grid-cols-12 px-10 gap-5">
            <div className="flex flex-col justify-center gap-5 items-start col-span-9">
              {headings.map((item, index) => (
                <div key={index} className="font-semibold flex flex-col w-full space-y-10">
                  <button
                    className="w-full flex justify-between text-xs sm:text-base items-center bg-[#D6EBFF] p-2 px-10 border-b-4 border-[#309CFF]"
                    data-aos="fade-up"
                    onClick={() => toggleheading(index)}
                  >
                    <span>{item.heading}</span>
                    <Image
                      src={add}
                      alt=""
                      className={`transition-transform transform h-10 ${
                        myobject === index ? 'rotate-45' : 'rotate-90'
                      }`}
                     
                    />
                  </button>
                  {myobject === index && (
                    <>
                      <div className="faq-text text-gray-700 mt-2 text-sm sm:text-base sm:flex items-center gap-2 border-b border-gray-300 font-light" data-aos="fade-up">
                        <Image src={ticksquare} alt="sqaure icon" className="sm:w-10 sm:h-10 w-5 h-5" />
                        {item.text}
                      </div>

                      <div className="faq-text text-gray-700 mt-2 sm:flex items-center text-sm sm:text-base gap-2 border-b border-gray-300 font-light" data-aos="fade-up">
                        <Image src={ticksquare} alt="square icon" className="sm:w-10 sm:h-10 w-5 h-5" />
                        {item.text2.replace('', '')}
                        <a href="/admin/home" className="text-[#309CFF] font-bold gap-0.5">
                          How to use the portal
                        </a>
                        <span className="">page to get started</span>
                      </div>

                      <div className="faq-text text-gray-700 mt-2 sm:flex items-center text-sm sm:text-base gap-2 border-b border-gray-300 font-light" data-aos="fade-up">
                        <Image src={ticksquare} alt="square icon" className="sm:w-10 sm:h-10 w-5 h-5" />
                        {item.text3}
                      </div>

                      <div className="faq-text text-gray-700 mt-2 sm:flex items-center text-sm sm:text-base gap-2 border-b border-gray-300 font-light" data-aos="fade-up">
                        <Image src={ticksquare} alt="square icon" className="sm:w-10 sm:h-10 w-5 h-5" />
                        {item.text4.replace('', '')}
                        <a href="/admin/socials" className="text-[#309CFF] font-bold gap-0.5">
                          social wall
                        </a>
                        
                      </div>
                      <Button
                        className="bg-[#309CFF] p-5 text-white md:w-full md:w-1/3 m-auto"
                        label="Add Item"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAddItemForm();
                        }}
                      />
                    </>
                  )}
                  <div className="border-gray-300 mt-6" />
                </div>
              ))}
            </div>
            <Image src={elipse} alt="square icon" className="col-span-3" data-aos="flip-left" />
          </section>
        </section>

        {/* Add Item Form */}
        {isAddItemFormVisible && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-8 rounded-md">
              <h2 className="text-[#309CFF] text-2xl font-bold mb-5 text-center">Add Item</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="itemName" className="block text-gray-700 text-sm font-bold mb-2">
                    Item Name:
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    className="border border-gray-300 p-2 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="itemDescription" className="block text-gray-700 text-sm font-bold mb-2">
                    Item Description:
                  </label>
                  <textarea
                    id="itemDescription"
                    name="itemDescription"
                    className="border border-gray-300 p-2 rounded-md w-full h-24">
                  </textarea>
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-[#309CFF] hover:bg-blue-600 text-white p-3 rounded-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsAddItemFormVisible(false);
                    }}
                  >
                    Add Item
                  </button>
                  <button className="text-[#309CFF] mt-3" onClick={toggleAddItemForm}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckListPage;
