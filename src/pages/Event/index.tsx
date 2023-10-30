import React from "react";
import { Outlet } from "react-router-dom";

const EventPage: React.FC = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default EventPage;
