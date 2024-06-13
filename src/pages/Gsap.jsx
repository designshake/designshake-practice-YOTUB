import React, {useEffect, useState} from 'react'
import Main from '../components/section/Main'

import { gsapText } from '../data/gsap'
import { Link } from 'react-router-dom'

const Gsap = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    //이 로딩의 값에 따라서 is로 혹은 isloaded를 붙여줄건지.
    const developerPageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main 
      title='gsap페이지'
      description='gsap페이지입니다.'
    >
      <section id='gsap' className={developerPageClass}>
        <h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
        <div className='video__inner'>
            {gsapText.map ((video, key) => (
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

export default Gsap