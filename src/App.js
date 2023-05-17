import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Create from './page/Create'
import Update from './page/Update'

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/'  element={<Home />}  />
        <Route path='/create' element={<Create />}  />
        <Route path='/update' element={<Update />}  />
      </Routes>
      </Router>
    </div>
  )
}

export default App