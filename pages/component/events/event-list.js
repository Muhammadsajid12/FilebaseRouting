import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;
  // console.log(items);

  return (
    <div>
      <ul className={classes.list}>
        {items.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            image={event.image}
            location={event.location}
            date={event.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
