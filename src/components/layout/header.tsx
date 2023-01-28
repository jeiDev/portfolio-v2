import Head from "next/head"
import React from "react"
import { HeaderPropsI } from "./layout.interface"

const Header = ({title}: HeaderPropsI) => {

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                
            </header>
        </React.Fragment>
    )
}

export default Header