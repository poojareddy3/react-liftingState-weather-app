function WeatherCard(props){
 const {name, main, weather, wind} = props.data;
    // const [weatherInfo, setWeatherInfo]=
    return(
        <div className="displayDiv">
            {/* display the final data */}
            <h3><span>City: </span>{name}</h3>
            <h3><span>Temperature: </span>{main.temp}</h3>
            <h3><span>Feels Like: </span>{main.feels_like}</h3>
            <h3><span>Humidity: </span>{main.humidity}</h3>
            <h3><span></span>{weather[0].main}</h3>
            <h3>{weather[0].description}</h3>
            <h3><span>Wind Speed: </span>{wind.speed}</h3>
        </div>
    )
}

export default WeatherCard