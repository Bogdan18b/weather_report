# Weather Report

Weather Report is a single page web app built using Create-React-App, that fetches a five day forecast from the OpenWeatherMap API. Check the weather for your city  [here](http://bogdanbobletec.us/weather_report).

![weather](https://raw.githubusercontent.com/Bogdan18b/weather_report/master/homepage.png)

The site is built using React's new feature proposal from v16.7.0-alpha, [Hooks](https://reactjs.org/docs/hooks-intro.html), which can add state and lifecycle methods to functional components. The following code shows how to replace the classical state, ComponentdidMount and ComponentDidUpdate, using useState, useEffect and a custom hook:

```javaScript
    function useGetWeather(city, country, degrees) {
      const [data, setData] = useState({});

      useEffect(
        async () => {
          const result = await GetWeather(city, country, degrees);
          setData(result);
        },
        [city, degrees]
      );
      return data;
    }

    const WeatherReport = ({ city, country, degrees }) => {
      const data = useGetWeather(city, country, degrees);

     return (
       <Forecast data={data} />
     );
    };
```
To style the app I used [styled-components](https://www.styled-components.com/) instead of CSS files:
```javaScript
    export const DailyStyleItem = styled.div`
      font-size: 2rem;
      text-align: center;
      background-color: lightskyblue;
      border-radius: .5rem;
      padding: 1rem;
      border: 2px solid lightgray;
        h1 {
          padding: 0.5rem;
          font-weight: 700;
          &:nth-child(2) {
            border-bottom: 3px solid blue;
            margin-bottom: 1.5rem;
          }
        }
        img {
          width: 40%;
          margin: 0 auto;
        }
    `;


    return ( // inside the functional component
      <DailyStyleItem>
        <h1>{ dateDay }</h1>
        <h1>{ dateMonth }</h1>
        <h3><img src={forecast} alt=""/></h3>
        <h3>min: { Math.round(minTemp) }˚</h3>
        <h3>max: { Math.round(maxTemp) }˚</h3>
        <Button
          onClick={props.toggle}>
            details
        </Button>
      </DailyStyleItem>
    );
```


I implemented a google maps autocomplete search bar for accurate location. The data received from the OpenWeatherMap API is an object which includes an array of 40 elements, each one being the detailed weather forecast for the next 3 hours. I divided the array in 6 different ones, each one representing data for a day, so I can calculate minimum and maximum temperature for each day and display it properly. I used the CSS grid system to show the data.
```javaScript
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
```

The temperature is displayed but default in Fahrenheit degrees, but you can toggle between Fahrenheit and Celsius by clicking the button.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
