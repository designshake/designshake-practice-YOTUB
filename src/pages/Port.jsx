import React from 'react'
import Main from '../components/section/Main'

import { portfolioText } from '../data/portfolio'
import { Link } from 'react-router-dom'

//Link to 에서는 backtick `` 으로 $가 붙은것들은.

const Port = () => {
  return (
    <Main
    title='port페이지'
    description='port페이지입니다'>
      <section id='gsap'>
        <h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
        <div className='video__inner'>
            {portfolioText.map ((video, key) => (
              <div className='video' key={key}>
                <div className='video__thumb play__icon'>
                  <Link to={`/video/${video.videoId}`}> 
                    <img src={video.img} alt={video.title}/>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </Main>
  )
}

export default Port