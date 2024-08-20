import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </>
  )
}
export default Navbar
