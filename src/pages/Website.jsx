import React, {useEffect, useState} from 'react'
import Main from '../components/section/Main'

import { websiteText } from '../data/website'
import { Link } from 'react-router-dom'

const Website = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    //이 로딩의 값에 따라서 is로 혹은 isloaded를 붙여줄건지.
    const websitePageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
        title='website페이지'
        description='웹사이트페이지입니다.'
      >
      <section id='website' className={websitePageClass}>
      <h2>웹표준사이트 기초 다지기</h2>
      <div className='video__inner'>
          {websiteText.map ((video, key) => (
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

export default Website