import React, { useState } from 'react'
import './BackGroungimage.css'
export default function BackGroungimage(props) {

    const BackGround={
        height:'50vh',
        width:'100%',
        backgroundColor:'pink',
        backgroundImage:`URL${props.background}`,
         backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
  return (
    <div style={BackGround} >
      <div>{props.text}</div>
      <div>{props.text1}</div>
    </div>
  )
}
