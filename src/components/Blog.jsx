import React from 'react'
import "./blog.css"
function Blog(props) {
  return (
    <><div className="blog1">
    <div className="date">
      <p>{props.date}</p>
        
    </div>
        
    <div className='blog1-right'>
      <h1>{props.heading}</h1>
      <p>{props.para}</p>
    </div>

  </div>
  <div className="hr-div-bottom">
        <hr className='hr2' />
  </div></>
  )
}
Blog.defaultProps={
    date:"APR 17 2023",
    heading:"Legacy code",
    para:"What does it mean to work in a medium that could disappear tomorrow, and how do we get comfortable with that?"
}
export default Blog