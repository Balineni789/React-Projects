
import React from 'react'
import { Link } from 'react-router-dom'

const MainNavBar = () => {
  return (
    <div className='navSection'>
      <ul>
        <Link to = "/1">        
        <li>First Page</li>
        </Link>
        
        <Link to = "/2">
        <li>Second Page</li>
        </Link>

        <Link to = "/3">
        <li>Third Page</li>
        </Link>

        <Link to = "/4">
        <li>Fourth Page</li>
        </Link>
      </ul>
    </div>
  )
}

export default MainNavBar