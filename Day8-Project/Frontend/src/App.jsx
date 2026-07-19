import React from 'react'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/createpost" element = {<CreatePost />} />
          <Route path = "/feed" element = {<Feed />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App