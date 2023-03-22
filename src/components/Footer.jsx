import "../styling/css/footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="footerItems container">
        <div className="row footerRow">
          <li className="footerItem col-4 col-sm-4">
            &#169; Kizu Anette Dahle S.
          </li>
          <li className="footerItem col-4 col-sm-4">
            Javascript Frameworks CA
          </li>
          <div className="w-100"></div>
          <li className="footerItem col-4 col-sm-4">
            Header Credit to <a href="https://unsplash.com/photos/LR5eS1C9IUU">Ben Blennerhassett</a>
          </li>
          <li className="footerItem col-4 col-sm-4" title="You'll get nothing">
            Do not attempt to purchase from this shop
          </li>
        </div>
      </ul>
    </footer>
  )
}
