import React from "react";
import WeatherIcons from "react-weathericons";

export default function CurrentWeatherIcon ({id}) {
    let codeMapping = {
      "800": "sun",
      ">= 200 && < 300": "bolt",
      ">= 300 && < 500": "cloud-rain",
      ">= 500 && < 600": "cloud-showers-heavy",
      ">= 600 && < 700": "snowflake",
      ">= 700 && < 800": "smog",
      ">= 801 && <= 804": "cloud-sun"
    };
    return (<WeatherIcons
    name={codeMapping[id]} size="7x"/>
    );
}