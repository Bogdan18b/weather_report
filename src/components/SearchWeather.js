import React, { useState } from 'react';
import Header from './Header';
import WeatherReport from './WeatherReport';
import Autocomplete from 'react-google-autocomplete';
import { Button, Form, Container } from './FormStyles';

const Weather = props => {
  let f = "Fahrenheit";
  let c = "Celsius";
  let [state, setState] = useState({
    city: undefined,
    country: undefined,
    tempCity: undefined,
    tempCountry: undefined,
    degrees: 'imperial',
    tempMap: undefined,
    map: "https://maps.google.com/?q=New+York,+NY,+USA&ftid=0x89c24fa5d33f083b:0xc80b8f06e177fe62&output=embed",
    search: false
  });

  const changeDegrees = e => {
    e.preventDefault();
    state.degrees === "imperial"
    ? setState({...state, degrees: "metric"})
    : setState({...state, degrees: "imperial"});
  }

  const search = e => {
    e.preventDefault();
    setState({...state, search: true, city: state.tempCity, country: state.tempCountry, map: state.tempMap});
  }

  const toggleClass = () => {
	document.getElementById("degrees").classList.toggle('hide');
};

    return (
      <Container>
        <Form>
          <Header city={state.city} country={state.country}/>
          <Autocomplete
              onPlaceSelected={ place => {
                let details = place.formatted_address.split(", ");
                let last = details.length - 1;
                setState({...state,
                  tempCity: details[0],
                  tempCountry: details[last],
                  tempMap: place.url +  "&output=embed",
                })
              }}
              types={['(cities)']}
          />
        <Button onClick={changeDegrees}
            onMouseEnter={toggleClass}
            onMouseLeave={toggleClass}
        >
            {state.degrees === "imperial" ? f : c}
          </Button>
          <p className="hide"
						id="degrees">click to change to {state.degrees === "imperial" ? c : f}</p>
          <Button onClick={search}>
            search
          </Button>
          {state.search && <WeatherReport city={state.city} country={state.country} degrees={state.degrees}/>}
        </Form>
        <div>
          <iframe title="map" src={state.map} />
        </div>
    </Container>
    );
}

export default Weather;
