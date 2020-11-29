import React, { useState } from "react";
import Header from "./Header";
import WeatherReport from "./WeatherReport";
import Autocomplete from "react-google-autocomplete";
import { Button, Form, Container } from "./FormStyles";

const CELSIUS = "Celsius";
const FAHRENHEIT = "Fahrenheit";
const IMPERIAL_SYSTEM = "imperial";
const METRIC_SYSTEM = "metric";

const Weather: React.FunctionComponent = () => {
  let [unitSystem, setUnitSystem] = useState(IMPERIAL_SYSTEM);
  let [state, setState] = useState({
    city: "New York",
    country: "USA",
    tempCity: undefined,
    tempCountry: undefined,
    tempMap: undefined,
    map:
      "https://maps.google.com/?q=New+York,+NY,+USA&ftid=0x89c24fa5d33f083b:0xc80b8f06e177fe62&output=embed",
    search: true,
  });

  const handleToggleUnitSystem = (e: React.SyntheticEvent) => {
    e.preventDefault();
    unitSystem === IMPERIAL_SYSTEM
      ? setUnitSystem(METRIC_SYSTEM)
      : setUnitSystem(IMPERIAL_SYSTEM);
  };

  const search = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setState({
      ...state,
      search: true,
      city: state.tempCity,
      country: state.tempCountry,
      map: state.tempMap,
    });
  };

  const toggleClass = () => {
    document.getElementById("degrees").classList.toggle("hide");
  };

  return (
    <>
      <Form>
        <Header city={state.city} country={state.country} />
        <Autocomplete
          placeholder="select location"
          onPlaceSelected={(place: any) => {
            let details = place.formatted_address.split(", ");
            let last = details.length - 1;
            setState({
              ...state,
              tempCity: details[0],
              tempCountry: details[last],
              tempMap: `${place.url}&output=embed`,
            });
          }}
          types={["(cities)"]}
        />
        <Button onClick={search}>search</Button>
        <Button
          onClick={handleToggleUnitSystem}
          onMouseEnter={toggleClass}
          onMouseLeave={toggleClass}
        >
          {unitSystem === IMPERIAL_SYSTEM ? FAHRENHEIT : CELSIUS}
        </Button>
        <p className="hide" id="degrees">
          Change to {unitSystem === IMPERIAL_SYSTEM ? CELSIUS : FAHRENHEIT}
        </p>
      </Form>
      <Container>
        {state.search && (
          <WeatherReport
            city={state.city}
            country={state.country}
            degrees={unitSystem}
          />
        )}
        <iframe title="map" src={state.map} />
      </Container>
    </>
  );
};

export default Weather;
