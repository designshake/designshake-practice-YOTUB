
//페이자가 바뀌면 무조건 위로 올라오게 하는 js 
//연동을 모든 페이지를 관리하는 section > main.jsx에서 붙여준다.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollTo = () => {

  const { pathname } = useLocation();

  //무언가 변화가 있을때는 useEffect를 쓴다고 생각하면 된다.
  //철자에 점이 3개 생긴다면 오타를 생각하거나 필요없는 철자가 들어간걸 확인해라.
  useEffect (() => {
    window.scrollTo(0,0)
  }, [pathname]);

    return null;

    //연동을 시켜줘야 한다. 모든 페이지를 관할하는 페이지에 연동.

}
export default scrollTo;