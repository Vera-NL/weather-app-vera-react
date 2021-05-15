    import React, {useState} from "react";
    import axios from "axios";
    import HourlyForecast from "./HourlyForecast";
    
    export default function ForecastHours(props) {
        let [loaded, setLoaded] = useState(false);
        let [forecastHour, setForecastHour] = useState(null);
    
        function showForecastHours (response) {
            setForecastHour(response.data.list);
            setLoaded(true);
        }
    
        if (loaded) {
            return (
                <div className="ForecastHours">
                    <div className="row">
                        {forecastHour.map(function (forecastHours, index) {
                            if (index < 6) {
                            return (
                                <div className="col-sm-2" key={index}>
                                    <HourlyForecast data={forecastHours} />
                                </div>
                                );
                                }
                            })
                        }    
                    </div>
                </div>
            );
        } else {
            let city = props.city
            let apiKey = "ad1c3c6d8734a6f724e8c027e1f76c71";  
            let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

            axios.get(apiUrl).then(showForecastHours);
            
            return null;
        }
    }

