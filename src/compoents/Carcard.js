import React, { useState } from 'react'
import Carcarddata from '../Cardata'
import Serchcar from '../compoents/Serchcar'
import './Carcard.css'
import CardList from './CardList'
import Pagination from './Pagination'

function Carcard() {
  const initialCarsData = Carcarddata
  const [cars, setCars] = useState(initialCarsData)
  const [page, setPage] = useState(1)

  const handleSerch = (serchtext) => {
    // console.log(cars)
    const filternamecar = cars.filter((cars) =>
      cars.name.toLowerCase().includes(serchtext.toLowerCase()),
    )
    setCars(filternamecar)
  }

  return (
    <div className="container maincard">
      <Serchcar onSerch={handleSerch} />
      <div className="row">
        {cars.length > 0 &&
          cars.slice(page * 6 - 6, page * 6)?.map((ele) => {
            // console.log(ele)
            return <CardList ele={ele} key={ele.id} />
          })}
      </div>
      <div className="row">
        {cars.length > 0 && (
          <div className="container">
            <Pagination cars={cars} setPage={setPage} page={page} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Carcard
