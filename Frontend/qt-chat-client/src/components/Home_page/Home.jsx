import React from 'react'
import "./Home.css"
import Hedder from '../Hedder/Hedder'
import Sidebar from '../Side_Bar/Sidebar'
import Chatbox from '../Chatbox/Chatbox'
function Home() {
  return (
    <section className='section'>
    <div className='home_comp'>
      <Hedder/>

    <div className='bottom_body'>
        <Sidebar/>
        <Chatbox/>

    </div>
    </div>
    </section>
  )
}

export default Home