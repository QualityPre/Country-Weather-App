import axios from 'axios'
import { useState, useEffect } from 'react'
import CountryInfo from './CountryInfo'
import WeatherInfo from './WeatherInfo'

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
        <WeatherInfo weatherData={weatherData} country={country} />
      </div>
    )
}

export default Country
