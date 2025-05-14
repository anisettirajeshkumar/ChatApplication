import React from 'react'
import "./Sidebar.css"
import Search from '../SearchBox/Search'
import Chatarea from '../Chat_area/Chatarea'

function Sidebar() {
  return (
    <div className='Sidebar'>
        <Search/>
        <Chatarea/>


    </div>
  )
}

export default Sidebar