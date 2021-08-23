import React from "react";
import "../../App.css";

function Today(props) {
  return (
    <div className="today" data-testid="date">
      <h3>{props.today_date}</h3>
    </div>
  );
}

export default Today;
