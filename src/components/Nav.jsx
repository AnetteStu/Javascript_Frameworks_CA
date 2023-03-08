import { Link } from 'react-router-dom';
import "../styling/css/nav.css";

export default function Nav() {
  return (
    <nav>
      <div className='navLeft'>
        EVERY
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
            <span className='cartIndex'>4</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}