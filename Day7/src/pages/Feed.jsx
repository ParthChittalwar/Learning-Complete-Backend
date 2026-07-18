import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"

const Feed = () => {

    const [posts , setPosts] = useState([
        {
            _id : '1',
            image : "https://i.pinimg.com/736x/db/46/a4/db46a474b50e990ff8aa966fff6b742b.jpg",
            caption : "Default Post",
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res) => setPosts(res.data.posts))
        .catch(() => {})
    }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-56 w-full bg-gray-100 flex items-center justify-center">
                    <img className="object-cover h-full w-full" src={post.image} alt={post.caption} />
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-700">{post.caption}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Feed
