import React, { useEffect, useState } from 'react'
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
        .then((res) => { 
            setPosts(res.data.posts) 
        })
        .catch(() => {})
    }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {
          posts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {posts.map((post) => (
                    <div key={post._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <div className="h-96 w-full bg-gray-100 flex items-center justify-center">
                            <img className="object-cover h-full w-full" src={post.image} alt={post.caption} />
                        </div>
                        <div className="p-6">
                            <p className="text-base text-gray-800 font-medium">{post.caption}</p>
                        </div>
                    </div>
                ))}
              </div>
          )
          :(
            <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow">
              <p className="text-lg text-gray-600 font-semibold">No Post Available</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Feed
