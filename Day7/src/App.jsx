import React from 'react'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Home from './Components/Home'


const App = () => {
  return (
    <div>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/createpost" element = {<CreatePost />} />
          <Route path = "/feed" element = {<Feed />} />
        </Routes>
    </div>
  )
}

export default App
