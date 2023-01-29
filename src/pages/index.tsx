import Layout from '@components/layout'
import { MenuEnum } from '@components/layout/layout.interface'
import { ReactNode } from 'react'


export default function Home() {
  return (
    <h1>Home</h1>
  )
}

Home.getLayout = function getLayout(children: ReactNode) {
  return (
    <Layout title="Home" activeMenu={MenuEnum.HOME} >{children}</Layout>
  )
}
