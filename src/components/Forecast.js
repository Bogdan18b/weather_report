import React, { Fragment, useState } from 'react';
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
    day6: false,
  });
  let { list } = data;
  if (!list) return <p>City not found</p>;
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

  // const toggle1 = day => e => {
  //   let dayX = "day" + day;
  //   e.preventDefault();
  //   setShow({...show, dayX: !show.dayX})
  // }
  const toggle1 = e => {
    e.preventDefault();
    setShow({day1: !show.day1, day2: false, day3: false, day4: false, day5: false, day6: false})
  }
  const toggle2 = e => {
    e.preventDefault();
    setShow({day1: false, day2: !show.day2, day3: false, day4: false, day5: false, day6: false})
  }
  const toggle3 = e => {
    e.preventDefault();
    setShow({day1: false, day2: false, day3: !show.day3, day4: false, day5: false, day6: false})
  }
  const toggle4 = e => {
    e.preventDefault();
    setShow({day1: false, day2: false, day3: false, day4: !show.day4, day5: false, day6: false})
  }
  const toggle5 = e => {
    e.preventDefault();
    setShow({day1: false, day2: false, day3: false, day4: false, day5: !show.day5, day6: false})
  }
  const toggle6 = e => {
    e.preventDefault();
    debugger
    setShow({day1: false, day2: false, day3: false, day4: false, day5: false, day6: !show.day6})
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
