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
        <div className="cartSumItem priceOutline"> 
          <div>Items:</div>
          <span> {getTotal().totalQuantity}</span>
        </div>
        <div className="cartSumItem"> 
          <div>Orig:</div>
          <span> {getTotal().totalPrice.toFixed(2)}</span>
        </div>
        <div className="cartSumItem priceOutline"> 
          <div>Saving:</div>
          <span> - {getTotal().totalDiscountPrice.toFixed(2)}</span>
        </div>
        <div className="cartSumItem"> 
          <div>Total:</div>
          <span className="cartTotalPrices">{getTotal().totalDiscount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
