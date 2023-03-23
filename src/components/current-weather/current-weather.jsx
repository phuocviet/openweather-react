import "./current-weather.css"


const CurrentWeather = ({data}) =>{
    return (
        <div className="weather">
            <div className="top">
                <div>
                <p className="city"> {data.city} </p>
                <p className="description"> {data.weather[0].description} </p>    
                </div>
            </div>
            <div className="bottom">
                <p className="temperature"> {data.main.temp}°C</p>
                <div className="detail">
                    <div className="parameter-row">
                        <span className="parameter-label">Min-temp:</span>
                        <span className="parameter-value"> {Math.round(data.main.temp_min)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Max-temp:</span>
                        <span className="parameter-value"> {Math.round(data.main.temp_max)}°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather