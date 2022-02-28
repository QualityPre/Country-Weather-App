import { useEffect, useState } from 'react'
import axios from 'axios'
//components
import Country from './components/Country'

const Filter = ({ onChange, value }) => {
  return (
    <form>
      Find Countries <input onChange={onChange} value={value} />
    </form>
  )
}

const Content = ({ countriesData, newFilter }) => {
  const [oneCountry, setOneCountry] = useState(false) //get data from county

  const filteredCountries = countriesData.filter((country) =>
    country.name.toLowerCase().includes(newFilter.toLowerCase())
  )
  if (filteredCountries.length === 250) return <p> Type!</p>
  if (filteredCountries.length > 20)
    return <p>Too many country matches, please refine your search</p>

  if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />
  }

  function handleClick(country) {
    setOneCountry(country)
  }

  return (
    <div>
      {filteredCountries.map((country) => (
        <div key={country.numericCode}>
          {country.name}
          <button onClick={() => handleClick(country)}>Show</button>
        </div>
      ))}
      {oneCountry ? <Country country={oneCountry} /> : ''}
    </div>
  )
}

const App = () => {
  const [countriesData, setCountriesData] = useState([]) //array  of objects with names
  const [newFilter, setNewFilter] = useState('') //getting text from filter input

  const hook = () => {
    axios.get('https://restcountries.com/v2/all').then((response) => {
      setCountriesData(response.data)
    })
  }

  useEffect(hook, [])
  // console.log(countriesData);

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Filter onChange={handleFilter} value={newFilter} />
      <Content countriesData={countriesData} newFilter={newFilter} />
    </div>
  )
}

export default App
