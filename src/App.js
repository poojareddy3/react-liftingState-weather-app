import { useState } from 'react';
import './App.css';
import './components/Weather.css'
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';
import fetchData  from './services/constants';

function App() {
//weatherData stores the response data from the api call
//value is where we keep track of what is being inserted in our input field
  const [weatherData, setWeatherData] = useState({})
  const [value, setValue] = useState('')
   //below is another way to create state
  // const [weatherData, setWeatherData] = useState({
  //   weather: {},
  //   value: ''
  // })
  const handleOnChange = async (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }
  const handleSearchButton = async (e) => {
    e.preventDefault()
    // console.log(value)
     const info =  await fetchData(value)
    // console.log(fetchData(value))
       setWeatherData(info)
      //  console.log(info)
      //  setWeatherData()
    //  console.log(weatherData)
  }
  // console.log("state")
  // console.log(weatherData)


 //need to create functions that handle event changes and also submit changes as well

  return (
    <div className="App">
      <h1>Weather App</h1>
         <Input onChange={(e) => handleOnChange(e)} onClick={(e) => handleSearchButton(e)}/>
         <WeatherCard data={weatherData}/>
    </div>
  );
}

export default App;
