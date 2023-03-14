import "../styling/css/cart.css";

import { Link } from "react-router-dom";
// import Checkout from "./Checkout";
import { CheckoutButton, CartButton, CartDeleteButton, QuantityInput } from "../components/styledComponents/Buttons";

export default function Cart() {
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
          <tr>
            <td>
              {/* Link will be "/${id}" 
              Title, general info, price be fetched from API
              quantity placeholder be fetched from LocalStorage and updated upon clicking
              Total be calculated on site
              Delete removes quantity of select product*/}
              <div className="cartInfoLeft">
                <Link to="/">
                  <img src="placeholder_img_new.png" alt="placeholder" className="cartTableImg"/>
                </Link>
                <div className="cartTableGeInfo">
                  <h3>Title</h3>
                  General info
                </div>
              </div>
            </td>
            <td className="cartTableNumber">
              <QuantityInput type="number" placeholder="3" pattern="[0-9]*" min="1"/>
            </td>
            <td>
              99.99
            </td>
            <td  className="cartTableNumber">
              299.97
            </td>
            <td>
              <CartDeleteButton>
                Remove
              </CartDeleteButton>
            </td>
          </tr>
          <tr>
            <td>           
              <div className="cartInfoLeft">
                <Link to="/">
                  <img src="placeholder_img_new.png" alt="placeholder" className="cartTableImg"/>
                </Link>
                <div className="cartTableGeInfo">
                  <h3>Title</h3>
                  General info
                </div>
              </div>
            </td>
            <td className="cartTableNumber">
              <QuantityInput type="number" placeholder="2" pattern="[0-9]*" min="1"/>
            </td>
            <td>
              549.99
            </td>
            <td  className="cartTableNumber">
              1099.98
            </td>
            <td>
              <CartDeleteButton>
                Remove
              </CartDeleteButton>
            </td>
          </tr>
          <tr>
            <td>
              <div className="cartInfoLeft">
                <Link to="/">
                  <img src="placeholder_img_new.png" alt="placeholder" className="cartTableImg"/>
                </Link>
                <div className="cartTableGeInfo">
                  <h3>Title</h3>
                  General info
                </div>
              </div>
            </td>
            <td className="cartTableNumber">
              <QuantityInput type="number" placeholder="1" pattern="[0-9]*" min="1"/>
            </td>
            <td>544.33</td>
            <td  className="cartTableNumber">544.33</td>
            <td>
              <CartDeleteButton>
                Remove 
              </CartDeleteButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="cartCheckoutFinal">
        <div className="cartCheckoutLeft">
          <CartButton>Clear</CartButton>
        </div>
        <div className="cartCheckoutRight">
            <div className="cartTotalSum">
              <div className="cartTotal">
                Total
              </div>
              <div className="cartTotalPrice">
                1944.28
              </div>
            </div>
            <CheckoutButton>
              <Link to="/checkoutsuccess">Checkout</Link>
            </CheckoutButton>
        </div>
      </div>
    </>
  )
}
