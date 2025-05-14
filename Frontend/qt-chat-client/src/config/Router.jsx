import React from 'react'
import {Route , Routes} from "react-router-dom"
import UserSignup from '../pages/signup/UserSignup'
import UserSignin from '../pages/signin/UserSignin'
import Home from '../components/Home_page/Home'

function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserSignup/>} ></Route>
            <Route path='signin' element={<UserSignin/>} ></Route>
            <Route path='home' element={<Home/>} ></Route>
        </Routes>
    </div>
  )
}

export default Router