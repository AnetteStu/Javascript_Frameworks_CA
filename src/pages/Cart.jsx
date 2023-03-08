import { Link } from "react-router-dom";
// import Checkout from "./Checkout";
import { Button, CartButton } from "../components/styledComponents/Buttons";

export default function Cart() {
  return (
    <>
      <h1>Cart</h1>
      
      <Button>
        <Link to="/checkoutsuccess">Checkout</Link>
      </Button>
      <CartButton>Clear</CartButton>
    </>
  )
}
