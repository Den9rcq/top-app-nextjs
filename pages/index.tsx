import type { NextPage } from 'next'
import { Button, Htag } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">gg</Htag>
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Ghost</Button>
    </>
  )
}

export default Home
