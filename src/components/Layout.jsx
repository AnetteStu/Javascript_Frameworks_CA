import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import "../styling/css/layout.css";


export default function Layout() {
  return (
    <div className="project">
      <Header/>
      <div className="body">
        <div className="container">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}