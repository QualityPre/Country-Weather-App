import axios from 'axios'
import { useState, useEffect } from 'react'
const api_key = process.env.REACT_APP_API_KEY

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

  if (!weatherData)
    return (
      <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population} million </p>
        <h2>Languages</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt="Country flag"></img>
      </div>
    )
  else
    return (
      <div>
        <h1>{country.name}</h1>
        <p>capital: {country.capital}</p>
        <p>population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt="Country flag"></img>
        <h1>{country.capital} weather report</h1>
        <p>Temperature is {weatherData.main.temp.toFixed(0)} degrees Celcius</p>
        <p>Wind Speed is {weatherData.wind.speed} mph </p>
        <p> Weather: {weatherData.weather[0].main}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="pciture of weather icon"
        />
      </div>
    )
}

export default Country
