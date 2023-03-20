import { useSelector } from "react-redux";

export default function Total() {
  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    let totalDiscountPrice = 0
    let totalDiscount = 0

    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity

      totalDiscount += item.discountedPrice * item.quantity
      totalDiscountPrice += (item.price - item.discountedPrice) * item.quantity
    })
    return {totalPrice, totalQuantity, totalDiscount, totalDiscountPrice}
  }
  return (
    <div className="cartTotalSum">
      <div className="cartSum">
        <div>Items:</div>
        <div>Orig:</div>
        <div>Saving:</div>
      </div>
      <div>
        <div> {getTotal().totalQuantity}</div>
        <div> {getTotal().totalPrice.toFixed(2)},-</div>
        <div> -{getTotal().totalDiscountPrice.toFixed(2)},-</div>
      </div>
      <div>Total: <span className="cartTotalPrices">{getTotal().totalDiscount.toFixed(2)},-</span></div>
    </div>
  )
}
