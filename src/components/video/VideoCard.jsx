import React from 'react'
import { Link } from 'react-router-dom'

//반복문 돌릴때는 <> </> 하나 넣어준다. 

const VideoCard = ({videos}) => {
    return (
      <>
        {videos.map((video, key)=>(
          <div className='video' key={key}>
            <div className='video__thumb play__icon'>
              <Link to={`video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </>
    )
}

export default VideoCard  