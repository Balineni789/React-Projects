
import React from 'react'
import Firstpage  from './routing/Firstpage'
import Secondpage from './routing/Secondpage'
import Thirdpage  from './routing/Thirdpage'
import Fourthpage from './routing/Fourthpage'
import {Routes, Route} from 'react-router-dom'
import MainNavBar from './routing/NavBar'
import './routing/App1.css'

const App = () => {
  return (
    <div>
      <MainNavBar/>
      <Routes>
        <Route path ='/1' element = {<Firstpage/>}/>
        <Route path ='/2' element = {<Secondpage/>}/>
        <Route path ='/3' element = {<Thirdpage/>}/>
        <Route path ='/4' element = {<Fourthpage/>}/>
      </Routes>
    </div>
  )
}

export default App