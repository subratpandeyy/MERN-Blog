import { Link } from "react-router-dom"

export default function Logout() {
  return (
    <section>
    <div className="error-center">
      <h1>Logout</h1>
      <Link to={'/'} className="btn btn-primary">LogOut</Link>
    </div>
  </section>
  )
}
