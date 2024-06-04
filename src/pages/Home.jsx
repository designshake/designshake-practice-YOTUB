import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gsap from '../components/contents/Gsap'
import Port from '../components/contents/Port'
import Youtube from '../components/contents/Youtube'



//{props.title && <title>{props.title}</title>} title을 받아온다.
//content파일은 앞에 홈메인에 보이는 대표적 짧은 페이지들을 말한다. 본페이지는 pages에 있다.
//전체페이지가 아닌 대표적으로 메인에 짧게 보여지는 페이지.
//처음 보이는 전체 메뉴 하나씩 보이는 화면 contents> 콤포넌트 만들어서 불러온다.

export const Home = () => {
  return (
    <Main 
      title='에버랜드3MK' 
      descriptiion='이것이 메인페이지입니다.'
    >
        <Today  />
        <Developer />
        <Webd />
        <Website />
        <Gsap />
        <Port />
        <Youtube />
    </Main>
  )
}

export default Home