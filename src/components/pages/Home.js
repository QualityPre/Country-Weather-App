import { useEffect, useState } from 'react'
import axios from 'axios'

import Content from '../Content'
import Filter from '../Filter'
import Divider from '../layout/Divider'

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
    <Divider>
      <Filter
        className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
        onChange={handleFilter}
        value={newFilter}
      />
      <div className="divider lg:divider-horizontal"></div>
      <Content
        className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
        countriesData={countriesData}
        newFilter={newFilter}
      />
    </Divider>
  )
}

export default Home
