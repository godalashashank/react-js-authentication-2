// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products"
        />
      </div>
    </>
  )
}

export default Products
