import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '~/components/Button'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import TasksList from './tasks/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from '../reducer'
import { ConnectedTaskList } from '../components/TasksList'
import { WrappedWeather, WithWeatherProps, Weather } from '../components/Weather'
import GetFetch from '../components/getFetch'

const store = createStore(reducer)
const IndexPage = () => (
  <Provider store={store}>
    <Layout title="day1 | Next.js + TypeScript Example">
      <Navbar />
      <WrappedWeather theme="yellow"/>
      <WithWeatherProps>
        {
          (props) => {
            return(
              <Weather {...props} theme="yellow"/>
            )

          }
        }
      </WithWeatherProps>
      <ConnectedTaskList />
      <h1>day1 Next.js 👋</h1>
      <TasksList />
      <p>
        <Link href="/day2">
          <a>Day2</a>
        </Link>
        <Button />

      </p>
      <GetFetch />
      <Footer />
    </Layout>
  </Provider>
)

export default IndexPage
