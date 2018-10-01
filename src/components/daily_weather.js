import React, { Component } from 'react';
import Hourly from './hourly';

class DailyWeather extends Component {
  state = {
    display: false
  };

  handleClick = (e) => {
    e.preventDefault();
    let status = !this.state.display;
    debugger
    this.setState({
      display: status
    })
  };

  render() {
    debugger
    if (!this.props.day || this.props.day.length === 0) return <p></p>
    let minTemp = 120;
    let maxTemp = 0;
    let description = [];
    let forecast;
      this.props.day.forEach(hour => {
        if (minTemp > hour.main.temp_min) minTemp = hour.main.temp_min;
        if (maxTemp < hour.main.temp_max) maxTemp = hour.main.temp_max;
        description.push(hour.weather[0].main);
      });
    if (description.includes("Rain")) {
      forecast = "http://openweathermap.org/img/w/10d.png";
    } else if (description.includes("Snow")) {
      forecast = "http://openweathermap.org/img/w/13d.png";
    } else if (description.includes("Clouds")) {
      forecast = "http://openweathermap.org/img/w/03d.png";
    } else {
      forecast = "http://openweathermap.org/img/w/01d.png";
    };
    return (
      <div onClick={this.handleClick} className="daily-main">
        <h1>{ this.props.day[0].dt_txt.slice(5,10) }</h1>
        <h3>{ Math.round(minTemp) }˚</h3>
        <h3>{ Math.round(maxTemp) }˚</h3>
        <h3><img className="forecast-image"
          src={forecast} alt=""/></h3>
        <p>details</p>
        { this.state.display ? <Hourly day={this.props.day}/> : <p></p>}
      </div>
    );
  }
}

export default DailyWeather;
