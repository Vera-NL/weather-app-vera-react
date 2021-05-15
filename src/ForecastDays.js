import React, {useState} from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function ForecastDays({coord}) {
    let [loaded, setLoaded] = useState(false);
    let [forecastDay, setForecastDay] = useState(null);

    function showForecastDays (response) {
        setForecastDay(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div classname="ForecastDays">
                {forecastDay.map((dailyForecast, index) => {
                    if (index < 5) {
                    return (
                        <div key={index}>
                            <DailyForecast ForecastDay={dailyForecast} />
                        </div>
                        );
                        }
                    })
                }    
            </div>
        );
    } else {
        let longitude = coord.lon;
        let latitude = coord.lat;
        let apiKey = "ad1c3c6d8734a6f724e8c027e1f76c71";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showForecastDays);
      return null;
    }
}