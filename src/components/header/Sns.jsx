import React from 'react'

import { snsLink } from '../../assets/data/header'
//<></> 없애는건 매개변수로 쓰기위함.

const Sns = () => {
  return (
    <div className='header__sns'>
        <ul>
          {snsLink.map ((sns, key) => (
            <li key={key}>
                <a 
                  href={sns.url} 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  aria-label={sns.title}
                >
                  <span>{sns.icon}</span>
                </a>
            </li>
          ))}
        </ul>
     </div>
  )
}

export default Sns