import React from 'react'
import "./Hedder.css"
function Hedder
() {
  return (
    <div className='heddercomp'>
        <div className='BrandName'>QT Chat</div>
        <div className='leftcomp'>
            <div className='img'><i class="bi bi-person-bounding-box"></i></div>
            <div className='name'>Name</div>
            <div className='logout'><i class="bi bi-box-arrow-right"></i></div>
        </div>
    </div>
  )
}

export default Hedder
