import React from 'react'
import "./Chatbox.css"

function Chatbox() {
  return (
    <div className='Chatbox'>
      <section className='body_section'>
      <div className='userprofile'>
      <div className='userimg'><i class="bi bi-person-circle"></i></div>
        <div>
          Rajesh
        </div>
      </div>
      <div className='chatdataarea'>
          chat area
        </div>
      <div className='bottom'>
          <div id='emoji'><i class="bi bi-emoji-smile"></i></div>
          <div>
            <input id='chattextbox' type="text" placeholder='Type a message' />
          </div>
          <div className='send'><i class="bi bi-send"></i></div>
      </div>
      </section>
    </div>
  )
}

export default Chatbox