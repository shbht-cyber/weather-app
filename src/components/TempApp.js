import React, { useEffect, useState } from "react";
import "./css/style.css";

const TempApp = () => {

    const [city, setCity] = useState(null) ;
    const [search, setSearch] = useState("Sitapur") ;

    useEffect(() => {
      const fetchApi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=511b108fabcc2544dadb206270803919`;
        const response = await fetch(url);
        const resjson = await response.json();
        setCity(resjson.main);
        //console.log(resjson);
      }
      fetchApi();
    } , [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {setSearch(event.target.value)}}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>

              <h1 className="temp">{city.temp} °Cel</h1>
              <h3 className="tempmin_max">Minimum: {city.temp_min}°Cel || Maximum: {city.temp_max}°Cel</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}

        
      </div>
    </>
  );
};

export default TempApp;
