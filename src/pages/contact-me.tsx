import Layout from '@components/layout'
import { MenuEnum } from '@components/layout/layout.interface'
import { ReactNode } from 'react'


export default function ContactMe() {
  return (
   <h1>ContactMe</h1>
  )
}

ContactMe.getLayout = function getLayout(children: ReactNode) {
  return (
    <Layout title="Contact me" activeMenu={MenuEnum.CONTACT_ME} >{children}</Layout>
  )
}
