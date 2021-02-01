import Link from 'next/link'


const Navbar = () => {
  return ( 
    <div className="logo">
      <h1>nin jas list</h1>
      <Link href="/"><a>Day1</a></Link>
      <Link href="/day2"><a>Day2</a></Link>
      <Link href="/ninjas"><a>Ninja Listing</a></Link>
    </div>
   );
}
 
export default Navbar;