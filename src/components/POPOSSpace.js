// src/components/POPOSSpace.js

import React from 'react'
import logo from '../logo.svg'
import '../stylesheets/POPOSSpace.css';

function POPOSSpace(props) {
  // add props here
  const { name, image, address } = props
  return (
    <div className="POPOSSpace">
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace
