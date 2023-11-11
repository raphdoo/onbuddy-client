import React from "react";
import eventFrame from "../../../assets/images/event-frame.png";
import { events } from "..";
import { Link, useParams } from "react-router-dom";
import { useApi } from "hooks/api";
import useMergeState from "hooks/mergeState";

const EventDetail: React.FC = () => {
  const [state, makeRequest] = useApi.post("/post");
  const myInfo = {
    content: "Okay, this is my first post",
  };
  console.log(state);
  const submit = () => {
    const [, mergeState] = useMergeState(state);
    mergeState((newState) => {
      return {
        ...newState,
        error: null,
      };
    });
    makeRequest(myInfo);
  };
  const { eventId } = useParams();
  const event = events.find((each) => each.id === eventId);
  return (
    <div className="relative mt-10 flex min:h-screen h-full max-w-[100%] bg-[#92C7F7] w-full flex-col">
      <h1 className="text-3xl p-5">{event?.title}</h1>
      <div
        className="h-[60vh] bg-no-repeat w-full bg-cover bg-center p-1"
        style={{ backgroundImage: `url(${eventFrame})` }}
      >
        <div className="relative">
          <div className="absolute p-10 text-center items-center w-fit flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md bg-opacity-60">
            <h1 onClick={submit} className="">
              NEXT EVENT
            </h1>
            <h2>{event?.date}</h2>
            <h2>This is where the expected time for the meeting should be</h2>
            <p>Repeats weekly</p>
            <Link to={"/admin/event"}>Go back now!!!</Link>
          </div>
        </div>
      </div>
      <div className="h-[50vh] m-0 bg-[#e2f1ff"></div>
    </div>
  );
};

export default EventDetail;
