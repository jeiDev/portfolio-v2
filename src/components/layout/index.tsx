import BgBlob from "@components/bg-blob"
import React from "react"
import Footer from "./footer"
import Header from "./header"
import { LayoutPropsI } from "./layout.interface"

import style from "./layout.module.css"

const Layout = ({children, title}: LayoutPropsI) => {

    return (
        <div className={style.container}>
            <BgBlob />
            <div className={style.box}>
                <Header title={title}/>
                <main className={style.main}>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout