import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

//props 를 생략 id, title, videos 값을 받아서 적용.
//swiper도 활용한다. package.json에서 설치했음 미리.
//id값은 여러개 있기때문에 className에 id값을 처리해준다.
//라인19:video__inner에서 video__slider로 이름변경, inner의 css가 먹혀서 안보임.

const VideoSlider = ({id, title, videos}) => {

   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 500)
   }, []);

   const videoClass = loading ? 'isLoading' : 'isLoadied';

  return (
   <>
      <section id={id} className={videoClass}>
         <h2>{title}</h2>
         <div className='video__slider'>
            <Swiper 
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={true}
                  modules={[Navigation]} 
                  className={`mySwiper-${id}`}
                  breakpoints={{
                     640: {
                        slidesPerView:2,
                        spaceBetween:20
                     },
                     768: {
                        slidesPerView:3,
                        spaceBetween:20
                     },
                     1024: {
                        slidesPerView:4,
                        spaceBetween:20
                     },
                     1600: {
                        slidesPerView:5,
                        spaceBetween:20
                     }
                  }}
               >
               {videos.map ((video, key) => (
                  <SwiperSlide key={key}>
                     <div className='video'>
                     <div className='video__thumb play__icon'>
                        <Link to={`/video/${video.videoId}`}>
                           <img src={video.img} alt={video.title}/>
                        </Link>
                     </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   </>
  )
}

export default VideoSlider