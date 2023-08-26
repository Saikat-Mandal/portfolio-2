import React from 'react'
import "./button.css"
function Button(props) {
  return (
    <div className='d'>
        <button onClick={props.onClick} className='blog'>{props.text}</button>
    </div>
  )
}

Button.defaultProps={
    text:"Submit"
}

export default Button