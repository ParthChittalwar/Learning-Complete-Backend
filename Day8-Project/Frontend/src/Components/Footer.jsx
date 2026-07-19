import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-lg font-bold mb-2">Created By Parth Chittalwar</h2>
          </div>
          <div>
            <p className="text-sm">Copyright &copy; 2026</p>
          </div>
          <div>
            <nav>
              <ul className="flex gap-6 justify-end">
                <li>
                  <Link className="hover:underline transition duration-200" to="/">Home</Link>
                </li>
                <li>
                  <Link className="hover:underline transition duration-200" to="/createpost">Create Post</Link>
                </li>
                <li>
                  <Link className="hover:underline transition duration-200" to="/feed">Feed</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
