import React, { useEffect } from "react";
import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import EventSummary from "../component/event-detail/event-summary";
import EventLogistics from "../component/event-detail/event-logistics";
import EventContent from "../component/event-detail/event-content";
const eventId = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  console.log(eventId);
  console.log(event);
  // This logic set to display sometext before loading data form dummy-data.....
  if (!event) {
    return <p> Page Not found</p>;
  }

  return (
    <div>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        image={event.image}
        address={event.location}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </div>
  );
};

export default eventId;
