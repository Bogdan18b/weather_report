import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { format } from 'date-fns';
import DailyWeather from './DailyWeather';
import Hourly from './Hourly';
import { DailyStyleContainer, HourlyStyleContainer } from './WeatherStyles';

const Forecast = ({ data }) => {
  let [show, setShow] = useState({
    day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false,
    day5: false,
  });
  let error;
  let { list } = data;
  if (!list) return <p> 'invalid city'</p>;
  let uniqueDays = [];
  list.forEach(item => {
    let day = format(item.dt_txt, 'MMM DD');
    if (!uniqueDays.includes(day)) uniqueDays.push(day);
   });
   console.log(list);
     let day1 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[0]);
     let day2 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[1]);
     let day3 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[2]);
     let day4 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[3]);
     let day5 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[4]);
     let day6 = data.list.filter(day => format(day.dt_txt, 'MMM DD') === uniqueDays[5]);
     console.log(day1);
  //    error = "";

  // const toggle1 = day => e => {
  //   let dayX = "day" + day;
  //   console.log(dayX, show.dayX);
  //   e.preventDefault();
  //   setShow({...show, dayX: !show.dayX})
  //   console.log(show);
  // }
  const toggle1 = e => {
    e.preventDefault();
    setShow({day1: false, day2: false, day3: false, day4: false, day5: false, day5: false, day1: !show.day1})
  }
  const toggle2 = e => {
    e.preventDefault();
    setShow({day1: false, day2: false, day3: false, day4: false, day5: false, day5: false, day2: !show.day2})
  }
  const toggle3 = e => {
    e.preventDefault();
    setShow({day1: false, day2: false, day3: false, day4: false, day5: false, day5: false, day3: !show.day3})
  }
  const toggle4 = e => {
    e.preventDefault();
    setShow({day1: false, day2: false, day3: false, day4: false, day5: false, day5: false, day4: !show.day4})
  }
  const toggle5 = e => {
    e.preventDefault();
    setShow({day1: false, day2: false, day3: false, day4: false, day5: false, day5: false, day5: !show.day5})
  }
  const toggle6 = e => {
    e.preventDefault();
    debugger
    setShow({day1: false, day2: false, day3: false, day4: false, day5: false, day5: false, day6: !show.day6})
  }

     return (
       <Fragment>
         <DailyStyleContainer>
           <DailyWeather day={day1} toggle={toggle1}/>
           <DailyWeather day={day2} toggle={toggle2}/>
           <DailyWeather day={day3} toggle={toggle3}/>
           <DailyWeather day={day4} toggle={toggle4}/>
           <DailyWeather day={day5} toggle={toggle5}/>
           <DailyWeather day={day6} toggle={toggle6}/>
        </DailyStyleContainer>
        <HourlyStyleContainer>
           {show.day1 && <Hourly day={day1} />}
           {show.day2 && <Hourly day={day2} />}
           {show.day3 && <Hourly day={day3} />}
           {show.day4 && <Hourly day={day4} />}
           {show.day5 && <Hourly day={day5} />}
           {show.day6 && <Hourly day={day6} />}
         </HourlyStyleContainer>
      </Fragment>
    )
};

export default Forecast;
