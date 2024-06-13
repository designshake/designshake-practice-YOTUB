import React, {useEffect, useState} from 'react'
import Main from '../components/section/Main'

import { portfolioText } from '../data/portfolio'
import { Link } from 'react-router-dom'

//Link to 에서는 backtick `` 으로 $가 붙은것들은.

const Port = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    //이 로딩의 값에 따라서 is로 혹은 isloaded를 붙여줄건지.
    const portPageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
    title='port페이지'
    description='port페이지입니다'>
      <section id='gsap' className={portPageClass}>
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