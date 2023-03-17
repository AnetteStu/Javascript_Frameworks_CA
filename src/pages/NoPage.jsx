import { Link } from "react-router-dom"

export default function NoPage() {
  document.title = `Not Found`
  return (
    <>
    <Link to="/">Go back</Link>
    <h1 className="pageHeader">404</h1>
    <p>The page you're looking for doesn't seem to exist</p>
  </>
  )
}
