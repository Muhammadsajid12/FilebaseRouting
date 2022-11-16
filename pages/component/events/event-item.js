import React from "react";
import classes from "./event-item.module.css";
import Button from "../ui/Button";
// import someIcons
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import AddressIcon from "../icons/address-icon";

const EventItem = (props) => {
  const { title, date, location, image, id } = props;
  const HumansReadAble = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddres = location.replace(",", "\n");
  const Explorelink = `/events/${id}`;

  return (
    <li key={id} className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2> {title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time> {HumansReadAble}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatedAddres}</address>
          </div>
        </div>
        <div>
          <Button link={Explorelink} className={classes.actions}>
            <span> Explore Event </span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
