import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FooterPropsI } from "./layout.interface"

import style from "./layout.module.css"
import Link from "next/link"

const Footer = ({ }: FooterPropsI) => {

    return (
        <footer className={style.footer}>
            <div className={style.start}>
                <div className={style.fotterF}>
                    <span>find me in:</span>
                </div>
                <div className={style.contentSocial}>
                    <Link href="https://www.linkedin.com/in/jeidevp/" target="_blank">
                        <div className={style.boxSocial}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={style.center}></div>
            <div>
                <Link href="https://github.com/jeiDev" target="_blank">
                    <div className={style.boxEnd}>
                        <span>@jeiDev</span>
                        <FontAwesomeIcon icon={faGithub} className={style.socialIcon}/>
                    </div>
                </Link>
            </div>
        </footer>
    )
}

export default Footer