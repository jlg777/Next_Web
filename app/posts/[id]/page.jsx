import { Suspense } from 'react'
import PostPage from '../../posts/page'

const loadPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}
const page = async ({ params }) => {
  const data = await loadPost(params.id)
  //console.log(data)
  return (
    <>
      <strong>{data.id}</strong>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <hr />
      <Suspense fallback={<h1>Cagando!!!!</h1>}>
        <PostPage />
      </Suspense>
    </>
  )
}
export default page
