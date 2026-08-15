import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/Home'

const App = () => {
  const location = useLocation()

  const isOwnerPath = location.pathname.startsWith('/owner')

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
<Routes>
  <Route path='/' element={<Home />} />
</Routes>
      </div>

     
    </div>
  )
}

export default App