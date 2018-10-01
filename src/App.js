import React, { Component, Fragment} from "react";
import Header from "./components/header";
import Form from "./components/form";
import Weather from "./components/weather";
import "./reset.css";

const API_KEY = "1ff011665e3637b91147bb172ff57517";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    day1: undefined,
    day2: undefined,
    day3: undefined,
    day4: undefined,
    day5: undefined,
    day6: undefined,
    error: undefined
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const apiCall = await fetch(`//api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await apiCall.json();
    if (data.list) {
      let uniqueDays = [];
      data.list.forEach(item => {
        let day = item.dt_txt.slice(0, 10);
        if (!uniqueDays.includes(day)) uniqueDays.push(day);
      });
      debugger
      this.setState({
        city: data.city.name,
        country: data.city.country,
        day1: data.list.filter(day => day.dt_txt.slice(0, 10) === uniqueDays[0]),
        day2: data.list.filter(day => day.dt_txt.slice(0, 10) === uniqueDays[1]),
        day3: data.list.filter(day => day.dt_txt.slice(0, 10) === uniqueDays[2]),
        day4: data.list.filter(day => day.dt_txt.slice(0, 10) === uniqueDays[3]),
        day5: data.list.filter(day => day.dt_txt.slice(0, 10) === uniqueDays[4]),
        day6: data.list.filter(day => day.dt_txt.slice(0, 10) === uniqueDays[5]),
        error: ""
      });
    } else {
      this.setState({
        day1: undefined,
        day2: undefined,
        day3: undefined,
        day4: undefined,
        day5: undefined,
        day6: undefined,
        error: "City or country invalid."
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Header
          city={this.state.city}
          country={this.state.country}
          />
        <Form getWeather={this.getWeather} />
        <Weather
          day1={this.state.day1}
          day2={this.state.day2}
          day3={this.state.day3}
          day4={this.state.day4}
          day5={this.state.day5}
          day6={this.state.day6}
          error={this.state.error}
        />
      </Fragment>
    );
  }
};

export default App;
