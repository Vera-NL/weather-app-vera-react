import React, {useState, useEffect} from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function ForecastDays(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastDay, setForecastDay] = useState(null);

    useEffect (() => {
        setLoaded(false);
    }, [props.coord]);  

    function showForecastDays (response) {
        setForecastDay(response.data.daily);
        setLoaded(true);
    }

    function load() {
        let longitude = props.coord.lon;
        let latitude = props.coord.lat;
        let apiKey = "ad1c3c6d8734a6f724e8c027e1f76c71";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(showForecastDays);
    }

    if (loaded) {
        return (
            <div className="ForecastDays">
                {forecastDay.map(function (forecastDays, index) {
                    if (index < 5) {
                    return (
                        <div key={index}>
                            <DailyForecast data={forecastDays} />
                        </div>
                        );
                        } else {
                            return null;
                        }
                    })
                }    
            </div>
        );
    } else {
        load()        
        return null;
    }
}