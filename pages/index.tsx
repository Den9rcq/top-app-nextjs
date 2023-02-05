import type { NextPage } from 'next'
import { Button, Htag, P } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">gg</Htag>
      <Button appearance="primary" arrow="right">Primary</Button>
      <Button appearance="ghost" arrow="down">Ghost</Button>
      <P size="s">Маленький</P>
      <P>Средний</P>
      <P size="l">Большой</P>
    </>
  )
}

export default Home
