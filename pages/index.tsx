import type { NextPage } from 'next'
import { Button, Htag } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">gg</Htag>
      <Button appearance="primary" arrow="right">Primary</Button>
      <Button appearance="ghost" arrow="down">Ghost</Button>
    </>
  )
}

export default Home
