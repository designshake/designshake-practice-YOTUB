import React from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'

const Search = () => {

  // const {searchId} = useParams();
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   fetch(``)

  // }, [searchId]);

  return (
    <Main 
      title='서치페이지'
      description='검색결과페이지 입니다.'
    >
        <seaction id='searchPage'>
          <div className='video__inner search'>
            <VideoSearch />
          </div>
        </seaction>
    </Main>
  )
}

export default Search