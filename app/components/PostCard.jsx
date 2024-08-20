'use client'
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
    </div>
  )
}
export default PostCard
