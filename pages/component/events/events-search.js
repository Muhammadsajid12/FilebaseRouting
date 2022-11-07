import React from "react";
import Button from "../ui/Button";
import classes from "./event-search.module.css";
import { useRef } from "react";

const EventSearch = (props) => {
  const YearInputRef = useRef();
  const MonthInputref = useRef();

  function SubmitHandler(event) {
    event.preventDefault();
    // Here i Reading the data by useRef
    const selectedYear = YearInputRef.current.value;
    const selectedMonth = MonthInputref.current.value;
    // Sending the value to
    props.onSubmit(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"> Year</label>
          <select id="year" ref={YearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div htmlFor="month" className={classes.control}>
          <label htmlFor="month"> Month</label>
          <select id="month" ref={MonthInputref}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">AUgust</option>
            <option value="9">September</option>
            <option value="10">Octuber</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button> Find Event </Button>
    </form>
  );
};

export default EventSearch;
