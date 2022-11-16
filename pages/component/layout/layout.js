import React, { Fragment } from "react";
import Mainheader from "./main-header";

const layout = (props) => {
  return (
    <Fragment>
      <Mainheader />
      <main>{props.children} </main>
    </Fragment>
  );
};

export default layout;
