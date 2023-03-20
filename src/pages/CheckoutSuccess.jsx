import { Link } from "react-router-dom";
import "../styling/css/checkoutSuccess.css";

export default function CheckoutSuccess() {
  return (
    <>
      <h1>Thank you for your order!</h1> <Link to="/">Return</Link> 
      <div className="successMessage">Order no: 00037632</div>
      <div>Your items will be on their way soon!</div>
      <div className="successTable">
        <h4>Summary</h4>
        <div className="itemWrapperSuccess">
          <div className="successLeft">
          <div>NAME</div>
            <div>IMAGE</div>
          </div>
          <div className="successRight">
            <div>5</div>
            <div>PRICE</div>
          </div>
        </div>
        <div className="itemWrapperSuccess">
          <div className="successLeft">
          <div>NAME</div>
            <div>IMAGE</div>
          </div>
          <div className="successRight">
            <div>1</div>
            <div>PRICE</div>
          </div>
        </div>
        <div className="itemWrapperSuccess">
          <div className="successLeft">
          <div>NAME</div>
            <div>IMAGE</div>
          </div>
          <div className="successRight">
            <div>3</div>
            <div>PRICE</div>
          </div>
        </div>
      </div>
    </>
  )
}
