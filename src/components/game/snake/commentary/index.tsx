import { CommentaryPropsI } from "./commentary.interface"

import style from "./commentary.module.css"

const Commentary = ({ children }: CommentaryPropsI) => {

    return (
        <div className={style.commentary}>
            <span>// {children}</span>
        </div>
    )
}

export default Commentary