import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">This The Social Media Application Basic Backend Project</h1>
        <div className="flex gap-4 justify-center">
          <Link to="/createpost" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Create Post</Link>
          <Link to="/feed" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Feed</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
