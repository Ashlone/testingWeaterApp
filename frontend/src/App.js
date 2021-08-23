import React, { useState } from "react";
import logo from "./earth.png";
import "./App.css";
import Search from "./components/search/Search";
import WeatherDetails from "./components/weather/WeatherDetails";
import Today from "./components/today/Today";

const api = {
  key: "0c85791248b411cac119853842f37d01",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  //setting up our states
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  //current date
  let today = new Date().toLocaleDateString();

  //Searching function
  const search = (evt) => {
    if (evt.key === "Enter") {
      //fetching data using the fetch api method
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather App</h1>

        <Search
          onChange={(e) => setQuery(e.target.value)}
          query={query}
          search={search}
        />
        <Today today_date={today} />
        <WeatherDetails weather_name={weather.name} />
      </div>
    </div>
  );
}

export default App;
