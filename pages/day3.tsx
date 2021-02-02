import React, { useEffect, useState } from 'react'
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link'



interface InitialProps {
  
}


export interface Props extends InitialProps {
  
}
 
const Day3: NextPage<Props, InitialProps> = () => {
  const [ likes, setLikes ] = useState(0)
  useEffect(() => {
    console.log('useEffect callback called')
    const listener = (e:any) => {
      console.log('mousedown', e.offsetX, e.offsetY)
    }

    document.addEventListener('mousedown', listener)
    return () => {
      console.log('uesEffect CLEANUP function')
      document.removeEventListener('mousedown', listener)
    }
  },[likes]);


  return (
    <div>
      <Layout title="day3 | Next.jsjkkjk+ TypeScript Example">
      <h3> this is day 3 </h3>
      <p>
        <Link href={{pathname: '/about'}}>
          <a>About</a>
        </Link>
      </p>
      <p>
        Likes: {likes}<button onClick={() => setLikes(likes + 1)}>Like</button>
      </p>
      </Layout>
    </div>

  );
}
 
export default Day3;