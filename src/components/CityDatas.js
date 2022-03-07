import React, {useEffect, useState} from 'react';
import './city-data.css';

const CityDatas = ({name, showDatas}) => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        getData();
    }, [])


    const getData = async () => {
        const url = `https://api.openweathermap.org/data/2.5/find?q=${name}&appid=4a1e919c9cca7dea0964df93c0522e09`;
        const resp = await fetch(url);
        const data = await resp.json();

        const datas = data.list.map( weather => {
            return{
                temp: weather.main.temp,
                humidity: weather.main.humidity,
                wind: weather.wind.speed,
                lat: weather.coord.lat,
                lon: weather.coord.lon,
                icon: weather.weather[0].icon
            }
        });

        setDatos(datas[0]);
       
    }

   

    return (
        <article onClick={ () => showDatas(datos.lat, datos.lon)} className='datos-generales'>
            <div className='city'>
                <h2>{name}</h2>
                <img src={`http://openweathermap.org/img/wn/${datos.icon}@2x.png`} alt="Image of weather"></img>
            </div>
            <div className='datas'>
                <div className='celsius'>
                    <h3>{Math.round(datos.temp - 273.15)} C°</h3>
                </div>
                <div className='others'>
                    <p><strong>Humidity: {datos.humidity}%</strong></p>
                    <p><strong>Wind: {datos.wind} m/s</strong></p>
                </div>
            </div>
        </article>
    )
}

export default CityDatas