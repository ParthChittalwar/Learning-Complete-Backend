import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const formData = new FormData(e.target)
    
        axios.post("http://localhost:3000/create-post", formData)
        .then((res) => {
            navigate("/feed")
        })
        .catch((err) => {
            console.log(err)
            alert("Error While Creating Post")
        })
    }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Create Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <input
              type="file"
              name="image"
              className="w-full text-sm text-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Description"
              className="w-full border border-gray-300 rounded-md p-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
