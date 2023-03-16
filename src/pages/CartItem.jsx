import "../styling/css/cart.css";
import { incrementQuantity, decrementQuantity, removeItem } from "../features/counter/cartSlice";
import { CartDeleteButton } from "../components/styledComponents/Buttons";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

function CartItem({id, description, image, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <>       
      <tr>
        <td>
          {/* Link will be "/${id}" 
          Title, general info, price be fetched from API
          quantity placeholder be fetched from LocalStorage and updated upon clicking
          Total be calculated on site
          Delete removes quantity of select product*/}
          <div className="cartInfoLeft">
            <Link to={"/"+id}>
              <img src={image} alt="placeholder" className="cartTableImg"/>
            </Link>
            <div className="cartTableGeInfo">

              <h3>{title}</h3>
              {description}

            </div>
          </div>
        </td>
        <td className="cartTableNumber">
          <div className='cartItem__incrDec'>
            <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
            <p>{quantity}</p>
            <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
          </div>
        </td>
        <td>
          {price}
        </td>
        <td  className="cartTableNumber">
          {(price*quantity)}
        </td>
        <td>
          <CartDeleteButton onClick={() => dispatch(removeItem(id))}>
            Remove
          </CartDeleteButton>
        </td>
      </tr>
    </>
  )
}

export default CartItem