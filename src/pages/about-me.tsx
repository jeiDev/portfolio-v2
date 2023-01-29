import Layout from '@components/layout'
import { MenuEnum } from '@components/layout/layout.interface'
import { ReactNode } from 'react'


export default function AbountMe() {
  return (
    <h1>AbountMe</h1>
  )
}

AbountMe.getLayout = function getLayout(children: ReactNode) {
  return (
    <Layout title="About me" activeMenu={MenuEnum.ABOUT_ME} >{children}</Layout>
  )
}