import Layout from '@components/layout'
import { MenuEnum } from '@components/layout/layout.interface'
import { ReactNode } from 'react'


export default function Project() {
  return (
   <h1>Project</h1>
  )
}

Project.getLayout = function getLayout(children: ReactNode) {
  return (
    <Layout title="Projects" activeMenu={MenuEnum.PROJECT} >{children}</Layout>
  )
}
