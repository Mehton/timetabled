import React from "react";

const Event = (props) => {
  return (
    <td className={"Event " + props.color}>
      <h6>{props.event}</h6>
      <h6>{props.location}</h6>
    </td>
  );
};

export default Event;
