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

export const Home = () => {
  return (
   <div>
    <Developer />
    <Channel />
    <Gsap />
    <Port />
    <Today />
    <Video />
    <Wedb />
    <Website />
    <Youtube />
   </div>
  )
}

export default Home