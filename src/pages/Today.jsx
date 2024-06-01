//반복문 map을 써서 가져온다
//Link 해주면 자동완성으로 라우터부분이 뜬다.

import React from 'react'
import Main from '../components/section/Main'
import { todayText } from '../assets/data/oneday'
import { Link } from 'react-router-dom' 

export const Today = () => {
  return (
      <Main
        title="추천영상" 
        description="오늘의 추천 유튜브 영상입니다.">

          <section id='todayPage'>
            <h2>오늘의 추천 IBAO 입니다.</h2>
              {todayText.map((today, key) =>(
                <div className='today__inner' key={key}>
                <div className='today__thumb'>
                  <Link to={today.page}>
                    <img src={today.img} alt={today.title} />
                  </Link>
                </div>
                <div className='today__text'>
                  <span className='today'>today</span>
                  <h3 className='title'>
                    <Link to={today.page}>
                      {today.title}
                    </Link>
                    </h3>
                  <p className='desc'>{today.desc}</p>
                  <div className='info'>
                    <span className='author'>
                      <Link to={`/channel/${today.channelId}`}>
                        {today.author}
                      </Link>
                    </span>
                    <span className='date'>{today.date}</span>
                  </div>
                </div>
                </div>
              ))}
          </section>
      </Main>
  )
}

export default Today
