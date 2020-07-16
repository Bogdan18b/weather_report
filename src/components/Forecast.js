import React, { useState } from 'react';
import { format } from 'date-fns';
import DailyWeather from './DailyWeather';
import { DailyStyleContainer, ErrorMessage } from './WeatherStyles';

const Forecast = ({ data }) => {
  let [show, setShow] = useState({
    day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false,
    day6: false,
  });
  let { list } = data;
  if (!list) return <ErrorMessage>City not found!</ErrorMessage>;
  let uniqueDays = [];
  list.forEach(item => {
    let day = format(item.dt_txt, 'MMM DD');
    if (!uniqueDays.includes(day)) uniqueDays.push(day);
   });
     let day1 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[0]);
     let day2 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[1]);
     let day3 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[2]);
     let day4 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[3]);
     let day5 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[4]);
     let day6 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[5]);

  const toggle = (day, number) => e => {
    const d = 'day' + number;
    e.preventDefault();
    setShow({day1: false, day2: false, day3: false, day4: false, day5: false, day6: false, [d]: !show[d]})
  }
     return (
       <div>
         <DailyStyleContainer>
           <DailyWeather day={day1} show={show.day1} toggle={toggle(show.day1, 1)}/>
           <DailyWeather day={day2} show={show.day2} toggle={toggle(show.day2, 2)}/>
           <DailyWeather day={day3} show={show.day3} toggle={toggle(show.day3, 3)}/>
           <DailyWeather day={day4} show={show.day4} toggle={toggle(show.day4, 4)}/>
           <DailyWeather day={day5} show={show.day5} toggle={toggle(show.day5, 5)}/>
           <DailyWeather day={day6} show={show.day6} toggle={toggle(show.day6, 6)}/>
           { uniqueDays.length === 6 || <div id="extra"></div>}
        </DailyStyleContainer>
      </div>
    )
};

export default Forecast;