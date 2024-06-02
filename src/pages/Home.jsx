import React from 'react'
import Main from '../components/section/Main'


//{props.title && <title>{props.title}</title>} title을 받아온다.
//content파일은 앞에 홈메인에 보이는 대표적 짧은 페이지들을 말한다. 본페이지는 pages에 있다.
//전체페이지가 아닌 대표적으로 메인에 짧게 보여지는 페이지.

export const Home = () => {
  return (
    <Main title='에버랜드3MK' descriptiion='이것이 메인페이지입니다.'>
      homeeeee
    </Main>
  )
}

export default Home