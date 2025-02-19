import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
      <ul className="footer-categories">
        <li><Link to={"/posts/categories/Education"}>Education</Link></li>
        <li><Link to={"/posts/categories/Discovery"}>Discovery</Link></li>
        <li><Link to={"/posts/categories/Technology"}>Technology</Link></li>
        <li><Link to={"/posts/categories/Art"}>Art</Link></li>
        <li><Link to={"/posts/categories/Entertainment"}>Entertainment</Link></li>
        <li><Link to={"/posts/categories/Business"}>Business</Link></li>
        <li><Link to={"/posts/categories/Investment"}>Investment</Link></li>
      </ul>
      <div className="footer-copyright">
        <small>&copy; copyright All Rights Reserved</small>
      </div>
      </div>
    </footer>
  )
}
