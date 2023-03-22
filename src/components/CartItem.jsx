import "../styling/css/cart.css";
import { incrementQuantity, decrementQuantity, removeItem } from "../features/counter/cartSlice";
import { CartDeleteButton } from "./styledComponents/Styled_components";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

export default function CartItem({id, description, image, title, price, discount, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <>       
      <tr>
        <td>

          <div className="cartInfoLeft">
            <Link to={"/products/"+id}>
              <img src={image} alt="placeholder" className="cartTableImg"/>
            </Link>
            <div className="cartTableGeInfo">

              <h3>{title}</h3>
              {description}

            </div>
          </div>
        </td>
        <td className="cartTableNumber">
          <div className='cartItemButtons'>
            <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
            <div className="cartQuantity">{quantity}</div>
            <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
          </div>
        </td>
        <td>
          {(price > discount) ? <>{discount} SALE</> : <>{price}</>} 
        </td>
        <td className="cartTableNumber">
          {(price > discount) ? discount*quantity : price*quantity}
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