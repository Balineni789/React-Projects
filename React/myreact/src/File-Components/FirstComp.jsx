
import React from 'react' // prop is Used To Get The Data From The Parent Component App.js

const FirstComp = (props) => { 
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}

export default FirstComp