import React from 'react'

//em 애니메이션부분  aria-hidden 그냥보여주는거라서 true
//리액트아이콘사용.

import { CiFaceSmile } from "react-icons/ci";
import { BiAlarmSnooze } from "react-icons/bi";
import { BiBaseball } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header__logo'>
        <a href='/'>
          <em aria-hidden='true'></em>
          <span>Design<br/>Shake</span>
        </a>
      </h1>
      <nav className='header__menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/'><CiFaceSmile />에버랜드가기</a>
          </li>
          <li>
            <a href='/today'><BiAlarmSnooze />추천영상</a>
          </li>
          <li>
            <a href='/developer'><BiAlarmSnooze />추천개발자</a>
          </li>
          <li>
            <a href='/webd'><BiAlarmSnooze />웹디자인 기능사</a>
          </li>
          <li>
            <a href='/site'><BiAlarmSnooze />웹표준 사이트</a>
          </li>
          <li>
            <a href='/port'><BiAlarmSnooze />포트폴리오 사이트</a>
          </li>
          <li>
            <a href='/developer'><BiAlarmSnooze />추천개발자</a>
          </li>
          <li>
              <a href='/youtube'>
              <BiAlarmSnooze />유튜브 클론 사이트
              </a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
              <a href='/search/webstoryboy'>Everland</a>
          </li>
          <li>
              <a href='/search/html'>HTML</a>
          </li>
          <li>
              <a href='/search/css'>CSS</a>
          </li>
          <li>
              <a href='/search/javascript'>JavaScript</a>
          </li>
          <li>
              <a href='/search/react.js'>React.js</a>
          </li>
          <li>
              <a href='/search/vue.js'>Vue.js</a>
          </li>
          <li>
              <a href='/search/next.js'>Next.js</a>
          </li>
          <li>
              <a href='/search/node.js'>Node.js</a>
          </li>
          <li>
              <a href='/search/sql'>SQL</a>
          </li>
          <li>
              <a href='/search/React Portfolio'>portfolio</a>
          </li>
          <li>
              <a href='/search/NewJeans'>music</a>
          </li>
        </ul>
      </nav>
      <div className='header__sns'>
        <ul>
          <li>
            <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
              <IoLogoYoutube />
            </a>
          </li>
          <li>
            <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header