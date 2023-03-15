import { Link } from 'react-router-dom';
import "../styling/css/nav.css";
import { useSelector } from 'react-redux';

export default function Nav() {
  const cart = useSelector((state) => state.cart);

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  });
  return total
}
  return (
    <nav>
      <div className='navLeft'>
        <Link to="/">eCommerce</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="cart" className='cart'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='cartIndex'>{getTotalQuantity() || 0}</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}