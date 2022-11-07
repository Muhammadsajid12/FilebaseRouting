import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../component/events/event-list";
import ResultsTitle from "../component/events/results-title";
import ErrorAlert from "../component/ui/error-alert";

const FilteredAvents = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p> Page is loading </p>;
  }
  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredData > 2030 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>You Entered the invlid Year or month...</p>
        </ErrorAlert>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>YOU Chose The Invalid Date</p>
        </ErrorAlert>
      </Fragment>
    );
  }

  // Here Im passing the filered date to resultTitle page......
  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredAvents;
