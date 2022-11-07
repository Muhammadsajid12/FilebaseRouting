import { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../component/events/event-list";
import EventSearch from "../component/events/events-search";
import { useRouter } from "next/router";

const AllEvents = (props) => {
  const event = getAllEvents();
  const router = useRouter();

  function FindHandler(year, month) {
    console.log(year, month);
    const goLink = `/events/${year}/${month}`;
    router.push(goLink);
  }
  // This Page display when we click All events Tab.......
  return (
    <Fragment>
      <EventSearch onSubmit={FindHandler} />
      <EventList items={event} />
    </Fragment>
  );
};

export default AllEvents;
