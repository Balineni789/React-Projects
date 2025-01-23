
import React from 'react'
import { userData } from './data'

const SampleObjects = ()=>{
  return(
    <div>{userData.map((H)=>{
      return(
        <div style={{border:"1px solid red"}}>
         <div>{H.name}</div>
         <div>{H.email}</div>
         <div>{H.address.city}</div>
        </div>
      )
    })}</div>
  )
}

export default SampleObjects;
