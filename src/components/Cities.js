import React, { useState } from 'react'
import CityDatas from './CityDatas';
import './cities.css'


const Cities = () => {

    const [show, setShow] = useState([]);
    
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
    ]

    async function showDatas(lat, lon) {
        
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=4a1e919c9cca7dea0964df93c0522e09`;
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);

        const days = data.daily.map(day => {

            return{
                temp: day.temp.day
            }
        })

        console.log(days);
    }


    return (
        <div className='weather'>
            <div>
                {
                    Countries.map(({name}, i) => <CityDatas key={i} name={name} showDatas={showDatas} />)
                }
            </div>
            <div>
                hola
            </div>
        </div>
    )
}

export default Cities