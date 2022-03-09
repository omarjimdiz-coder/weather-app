import React, { useState } from 'react'
import './day.css';

const Day = ({daily, hourly}) => {

    const filterHour = hourly.filter(hora => 
        hora.hourName === 6 
        || hora.hourName === 12 
        || hora.hourName === 18
    );
    
  return (
        <>
            {
                daily.map((day, i) => 
                (
                    <div key={i} className='daily'>
                        <h4>{day.dayName}</h4>
                        {
                            filterHour.slice(3).map((hour, index) => (
                            <div className='datas-specific' key={index}>
                                <div>
                                    <h5>Hour</h5>
                                    <p>
                                        {
                                            hour.hourName
                                        }
                                        :00 Hs
                                    </p>
                                </div>
                                <div>
                                    <h5>Temperature</h5>
                                    <p>{Math.round(hour.temp - 273.15)} C°</p>
                                </div>
                                <div>
                                    <h5>Humidity</h5>
                                    <p>{hour.humidity}%</p>
                                </div>
                                <div>
                                    <h5>Wind</h5>
                                    <p>{hour.wind} m/s</p>
                                </div>
                                <div></div>
                            </div>
                            ))
                        }
                    </div>   
                ))        
            }
        </>
  )
}

export default Day