import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '~/components/Button'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import TasksList from './tasks/index'
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Navbar />
    <h1>Hello Next.js 👋</h1>
    <TasksList />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Button />
    </p>
    <Footer />
  </Layout>

)

export default IndexPage
