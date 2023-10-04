import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GoPeople } from 'react-icons/go'
import { BiLayout, BiBasketball } from 'react-icons/bi'
import { MdShutterSpeed } from 'react-icons/md'
import './Carcard.css'

function CardList({ ele }) {
  // console.log(ele)
  const { id, img, price, people, color, year, speed, start, name } = ele
  return (
    // display all card data
    <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={id}>
      <div className="card">
        <img src={img} className="card-img-top round-5" alt={img} />
        <div className="card-body">
          <div className="title">
            <h5 className="card-title">{name}</h5>
            <button className="btn">{year}</button>
          </div>
          <div className="people">
            <span>
              <GoPeople color="#6AACEF" />
            </span>
            <p>{people}</p>
            <span>
              <BiLayout color="#6AACEF" />
            </span>
            <p>{color}</p>
          </div>

          <div className="automaic">
            <span>
              <MdShutterSpeed color="#6AACEF" />
            </span>
            <p>{speed}</p>
            <span>
              <BiBasketball color="#6AACEF" />
            </span>
            <p>{start}</p>
          </div>
          <hr />
          <div className="ratenow">
            <h6>${price}</h6>
            <div className="rate">
              <span>
                <div className="box">
                  <AiOutlineHeart color="#93C6F3" size={18} />
                </div>
              </span>
              <button className=" btn">Rate Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardList
