import React from 'react'
import Channel from '../components/contents/Channel'
import Gsap from '../components/contents/Gsap'
import Port from '../components/contents/Port'
import Today from '../components/contents/Today'
import Video from '../components/contents/Video'
import Wedb from '../components/contents/Wedb'
import Website from '../components/contents/Website'
import Youtube from '../components/contents/Youtube'
import Developer from '../components/contents/Developer'


//{props.title && <title>{props.title}</title>} title을 받아온다.
//content파일은 앞에 홈메인에 보이는 대표적 짧은 페이지들을 말한다. 본페이지는 pages에 있다.
//전체페이지가 아닌 대표적으로 메인에 짧게 보여지는 페이지.

export const Home = () => {
  return (
   <>
    <Today />
    <Developer />
    <Wedb />
    <Website />
    <Gsap />
    <Port />
    <Youtube />
    <Channel />
    <Video />
   </>
  )
}

export default Home