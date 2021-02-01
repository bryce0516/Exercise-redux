import React, { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link';
import Layout from '../components/Layout';

export interface InitialProps {

}

interface Props extends InitialProps {}

interface State {
  notificationVisible: boolean;
}


const Day2: NextPage<Props, InitialProps> = () => {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>({notificationVisible:true});

  const handleClick = () => {
    setState({
      notificationVisible:false
    });
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setEmail(value)
    console.log(email)
  } 

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks, ${email} has been added to our mailing list.`)
  }
  return (

    <Layout title="day1 | Next.js + TypeScript Example">

      <div>
        <h3> this is day 2</h3>
          {state.notificationVisible && (
            <div style={{background: 'peachpuff', fontWeight:'bold', textAlign: 'center', padding: '10px'}}>
              This website is using cookies. {` `}
              <button onClick={handleClick}>I agree</button>
            </div>)
          }
        <Link href="/">
          <a>Go to Day1</a>
        </Link>
        <form onSubmit={handleSubmit}>
          <p>
            <input type="email" value={email} onChange={handleChange} />
          </p>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </Layout>
  );
}

export default Day2;