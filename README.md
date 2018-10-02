# Weather Report

Weather Report is a single page web app built using Create-React-App, that fetches a five day forecast from the OpenWeatherMap API. Check the weather for your city  [here](http://bogdanbobletec.us/weather_report).

![weather](https://raw.githubusercontent.com/Bogdan18b/weather_report/master/homepage.png)

I implemented a google maps autocomplete search bar for accurate location.The data received from the OpenWeatherMap API is an object which includes an array of 40 elements, each one being the detailed weather forecast for the next 3 hours. I divided the array in 6 different ones, each one representing data for a day, so I can calculate minimum and maximum temperature for each day and display it properly. I used the CSS grid system to show the data.
```javaScript
      if (data.list) {
        let uniqueDays = [];
        data.list.forEach(item => {
          let day = item.dt_txt.slice(0, 10);
          if (!uniqueDays.includes(day)) uniqueDays.push(day);
        });
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
```

Thetemperature is displayed but default in Fahrenheit degrees, but you can toggle between Fahrenheit and Celsius by clicking the button.
Future plans include improving the User Interface and adding more tests.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
