
import React from 'react'

const FourthComp = (props) => {
  const {Model,Color,Year} = props.car1  // Prop Deconstructing 
  return(
    <div>
      <div>{Model}</div>
      <div>{Color}</div>
      <div>{Year}</div>
    </div>
  )
}

export default FourthComp
