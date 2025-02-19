import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <section>
      <div className="error-center">
        <h2>Oops!</h2>
        <h3>Page not found...</h3>
        <Link to={'/'} className="btn btn-primary">Go Back Home</Link>
      </div>
    </section>
  )
}
