import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Header from "./Header";


export default function Layout() {
  return (
    <>
      <Header/>
      <div className="container">
        <Outlet className="body"/>
      </div>
      {/* <Footer/> */}
    </>
  )
}

// Footer left out temporary to focus on other more important functionality 