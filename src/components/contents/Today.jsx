import React from 'react'
import { todayText } from '../../assets/data/oneday'
import { Link } from 'react-router-dom' 

//배열이 들어가기 때문에 [0].img 처럼 시작.
const Today = () => {
  return (
    <div>
      <section id='today'>
        <div className='today__inner'>
          <div className='today__thumb'>
            <Link to={todayText[0].page}>
              <img src={todayText[0].img} alt={todayText[0].title} />
            </Link>
          </div>
          <div className='today__text'>
            <span className='today'>today</span>
            <h3 className='title'>
              <Link to={todayText[0].page}>
                {todayText[0].title}
              </Link>
              </h3>
            <p className='desc'>{todayText[0].desc}</p>
            <div className='info'>
              <span className='author'>
                <Link to={`/channel/${todayText[0].channelId}`}>
                  {todayText[0].author}
                </Link>
              </span>
              <span className='date'>{todayText[0].date}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Today