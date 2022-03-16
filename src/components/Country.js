import axios from 'axios'
import { useState, useEffect } from 'react'
import CountryInfo from './CountryInfo'

let api_key = process.env.REACT_APP_API_KEY

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState()

  let capital = country.capital
  const weatherHook = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`
      )
      .then((response) => {
        setWeatherData(response.data)
      })
  }
  useEffect(weatherHook, [capital])

  if (!weatherData) return <CountryInfo country={country} />
  else
    return (
      <div className="container">
        <CountryInfo country={country} />
        <div className="card lg:card-side bg-blue-800 hover:bg-blue-700 shadow-xl max-w-screen-sm ">
          <figure>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="pciture of weather icon"
            />
          </figure>
          <div className="card-body">
            <h1 className="text-2xl">{country.capital} weather report</h1>
            <p className="text-2xl">
              Temperature : {weatherData.main.temp.toFixed(0)} degrees Celcius
            </p>
            <p className="text-2xl">
              Wind Speed : {weatherData.wind.speed} mph{' '}
            </p>
            <p className="text-2xl"> Weather: {weatherData.weather[0].main}</p>
          </div>
        </div>
      </div>
    )
}

export default Country
