import React from "react";
import { Link } from "react-router-dom";

import eventFrame from "../../assets/images/event-frame.png";
import { useApi } from "hooks/api";

export const events = [
  {
    id: "1234",
    title: "HipHop Tuesday",
    date: "TODAY .9:00PM",
    venue: "Google Meet",
    link: "",
    participants: "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
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
  const [{ data, isLoading, error }] = useApi.get("/blogs");

  const posts = (data?.posts || []) as {
    body: string;
    title: string;
    state: string;
    coverImage: string;
    createdAt: Date;
  }[];

  if (error) {
    return <div className="m-10">{error.message}</div>;
  }
  return (
    <section
      className="mt-11 width-[80%] min-h-screen flex flex-col pb-10 bg-[#e2f1ff] text-[#67aae8] items-center"
      id="event"
    >
      <h1 className="text-4xl font-bold mt-4 text-[#309CFF]">EVENTS</h1>
      <div className="text-black text-xs mt-10 mb-5">
        <p className="text-center md:max-w-[60%] w-[100%] mx-auto ">
          We planned a number of events ahead of you joining us. These events
          are integral part of the onboarding process and it is important that
          you plan ahead of the events
        </p>
      </div>
      {!isLoading ? (
        posts.map((each, key) => {
          const { body, title, coverImage, createdAt, state } = each;
          const time = new Date(createdAt);
          return (
            <div
              className="mt-5 border border-black border-solid md:w-[80%] rounded-lg"
              key={key}
            >
              <Link
                to={`${key}`}
                className="flex md:flex-row flex-col w-full"
                // className="flex flex-col items-center h-[100%] w-[100%] border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100"
              >
                <div className="flex-[0.8] w-full rounded-l-lg">
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={eventFrame}
                    alt="Google meet"
                  />
                </div>
                <div className="flex-[3] p-4 flex flex-col justify-between w-full">
                  <div>
                    <div>
                      <h5 className="text-2xl font-bold flex tracking-tight">
                        <span className="font-bold  text-black mr-2">
                          {time.toLocaleString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                        </span>
                        REPEAT EVENT
                      </h5>
                      <h4 className="font-bold">{title}</h4>
                      <div className="flex items-center ">
                        <div className="w-12 h-fit flex justify-center">
                          <img className="" src={coverImage} alt={title} />
                        </div>
                        <h3>{state.toUpperCase()}</h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 font-normal  dark:text-gray-400">
                      {body}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <div>This component is still isLoading</div>
      )}
    </section>
  );
};

export default Event;
