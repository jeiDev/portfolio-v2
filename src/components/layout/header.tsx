import LinkText from "@components/link/Text"
import Head from "next/head"
import React from "react"
import { settingNavs } from "@settings/nav.setting"
import { HeaderPropsI } from "./layout.interface"

import style from "./layout.module.css"

const Header = ({ title }: HeaderPropsI) => {

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={style.header}>
                <div className={style.boxTitle}>
                    <div className={style.title}>
                        <span>jei-devp</span>
                    </div>
                </div>
                <div className={style.boxNav}>
                    <ul className={style.ulNav}>
                        {settingNavs.map((nav, i) => (
                            <LinkText href={nav.href} active={i == 0} key={i}>
                                {nav.title}
                            </LinkText>
                        ))}
                    </ul>
                </div>
                <div className={style.boxEnd}>
                    <div className={style.contactMe}>
                        <span>contact-me</span>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header