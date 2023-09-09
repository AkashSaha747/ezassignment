import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Frm from '../Components/Frm'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Frm/>}/>
    </Routes>
  )
}

export default AllRoutes