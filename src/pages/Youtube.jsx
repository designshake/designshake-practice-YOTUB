import React, {useEffect, useState} from 'react'
import Main from '../components/section/Main'

import { youtubeText } from '../data/youtube'
import { Link } from 'react-router-dom'


const Youtube = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    //이 로딩의 값에 따라서 is로 혹은 isloaded를 붙여줄건지.
    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main 
      title='유튜뷰사이트'
      description='유튭동영상사이트입니다'
    >
      <section id='youtube' className={youtubePageClass}>
        <h2>웹디자인기능사 준비는 이걸로.</h2>
        <div className='video__inner'>
            {youtubeText.map ((video, key) => (
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

export default Youtube