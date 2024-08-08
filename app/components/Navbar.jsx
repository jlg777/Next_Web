import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <h1>Navbar</h1>
    <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='about'>About</Link></li>
    </ul>
    </>
  )
}
export default Navbar