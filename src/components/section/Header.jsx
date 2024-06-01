import React from 'react'

//em 애니메이션부분  aria-hidden 그냥보여주는거라서 true
//리액트아이콘사용. 후에 데이타시켜주기 위해 header.js에 옮긴다.
//반복문과 map 매소드를 알아야 한다. 삼항연산자 rol=역할, 이 페이지의 역할을 설명

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';



const Header = () => {

  return (
    <header id='header' role='banner'>
      <Logo />
      <Menu />
      <Sns />
    </header>
  )
}

export default Header