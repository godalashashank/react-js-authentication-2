// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart"
        />
      </div>
    </>
  )
}

export default Cart
