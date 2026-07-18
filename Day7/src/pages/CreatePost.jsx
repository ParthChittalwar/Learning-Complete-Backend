import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:5000/posts", formData)
        .then((res) => {
            navigate("/feed")
        })
        .catch((err) => {
            console.log(err)
            alert("Error While Creating Post")
        })
    }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6 text-center">Create Post</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-sm font-medium text-slate-700">
            Upload Image
            <input
              type="file"
              name="image"
              accept="image/*"
              className="mt-3 block w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Caption
            <input
              type="text"
              name="caption"
              placeholder="Enter the caption"
              className="mt-3 block w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Create Post
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreatePost
