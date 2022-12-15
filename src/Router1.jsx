import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom'
import App from '../src/App'

const Router1 = () => {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={App}/>
            <Route path='/About' element={<div>this is About page dear</div>}/>
                 
            
        </Routes>
    </BrowserRouter>
    
  )
}

export default Router1