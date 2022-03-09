import React, { useEffect, useState } from 'react'
import CityDatas from './CityDatas';
import Day from './Day';
import './cities.css'


const Cities = () => {

    const [daily, setDaily] = useState([]);
    const [hourly, setHourly] = useState([]);

    
    const Countries = [
        {
            "name": 'Ciudad de Mexico'
        },
        {
            "name": "Bogota"
        },
        {
            "name": "Madrid"
        },
        {
            "name": "Buenos Aires"
        },
        {
            "name": "Lima"
        }
    ];

   
    async function showDatas(lat, lon) {
        
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=4a1e919c9cca7dea0964df93c0522e09`;
        const resp = await fetch(url);
        const data = await resp.json();

        const days = data.daily.map(day => {
            return{
                dayName: new Date(day.dt * 1000).toLocaleDateString("en", {
                    weekday: "long",
                })            
            }
        })

        setDaily(days);

        const hours = data.hourly.map(hour => {
            return{
                hourName: new Date(hour.dt * 1000).getHours(),
                temp: hour.temp,
                humidity: hour.humidity,
                wind: hour.wind_speed
            }
        })

        setHourly(hours);
    }

    return (
        <div className='weather'>
            <div>
                {
                    Countries.map(({name}, i) => <CityDatas key={i} name={name} showDatas={showDatas} />)
                }
            </div>
            <div>
                {
                    !daily.length ?
                    (
                        <div className='choose'>
                            <h2>Please, choose a city if you want to see more details</h2>
                        </div>
                    ) :
                    (
                        <Day daily={daily} hourly={hourly} />
                    )
                }
            </div>
        </div>
    )
}

export default Cities