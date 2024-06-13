import React, {useEffect, useState} from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import {webdText} from '../data/webd'


const Webd = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    //이 로딩의 값에 따라서 is로 혹은 isloaded를 붙여줄건지.
    const webdPageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
        title='webd'
        description='webd페이지입니다.'
      >
      <section id='webd' className={webdPageClass}>
        <h2>웹디자인기능사 한 번에 따자.</h2>
        <div className='video__inner'>
            <VideoCard videos={webdText} />
        </div>
      </section>
    </Main>
  )
}

export default Webd