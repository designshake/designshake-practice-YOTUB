import React from 'react'

import { headerMenus, searchKeyword } from '../../assets/data/header'
import { Link, useLocation } from 'react-router-dom'
//className=keyword는 라운드 형태의 txt버튼, 로케이션도 불러와야 적용된다.

const Menu = () => {
  const location = useLocation();

  return (
    <nav className='header__menu'>
        <ul className='menu'>
          {headerMenus.map((menu, key) => (
            <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
              <Link to={menu.src}>
                {menu.icon}{menu.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='keyword'>
          {searchKeyword.map ((keyword, key) => (
            <li key={key} className={location.pathname === keyword.src ? 'active' : ''}>
             <Link to={keyword.src}>
              {keyword.title}
             </Link>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Menu