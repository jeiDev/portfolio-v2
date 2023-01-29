import Head from "next/head"
import React, { useCallback, useEffect, useState } from "react"

import LinkText from "@components/link/Text"
import { settingNavs } from "@settings/nav.setting"
import { HeaderPropsI } from "./layout.interface"

import style from "./layout.module.css"

const Header = ({ title }: HeaderPropsI) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [width, setWidth] = useState(1025)

    useEffect(() => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const changeStatusMenuBurger = useCallback(() => {
        setShowMenu(!showMenu)
    }, [showMenu])

    const updateDimensions = useCallback(() => {
        setWidth(window.innerWidth);
    }, [])

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
                <div className={style.contactMeBox}>
                    <div className={style.contactMe}>
                        <span>contact-me</span>
                    </div>
                </div>
                {width <= 1024 && (
                    <React.Fragment>
                        <div className={style.containerMenuBurger}>
                            <div className={style.menuBurger} onClick={changeStatusMenuBurger}>
                                <div className={`${style.btnMenuBurger} ${showMenu ? style.btnMenuBurgerActive : ""}`}></div>
                            </div>
                        </div>
                        <div className={`${style.mobileMenu} ${showMenu ? style.mobileMenuActive : ""}` }>
                            <ul className={style.ulNavMobile}>
                                {settingNavs.map((nav, i) => (
                                    <LinkText href={nav.href} active={i == 0} key={i}>
                                        {nav.title}
                                    </LinkText>
                                ))}
                            </ul>
                        </div>
                    </React.Fragment>
                )}
            </header>
        </React.Fragment>
    )
}

export default Header