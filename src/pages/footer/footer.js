import React from 'react'
import './footer.scss'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo} from '../../img/svg/logo-UA.svg'
import { ReactComponent as IconInstagram } from '../../img/svg/Instagram-big.svg'
import { ReactComponent as IconYouTube } from '../../img/svg/YouTube.svg'
import { ReactComponent as IconLinkendin } from '../../img/svg/Linkendin.svg'


const Footer = () => {
  return (
  <footer className="footer">
    <div className="content">
      <header className="footer_header">
        <Logo className="logo" alt="logo" />
        <ul className="footer_menu_sns">
          <li>
            <Link href="#">
            <IconInstagram className="icon_sns" />
            </Link>
          </li>
          <li>
            <Link href="#">
            <IconYouTube className="icon_sns" />
            </Link>
          </li>
          <li>
            <Link href="#">
            <IconLinkendin className="icon_sns" />
            </Link>
          </li>
        </ul>
      </header>
      <div className="footer_nav">
        <Logo className="logo" alt="logo" />
        <nav className="footer_menu" aria-label="footer menu navigation">
          <ul className="footer_menu_items">
            <li className="nav_big_item nav_item__activ">
              <NavLink className="nav_item__link" title="Головна" href="#">Головна</NavLink>
            </li>
            <li className="nav_big_item">
              <NavLink className="nav_item__link" title="Регіони" href="#">Регіони</NavLink>
            </li>
            <li className="nav_big_item">
              <NavLink className="nav_item__link" title="Подорожі" href="#">Подорожі</NavLink>
            </li>
            <li className="nav_big_item">
              <NavLink className="nav_item__link" title="Бронювання" href="#">Бронювання</NavLink>
            </li>
            <li className="nav_big_item">
              <NavLink className="nav_item__link" title="Традиції" href="#">Традиції</NavLink>
            </li>
            <li className="nav_big_item big_text">
              <NavLink className="nav_item__link" title="F.A.Q." href="#">F.A.Q.</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <footer class="copyright">
        <p>Всі права захищені</p>
        <p>2023</p>
      </footer>
    </div>
  </footer>
  )
  }

  export default Footer
