import Products from "../components/Products";
// import { FilterInput } from "../components/styledComponents/Buttons";
import "../styling/css/front.css";

// const magn = `<i class="fa-solid fa-magnifying-glass"></i>`
// ${magn}

export default function FrontPage() {
  document.title = `eCommerce`
  return (
    <>
      <div className="welcome">
        <h1>Welcome!</h1><span>How may we interest you?</span>
      </div>
      {/* <FrontPage/> */}
      <Products/>
    </>
  )
}
