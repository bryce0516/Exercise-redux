import Link from 'next/link'


const Navbar = () => {
  return ( 
    <div className="logo">
      <h1>nin jas list</h1>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas"><a>Ninja Listing</a></Link>
    </div>
   );
}
 
export default Navbar;