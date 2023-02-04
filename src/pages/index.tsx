import EditorShow from '@components/editor'
import SnakeGame from '@components/game/snake'
import Layout from '@components/layout'
import { MenuEnum } from '@components/layout/layout.interface'
import { ReactNode } from 'react'

import style from "@styles/Home.module.css"
import { githubLink } from '@settings/references.setting'

export default function Home() {
  return (
    <section className={style.container}>
      <div className={`${style.box} ${style.boxInfo}`}>
        <div>
          <h6 className={style.greeting}>Hi all. I am</h6>
          <h2 className={style.name}>Jose Serrano</h2>
          <span className={style.workPosition}>&#62; Senior Software Engineer</span>
        </div>
        <div className={style.boxInfoEditor}>
          <EditorShow  items={[
            '// you can also see it on my Github page',
            `const githubLink = "${githubLink}"`
          ]}/>
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
