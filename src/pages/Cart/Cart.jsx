import React, { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const { food_list, cartItem, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item '>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
        <div className="cart-bottom">
          <div className="card-total">
            <h2>Card Total</h2>
            <div>
              <div className="cart-total-deatal">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-deatal">
                <p>Delevery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-deatal">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
             <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='Promo Code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default Cart