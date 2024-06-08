import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/video/VideoSlider'

//videoslider부분
import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer'
import { todayText } from '../data/today'

//{props.title && <title>{props.title}</title>} title을 받아온다.
//240607 비디오부분의 공통요소를 만들어 준다.
// 하나로 만들어서 재활용 한것이다.

// 누락부분 상단에 import component/contents 부분이 읽히지 않는다.
//  <Today videos={todayText} id='today' />
//  <Developer videos={developerText} title='😪 추천 개발자를 소개합니다.' id='developer' />

export const Home = () => {
  return (
    <Main 
      title='에버랜드3MK' 
      descriptiion='이것이 메인페이지입니다.'
    >
        <Today videos={todayText}  id='today'/>
        <Developer videos={developerText} title='추천개발자를 소개합니다.' id='developer'/>
        <VideoSlider videos={webdText} title='웹디자인기능사 준비는 이걸로' id='webd'/>
        <VideoSlider videos={websiteText} title='웹디자인기능사 준비는 이걸로' id='website'/>
        <VideoSlider videos={gsapText} title='웹디자인기능사 준비는 이걸로' id='gsap'/>
        <VideoSlider videos={portfolioText} title='포트폴리오 만드는 방법을 공유합니다.' id='portfolio'/>
        <VideoSlider videos={youtubeText} title='지금 이 코딩을 영상으로.' id='youtube'/>
    </Main>
  )
}

export default Home