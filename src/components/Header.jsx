import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [isNavShow, setIsNavShow] = useState(window.innerWidth > 1024 ? true : false);

  const closeNavHandler = () => {
    if(window.innerWidth < 1024) {
      setIsNavShow(false)
    }
    else{
      setIsNavShow(true)
    }
  }

  return (
    <nav>
        <div className="container nav-container">
            <Link className="nav-logo" to={"/"} onClick={closeNavHandler}>
                <h3>S<span>c</span>ribbles </h3>
            </Link>
            { isNavShow && <ul className="nav-menu">
                <li><Link to={'/profile'} onClick={closeNavHandler}>Profile</Link></li>
                <li><Link to={'/create'} onClick={closeNavHandler}>Create Posts</Link></li>
                <li><Link to={'/authors'} onClick={closeNavHandler}>Authors</Link></li>
                <li><Link to={'/logout'} onClick={closeNavHandler}>Logout</Link></li>
            </ul> }

            <button className="nav-toggle-button btn btn-danger" onClick={() => setIsNavShow(prev => !prev)}>

              {
                  isNavShow ?  <IoMdClose /> : <FaBars />
              }
            </button>
        </div>
    </nav>
  )
}
