import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "./component/events/event-list";

const HomePage = () => {
  const featuredevents = getFeaturedEvents();
  // console.log(featuredevents);
  return (
    <div>
      <EventList items={featuredevents} />
    </div>
  );
};

export default HomePage;
