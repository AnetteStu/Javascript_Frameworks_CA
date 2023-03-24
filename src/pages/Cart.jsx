import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Total from '../components/Total'
import { useDispatch } from 'react-redux'
import { clear, checkout } from '../features/counter/cartSlice'

import { CartButton, CheckoutButton } from '../components/styledComponents/Styled_components'

function Cart() {
  document.title = `Cart`
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  // console.log(cart);

  if (cart.length >= 1) {
    return (
      <>
        <h1>Cart</h1>
        <table className="cartTable">
            <tbody>
            <tr className="tableRowFirst">
                <th >Information</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Delete</th>
            </tr>
                {cart?.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.imageUrl}
                    title={item.title}
                    price={item.price} 
                    discount= {item.discountedPrice.toFixed(2)}
                    quantity={item.quantity}
                  />
                ))}  
          </tbody>
        </table>
        <div className="cartCheckoutFinal">
            <div className="cartCheckoutLeft">
              <CartButton onClick={() => dispatch(clear())}>Clear</CartButton>
            </div>
            <div className="cartCheckoutRight">
                <Total/>
                <CheckoutButton onClick={() => dispatch(checkout())}>
                  <Link to="/checkoutsuccess">Checkout</Link>
                </CheckoutButton>
            </div>
          </div>
      </>
    )
  }
  return (
    <>
      <h1>Cart</h1>
      <p>Nothing in cart yet!</p>
    </>
  )
}

export default Cart