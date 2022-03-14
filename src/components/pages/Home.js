import { useEffect, useState } from 'react'
import axios from 'axios'

import Content from '../Content'
import Filter from '../Filter'

const Home = () => {
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
    <div className="grid">
      <Filter onChange={handleFilter} value={newFilter} />
      <Content countriesData={countriesData} newFilter={newFilter} />
    </div>
  )
}

export default Home
