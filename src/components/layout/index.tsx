import React from "react"
import Footer from "./footer"
import Header from "./header"
import { LayoutPropsI } from "./layout.interface"

const Layout = ({children, title}: LayoutPropsI) => {

    return (
        <React.Fragment>
            <Header title={title}/>
            <main>
                {children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout