import PostCard from '../components/PostCard'

const loadPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const data = await res.json()
  return data
}

const page = async () => {
  const posts = await loadPost()
  //console.log(posts)
  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  )
}
export default page
