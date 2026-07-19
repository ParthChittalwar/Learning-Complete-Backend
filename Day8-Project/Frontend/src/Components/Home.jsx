import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-5xl font-bold text-gray-800">This is Main Page</h1>
        <h1 className="text-4xl font-semibold text-indigo-600">Basic Backend Project</h1>
        <div className="space-y-4 pt-8">
          <h1>
            <Link to="/createpost" className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200">
              Create Post
            </Link>
          </h1>
          <h1>
            <Link to="/feed" className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200">
              Feed
            </Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
