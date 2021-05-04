import React from "react";
import "./ForecastHours.css";

export default function ForecastHours() {
    return (<div className="row">
                <div className="col-sm-2"><strong>17.00</strong><br /> 
                <i class="fas fa-sun fa-2x" ></i> <br />
                9° 4°</div>
                <div className="col-sm-2"><strong>20.00</strong><br /> 
                <i class="fas fa-sun fa-2x"></i><br />
                9° 4° </div>
                <div className="col-sm-2"><strong>23.00</strong><br /> 
                <i class="fas fa-sun fa-2x"></i><br />
                9° 4° </div>
                <div className="col-sm-2"><strong>02.00</strong><br /> 
                <i class="fas fa-sun fa-2x"></i><br />
                9° 4° </div>
                <div className="col-sm-2"><strong>05.00</strong><br /> 
                <i class="fas fa-sun fa-2x"></i><br />
                9° 4° </div>
                <div className="col-sm-2"><strong>08.00</strong><br /> 
                <i class="fas fa-sun fa-2x"></i><br />
                9° 4° </div>
            </div>
        );
    }