import Card from './helper/Card'

const WeatherInfo = ({ weatherData, country }) => {
  const temperature = weatherData.main.temp.toFixed(0)
  const cardTitle = `${country.capital} weather report`

  return (
    <div className="card lg:card-side bg-blue-800 hover:bg-blue-700 shadow-xl max-w-screen-sm ">
      <figure>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="pciture of weather icon"
        />
      </figure>
      <Card title={cardTitle}>
        <p className="text-2xl">Temperature : {temperature} degrees Celcius</p>
        <p className="text-2xl">Wind Speed : {weatherData.wind.speed} mph</p>
        <p className="text-2xl"> Weather: {weatherData.weather[0].main}</p>
      </Card>
    </div>
  )
}

export default WeatherInfo
