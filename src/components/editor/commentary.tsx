import { CommentaryPropsI } from "./editor.interface"

import style from "./Editor.module.css"

const CommentaryEditorShow = ({children}: CommentaryPropsI) => {
    return (
        <div className={style.commentary}>
            {children}
        </div>
    )
}

export default CommentaryEditorShow