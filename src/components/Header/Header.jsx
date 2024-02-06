import React from 'react'
import styles from './Header.module.scss'
// import icon from '../../index.css'
import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import logo from '../../img/svg/logo-UA.svg'; 


const Header = () => {
  return (
<header className={styles.header}>
          <div className={styles.header_nav}>
        <img className={styles.logo} src={logo} alt="logo" />
        <nav className={styles.nav} aria-label="main navigation">
          <ul className={styles.nav_big}>
            <li className={styles.nav_big_item + " " + styles.nav_item__activ}>
              <NavLink className={styles.nav_item__link} title="Головна" href="#">Головна</NavLink>
            </li>
            <li className={styles.nav_big_item}>
              <NavLink className={styles.nav_item__link}  title="Регіони" href="#">Регіони</NavLink>
            </li>
            <li className={styles.nav_big_item}>
              <NavLink className={styles.nav_item__link} title="Подорожі" href="#">Подорожі</NavLink>
            </li>
            <li className={styles.nav_big_item}>
              <NavLink className={styles.nav_item__link}  title="Бронювання" href="#">Бронювання</NavLink>
            </li>
            <li className={styles.nav_big_item}>
              <NavLink className={styles.nav_item__link} title="Традиції" href="#">Традиції</NavLink>
            </li>
            <li className={styles.nav_big_item}>
              <NavLink className={styles.nav_item__link} title="F.A.Q." href="#">F.A.Q.</NavLink>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav_small} aria-label="menu auxiliary">
          <ul className={styles.nav_small_items}>
            <li className={styles.menu_language} aria-label="menu language">
              <span className={styles.language_selection} title="Укр">Укр</span>
              <span><i className={styles.icon_arrow_up_down}></i></span>
            </li>
            <li className={styles.menu_user}>
              <NavLink className={styles.menu_user__link} href="#"> <i className={styles.icon_favorites_big} ></i></NavLink>
              <NavLink className={styles.menu_user__link} href="#"> <i className={styles.icon_account} ></i></NavLink>
            </li>
            <li className={styles.nav_mob} aria-label="nav-mob">
              <ul className={styles.nav_mob_items} >
                <li className={styles.mob_search} >
                  <NavLink className={styles.mob_item__link} href="#"><i className={styles.icon_search}></i></NavLink>
                </li>
                <li className={styles.menu_burger}>
                  <NavLink className={styles.mob_item__link} href="#"><i className={styles.icon_menu_burger}></i></NavLink>
                  <ul className={styles.menu_burger_items}>
                    <li className={styles.menu_burger_language} aria-label="menu burger language">
                      <ul className={styles.burger_language}>
                        <li className={styles.burger_language__active + " " + styles.big_text} data-burger-language="UA">УКР</li>
                        <li><i className={styles.burger_language__active + " " + styles.icon_arrow_up_light}></i></li>
                      </ul>
                         <ul className={styles.burger_language_selection}>
                          <li><NavLink className={styles.menu_burger__link + " " + styles.big_text} href="#">УКР</NavLink></li>
                          <li><i className={styles.icon_line} ></i></li>
                          <li><NavLink className={styles.menu_burger__link + " " + styles.big_text} href="#">ENG</NavLink></li>
                        </ul>
                    </li>
                    <li>
                      <NavLink className={styles.menu_burger__link} href="#">Головна</NavLink>
                    </li>
                    <li>
                      <NavLink className={styles.menu_burger__link} href="#">Регіони</NavLink>
                    </li>
                    <li>
                      <NavLink className={styles.menu_burger__link} href="#">Подорожі</NavLink>
                    </li>
                    <li>
                      <NavLink className={styles.menu_burger__link} href="#">Бронювання</NavLink>
                    </li>
                    <li>
                      <NavLink className={styles.menu_burger__link} href="#">Традиції</NavLink>
                    </li>
                    <li>
                      <NavLink className={styles.menu_burger__link + " " + styles.big_text} href="#">F.A.Q.</NavLink>
                    </li>
                    <li>
                      <NavLink className={styles.menu_burger__link} href="#">Мапа</NavLink>
                    </li>
                    <li>
                      <NavLink className={styles.menu_burger__link} href="#">Збережені</NavLink>
                    </li>
                    <li>
                      <NavLink className={styles.menu_burger__link} href="#">Профіль</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header
