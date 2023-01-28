import Link from "next/link"
import { LinkTextPropsI } from "./link-text.interface"

import style from "./link-text.module.css"

const LinkText = ({children, href, active}: LinkTextPropsI) => {

    return (
        <Link href={href}>
            <div className={`${style.buttonBox} buttonBox ${active ? style.buttonBoxActive : ""}`}>
                <span className={style.button}>{children}</span>
            </div>
        </Link>
    )
}

export default LinkText