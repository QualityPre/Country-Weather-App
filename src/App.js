import { useEffect, useState } from 'react'
import axios from 'axios'
//components
import Content from './components/Content'
import Filter from './components/Filter'

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
