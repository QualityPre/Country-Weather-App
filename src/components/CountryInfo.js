import Card from './helper/Card'
import { GiCapitol, GiMoneyStack } from 'react-icons/gi'
import { MdEmojiPeople } from 'react-icons/md'
import { FaMapMarkedAlt } from 'react-icons/fa'

const CountryInfo = ({ country }) => {
  return (
    <div className="card my-20 bg-base-100 shadow-xl max-w-screen-sm image-full ">
      <figure>
        <img className="opacity-70" src={country.flag} alt="Country flag" />
      </figure>
      <Card title={country.name}>
        <p className="text-2xl hover:text-red-900">
          <GiCapitol className="inline pr-4 text-4xl" /> {country.capital}
        </p>
        <p className=" text-2xl hover:text-red-900">
          <MdEmojiPeople className="inline pr-4 text-4xl" />
          {country.population}
        </p>

        <p className=" text-2xl tracking-wide hover:text-red-900">
          <FaMapMarkedAlt className="inline pr-4 text-4xl" />
          {country.subregion}
        </p>

        {country.currencies.map((currency) => (
          <p className=" text-2xl hover:text-red-900" key={currency.code}>
            <GiMoneyStack className="inline pr-4 text-4xl" />
            {currency.name} ({currency.symbol})
          </p>
        ))}
      </Card>
    </div>
  )
}

export default CountryInfo
