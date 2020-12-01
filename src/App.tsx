import React, { useState } from "react";
import Header from "./components/Header";
import WeatherReport from "./components/WeatherReport";
import Autocomplete from "react-google-autocomplete";
import { Button, Form, Container } from "./components/FormStyles";
import "./reset.css";

const CELSIUS = "Celsius";
const FAHRENHEIT = "Fahrenheit";
const IMPERIAL_SYSTEM = "imperial";
const METRIC_SYSTEM = "metric";

const App: React.FunctionComponent = () => {
  let [unitSystem, setUnitSystem] = useState(IMPERIAL_SYSTEM);
  let [className, setClassName] = useState("hide");
  let [city, setCity] = useState({
    name: "New York, NY, USA",
    url: "https://maps.google.com/?q=New_York,NY,USA&output=embed",
  });

  const handleToggleUnitSystem = () =>
    unitSystem === IMPERIAL_SYSTEM
      ? setUnitSystem(METRIC_SYSTEM)
      : setUnitSystem(IMPERIAL_SYSTEM);

  const toggleClassName = () => {
    const newClassName = className === "" ? "hide" : "";
    setClassName(newClassName);
  };

  const handlePlaceSelected = (place: {formatted_address: string}) =>
    setCity({
      name: place.formatted_address,
      url: `https://maps.google.com/?q=${place.formatted_address}&output=embed`,
    });

  return (
    <>
      <Form>
        <Header city={city.name}/>
        <Autocomplete
          placeholder="select location"
          onPlaceSelected={handlePlaceSelected}
          types={["(cities)"]}
        />
        <Button
          onClick={handleToggleUnitSystem}
          onMouseEnter={toggleClassName}
          onMouseLeave={toggleClassName}
        >
          {unitSystem === IMPERIAL_SYSTEM ? FAHRENHEIT : CELSIUS}
        </Button>
        <p className={className}>
          change to {unitSystem === IMPERIAL_SYSTEM ? CELSIUS : FAHRENHEIT}
        </p>
      </Form>
      <Container>
        <WeatherReport
          city={city.name}
          unitSystem={unitSystem}
        />
        <iframe title="map" src={city.url} />
      </Container>
    </>
  );
};

export default App;
