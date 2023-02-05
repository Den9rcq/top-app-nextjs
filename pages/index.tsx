import type { NextPage } from 'next'
import { Button, Htag, P, Tag } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">gg</Htag>
      <Button appearance="primary" arrow="right">Primary</Button>
      <Button appearance="ghost" arrow="down">Ghost</Button>
      <P size="s">Маленький</P>
      <P>Средний</P>
      <P size="l">Большой</P>
      <Tag>Ghost маленький</Tag>
      <Tag size="m">Ghost большой</Tag>
      <Tag color="gray">Gray маленький</Tag>
      <Tag color="gray" size="m">Gray маленький</Tag>
      <Tag color="green">Green маленький</Tag>
      <Tag color="green" size="m">Green маленький</Tag>
      <Tag color="red">Red маленький</Tag>
      <Tag color="red" size="m">Red маленький</Tag>
      <Tag color="primary">Primary маленький</Tag>
      <Tag color="primary" size="m">Primary маленький</Tag>
    </>
  )
}

export default Home
