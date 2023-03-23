import { useState } from 'react'
import {keyAPI } from '../src/api'

const Detail = () =>{
    const [value, setValue] = useState(null)

    const queryData = (data) =>{
        const [lat, lon] = data.value.split(" ")
        const hourlyWeatherFetch = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${keyAPI}`
    }
    return(
        <>
        <h1>Hello</h1>
        </>
    )
}

export default Detail