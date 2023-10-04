import React, { useState } from 'react'
import './Serchcar.css'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { FaAngleDown } from 'react-icons/fa'

function Serchcar({ onSerch }) {
  const [serch, setSerch] = useState('')

  // handle serch box
  const handleSerch = (e) => {
    setSerch(e.target.value)
    onSerch(e.target.value)
  }
  return (
    <div className="container">
      <div className="serchbox d-flex">
        <div className="serch m-2">
          <input
            type="serch"
            className="form-control"
            placeholder="Serch..."
            value={serch}
            onChange={handleSerch}
          />
          <div className=" serchbtn ">
            <HiMiniMagnifyingGlass size={22} color="#788194" />
          </div>
        </div>
        <div className="revelance ">
          <h6 className="px-3">
            Relevance{' '}
            <span>
              <FaAngleDown />
            </span>
          </h6>
          <h6 className="px-3">
            All Brands{' '}
            <span>
              <FaAngleDown />
            </span>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Serchcar
