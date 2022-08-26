import React, { useState, useEffect } from 'react'
import "./Weather.css"

const Weather = () => {
    const [searchValue, setSearchValue] = useState("Kota");
    const [tempInfo, setTempInfo] = useState({});
    const [weatherState,setWeatherstate] = useState("");

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=74b2affaf75cea325d399eb5e9c3f1fc`;
            const res = await fetch(url);
            const data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset
            }
            setTempInfo(myNewWeatherInfo)


        } catch (error) {
            console.log(error);
        }

    };
    useEffect(()=>{
         if(tempInfo.weatherMood){
            switch(tempInfo.weatherMood){
                case "Clouds":setWeatherstate("wi-day-cloudy");
                break;
                case "Haze":setWeatherstate("wi-day-haze");
                break;
                case "Clear":setWeatherstate("wi-day-sunny");
                break;
                case "Mist":setWeatherstate("wi-day-cloudy");
                break;
                case "Rain":setWeatherstate("wi-day-rain");
                break;
                default:setWeatherstate("wi-day-sunny");
                break;
            }
         }
    },[tempInfo.weatherMood])

    useEffect(() => {
        getWeatherInfo();
    }, [])

    //converting sunset time 
    let sec = tempInfo.sunset;
    let date = new Date(sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
            <section id="weather__section">
            <h1 id="p3"> Project 3 </h1>

                <h1> Weather Info App </h1>
                <h2>check your weather status</h2>
                <div className="weather__search__container">

                        <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        <button type='button' onClick={getWeatherInfo}>Search</button>
                    </div>
              
                    
                
                    <div className='weather__info__container'>
                        {/* <div className="w1">{tempInfo.sunset}</div>
                        <div className="w2">{tempInfo.name}</div>
                        <div className="w3">humidity</div>
                        <i class="wi wi-night-sleet"></i> */}
                        <div className="info__cloud__icon">
                        <i class={`wi ${weatherState}`} ></i>
                        </div>
                        <div className="status__container">
                            
                                <div className="left">{tempInfo.temp} &deg;C</div>
                                <div className="mid">
                                    <p>{tempInfo.weatherMood}</p>
                                    <p id="country">{tempInfo.name}, {tempInfo.country}</p>
                                </div>
                                <div className="right">
                                    <div></div>
                                    <div>{new Date().toLocaleString()}</div>
                                </div>
                                
                                
                        </div>
                        
                        
     <div className="four__container">
                    <div className="sunset">
                                <i class="wi wi-sunset"></i>
                                <div className="sunset__data">
                                    <div>{timeStr} PM</div>
                                     <div>Sunset</div>
                                </div> 
                    </div>
                     <div className="humidity">
                     <i class="wi wi-humidity"></i>
                                <div className="humidity__data">
                                    <div>{tempInfo.humidity}</div>
                                     <div>Humidity</div>
                                </div>           
                    </div>
                    <div className="pressure">
                                          <i class="wi wi-barometer"></i>
                                <div className="pressure__data">
                                    <div>{tempInfo.pressure} Pa</div>
                                     <div>Pressure</div>
                                </div> 
                    </div>
                    <div className="speed">
                    <i class="wi wi-wind-beaufort-4"></i>
                                <div className="speed__data">
                                    <div>{tempInfo.speed} m/s</div>
                                     <div>Speed</div>
                                </div> 
                    </div>
                    </div>
    </div>
              

            </section>
        </>
    )
}

export default Weather