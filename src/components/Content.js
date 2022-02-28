import Country from './Country'

import { useState } from 'react'

const Content = ({ countriesData, newFilter }) => {
  const [oneCountry, setOneCountry] = useState(false) //get data from country

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

export default Content
