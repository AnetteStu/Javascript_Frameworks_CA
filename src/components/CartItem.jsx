import "../styling/css/cart.css";
import { incrementQuantity, decrementQuantity, removeItem } from "../features/counter/cartSlice";
import { CartDeleteButton, IncreaseButton, DecreaseButton } from "./styledComponents/Styled_components";
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
            <DecreaseButton onClick={() => dispatch(decrementQuantity(id))}>-</DecreaseButton>
            <div className="cartQuantity">{quantity}</div>
            <IncreaseButton onClick={() => dispatch(incrementQuantity(id))}>+</IncreaseButton>
          </div>
        </td>
        <td>
          {(price > discount) ? <><div className="cartDiscountedPrice">{discount} <div className="saleIcon">SALE</div></div></> : <>{price.toFixed(2)}</>} 
        </td>
        <td className="cartTableNumber">
          {(price > discount) ? (discount*quantity).toFixed(2) : (price*quantity).toFixed(2)}
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