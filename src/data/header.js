//반복문과 map 매소드를 알아야 한다.

import { CiFaceSmile } from "react-icons/ci";
import { BiAlarmSnooze } from "react-icons/bi";
import { BiBaseball } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export const headerMenus = [
  {
      title: "에버랜드",
      icon: <CiFaceSmile />,
      src: "/"
  },
  {
      title: "추천 영상",
      icon: <BiAlarmSnooze />,
      src: "/today"
  },
  {
      title: "추천 개발자",
      icon: <BiAlarmSnooze />,
      src: "/developer"
  },
  {
      title: "웹디자인기능사",
      icon: <BiBaseball />,
      src: "/webd"
  },
  {
      title: "웹표준 사이트",
      icon: <BiBaseball />,
      src: "/website"
  },
  {
      title: "GSAP Parallax",
      icon: <BiBaseball />,
      src: "/gsap"
  },
  {
      title: "포트폴리오 사이트",
      icon: <BiBaseball />,
      src: "/port"
  },
  {
      title: "유튜브 클론 사이트",
      icon: <BiBaseball />,
      src: "/youtube"
  },
];

export const searchKeyword = [
  {
      title: "webstoryboy",
      src: "/search/webstoryboy"
  },
  {
      title: "HTML",
      src: "/search/html"
  },
  {
      title: "CSS",
      src: "/search/css"
  },
  {
      title: "JavaScript",
      src: "/search/javascript"
  },
  {
      title: "React.js",
      src: "/search/react.js"
  },
  {
      title: "Vue.js",
      src: "/search/vue.js"
  },
  {
      title: "Next.js",
      src: "/search/next.js"
  },
  {
      title: "Node.js",
      src: "/search/node.js"
  },
  {
      title: "SQL",
      src: "/search/sql"
  },
  {
      title: "portfolio",
      src: "/search/React Portfolio"
  },
  {
      title: "music",
      src: "/search/NewJeans"
  }
];

export const snsLink = [
  {
      title: "github",
      url: "https://github.com/webstoryboy",
      icon: <IoLogoYoutube />
  },
  {
      title: "youtube",
      url: "https://www.youtube.com/webstoryboy",
      icon: <FaInstagram/>
  },
  {
      title: "codepen",
      url: "https://codepen.io/webstoryboy",
      icon: <FaFacebook />
  },
  {
      title: "instagram",
      url: "https://www.instagram.com/webstoryboy",
      icon: <FaXTwitter />
  },
]