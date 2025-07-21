import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Header from '../Components/Header'

const ShoppingCart = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default ShoppingCart