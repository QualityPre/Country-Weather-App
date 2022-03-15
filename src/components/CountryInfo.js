import React from 'react'

const CountryInfo = ({ country }) => {
  return (
    <div className="card my-20  bg-base-100 shadow-xl image-full h-auto max-w-md text-lg">
      <figure>
        <img className="" src={country.flag} alt="Country flag" />
      </figure>
      <div className="card-body p">
        <h1 className="card-title">{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2> Languages</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <p>{country.region}</p>
        <p>{country.subregion}</p>
        {country.currencies.map((currency) => (
          <p key={currency.code}>
            {currency.name}
            {currency.symbol}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CountryInfo
