import React from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'

const Search = () => {

  return (
    <Main 
      title='서치페이지'
      description='검색결과페이지 입니다.'
    >
      <h2><em>검색결과입니다.</em></h2>
        <seaction id='searchPage'>
          <div className='video__inner search'>
            <VideoSearch />
          </div>
        </seaction>
    </Main>
  )
}

export default Search