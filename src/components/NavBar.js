import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
        <nav className="">
            <Link className="" aria-current="page" to="/">Главная</Link>
            <Link className="" to="/quest/mainQuests">Прохождение</Link>
            <Link className="" to="/news">Новости</Link>
            <Link className="" to="/map">Карта</Link>
            <Link className="" to="/account">Профиль</Link>
        </nav>
  )
}
export default NavBar;