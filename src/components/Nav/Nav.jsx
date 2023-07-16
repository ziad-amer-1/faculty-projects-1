import { useState } from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import NavLinks from "../../utils/nav-links"
import navLinks from "../../utils/nav-links"

function Nav({ exclude }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/home">الصفحة الوئيسية</Link>
        </li>
        <li className={`has-inner-menu ${menuOpen ? "open" : ""}`}>
          <span onClick={() => setMenuOpen((prev) => !prev)}>الخدمات</span>
          <ul className="services-menu">
            {navLinks.map((link, index) => {
              if (link.title !== exclude) {
                return (
                  <li key={index}>
                    <Link to={link.directTo}>{link.title}</Link>
                  </li>
                )
              }
            })}
          </ul>
        </li>
        <li>
          <Link to="/">تسجيل الخروج</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
