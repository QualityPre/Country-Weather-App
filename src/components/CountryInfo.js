import React from 'react'
import { GiCapitol, GiMoneyStack } from 'react-icons/gi'
import { MdEmojiPeople } from 'react-icons/md'
import { FaMapMarkedAlt } from 'react-icons/fa'

const CountryInfo = ({ country }) => {
  return (
    <div className="card my-20 bg-base-100 shadow-xl image-full h-auto max-w-md ">
      <figure>
        <img className="opacity-70" src={country.flag} alt="Country flag" />
      </figure>
      <div className="card-body flex flex-col gap-6   ">
        <h1 className="card-title">{country.name}</h1>
        <p className="text-2xl hover:text-red-900">
          <GiCapitol className="inline pr-4 text-3xl" /> {country.capital}
        </p>
        <p className=" text-2xl hover:text-red-900">
          <MdEmojiPeople className="inline pr-4 text-3xl" />
          {country.population}
        </p>

        <p className=" text-2xl tracking-wide hover:text-red-900">
          <FaMapMarkedAlt className="inline pr-4 text-3xl" />
          {country.subregion} located in {country.region}
        </p>

        {country.currencies.map((currency) => (
          <p className=" text-2xl hover:text-red-900" key={currency.code}>
            <GiMoneyStack className="inline pr-4 text-3xl" />
            {currency.name} ({currency.symbol})
          </p>
        ))}
      </div>
    </div>
  )
}

export default CountryInfo
