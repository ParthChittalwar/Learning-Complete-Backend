import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Basic Backend Project</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link className="hover:underline" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:underline" to="/createpost">Create Post</Link>
            </li>
            <li>
              <Link className="hover:underline" to="/feed">Feed</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
