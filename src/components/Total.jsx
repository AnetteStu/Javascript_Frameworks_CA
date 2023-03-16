import { useSelector } from "react-redux";

export default function Total() {
  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.totalQuantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  return (
    <div className="cartTotalSum">
      <div className="cartTotal">
        Total {getTotal().totalQuantity} items
      </div>
      <div className="cartTotalPrice">
        {getTotal().totalPrice},-
      </div>
    </div>
  )
}
