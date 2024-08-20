'use client'

import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div>
      <h2>
        {post.id} - {post.title}
      </h2>
      <p>{post.body}</p>
      <button
        onClick={() => {
          alert(`Click ${post.id}`)
        }}
      >
        Click
      </button>
      <br />
      <Link href={`/posts/${post.id}`}>Ir</Link>
    </div>
  )
}
export default PostCard
