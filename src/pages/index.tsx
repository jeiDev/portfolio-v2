import Editor from '@components/editor'
import SnakeGame from '@components/game/snake'
import Layout from '@components/layout'
import { MenuEnum } from '@components/layout/layout.interface'
import { ReactNode } from 'react'

import style from "@styles/Home.module.css"

export default function Home() {
  return (
    <section className={style.container}>
      <div className={style.box}>
        <div>
          <h6>Hi all. I am</h6>
          <h2>Jose Serrano</h2>
          <span>&#62; Senior Software Engineer</span>
        </div>
        <div>
          <Editor />
        </div>
      </div>
      <div className={style.box}>
        <SnakeGame />
      </div>
    </section>
  )
}

Home.getLayout = function getLayout(children: ReactNode) {
  return (
    <Layout title="Home" activeMenu={MenuEnum.HOME} >{children}</Layout>
  )
}
