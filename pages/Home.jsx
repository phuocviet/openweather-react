import Search from '../src/components/search/search'
import CurrentWeather  from '../src/components/current-weather/current-weather'
import { Wth_URL, keyAPI } from '../src/api'
import { useState } from 'react'
import Forecast from '../src/components/forecast/forecast'

const Home = () =>{
    const [weather, setWeather] = useState(null)
    const [forecast, setForecast] = useState(null)
  
  
    const handleOnSearchChange = (searchdata) =>{
      const [lat, lon] = searchdata.value.split(" ")
      //current weather & forecast api
      const currentWeatherFetch = fetch(`${Wth_URL}/weather?lat=${lat}&lon=${lon}&appid=${keyAPI}&units=metric`)
      const forecastFetch = fetch(`${Wth_URL}/forecast?lat=${lat}&lon=${lon}&appid=${keyAPI}&units=metric`)
    
      Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) =>{
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
  
        setWeather({city: searchdata.label ,...weatherResponse});
        setForecast({city: searchdata.label ,...forecastResponse});
      })
      .catch((err) =>{
        console.log(err)
      })
    }
    

    return (
      <div className='App'> 
        <Search onSearchChange={handleOnSearchChange}/>
        {weather && <CurrentWeather data={weather}/>}
        {forecast && <Forecast data={forecast}/>}
      </div> 
    );
}

export default Home