import Country from './Country'

import { useState } from 'react'

const Content = ({ countriesData, newFilter }) => {
  const [oneCountry, setOneCountry] = useState(false) //get data from country

  const filteredCountries = countriesData.filter((country) =>
    country.name.toLowerCase().includes(newFilter.toLowerCase())
  )
  if (filteredCountries.length === 250) return <p> Type!</p>
  if (filteredCountries.length > 5)
    return <p>Too many country matches, please refine your search</p>

  if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />
  }

  function handleClick(country) {
    setOneCountry(country)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-x-12 gap-y-12 ">
        {filteredCountries.map((country) => (
          <div
            key={country.numericCode}
            className="indicator hover:text-zinc-400"
          >
            <div className="indicator-item indicator-bottom ">
              <button
                onClick={() => handleClick(country)}
                className="btn  btn-xs sm:btn-sm md:btn-md  "
              >
                Show
              </button>
            </div>
            <div className="card border">
              <div className="card-body">
                <h2 className="card-title">{country.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      {oneCountry ? <Country country={oneCountry} /> : ''}
    </div>
  )
}

export default Content
