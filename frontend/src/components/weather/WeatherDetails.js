import React from "react";
import "../../App.css";

function WeatherDetails(props) {
  return (
    <div className="weather_details">
      <h4 data-testid="city_name">{props.weather_name}</h4>
      <h1>{props.temperature}°c</h1>
      <h4>{props.weather_descriptions}</h4>
    </div>
  );
}

export default WeatherDetails;
