import React from 'react'
import Search from './Search'

//app.js의 main안에 자식들을 불러오기 위해서 props라는 속성을 이용해서 나타난다.
//props의 자식들을 childern으로 불러낸다. props는 데이타를 전달해 주는 역할을 해준다.
//적용 후 클릭시 각 메뉴의 이름이 우측 컨텐츠 영역에 나타난다.
//한 페이지안에서 부드럽게 이동한다. 마치 페이지가 재로딩되지 않듯이.

const Main = (props) => {
  return (
    <main id='main' role='main'>
      <Search />
      {props.children}
    </main>
  )
}

export default Main