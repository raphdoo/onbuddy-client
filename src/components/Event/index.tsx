import React from "react";
import { Link } from "react-router-dom";

export const events = [
  {
    id: "1234",
    title: "HipHop Tuesday",
    date: "TODAY .9:00PM",
    venue: "Google Meet",
    link: "",
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png",
  },
  {
    id: "1234",
    title: "HipHop Tuesday",
    date: "TODAY .9:00PM",
    venue: "google meet",
    link: "",
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png",
  },
  {
    id: "1234",
    title: "HipHop Tuesday",
    date: "TODAY .9:00PM",
    venue: "google meet",
    link: "",
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png",
  },
];

const Event: React.FC = () => {
  return (
    <section
      className="mt-11 width-[100%] h-screen flex flex-col  text-[#92C7F7] items-center"
      id="event"
    >
      <h1 className="text-4xl font-bold">EVENTS</h1>
      <div className="text-black text-xs mt-10">
        <p>
          We planned a number of events ahead of you joining us. These events
          are integral part of <br /> the onboarding process and it is important
          that you plan ahead of the events
        </p>
      </div>
      {events.map((each) => {
        const { id, title, date, venue, imageUrl } = each;
        return (
          <div
            className="mt-5 border border-black border-dotted border-4 rounded-lg"
            key={id}
          >
            <Link
              to={`${id}`}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://flowbite.com/docs/images/blog/image-4.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="text-2xl font-bold flex tracking-tight">
                  <span className="font-bold  text-black mr-2">{date}</span>
                  REPEAT EVENT
                </h5>
                <h4 className="font-bold">{title}</h4>
                <div className="flex items-center ">
                  <div className="w-12 h-fit flex justify-center">
                    <img className="" src={imageUrl} alt={venue} />
                  </div>
                  <h3>{venue.toUpperCase()}</h3>
                </div>
                <p className="mb-3 font-normal  dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Event;
