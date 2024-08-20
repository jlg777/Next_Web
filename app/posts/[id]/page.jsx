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
    </>
  )
}
export default page
