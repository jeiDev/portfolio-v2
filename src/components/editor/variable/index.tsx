import Link from "next/link"
import { PositionI, VariablePropsI } from "../editor.interface"

import style from "../Editor.module.css"

const positions: PositionI = {
    0: style.typeVar,
    1: style.nameVar,
    2: "",
    3: style.valueVar
}

const VariableEditorShow = ({children}: VariablePropsI) => {

    return (
        <div>
            {children.split(" ").map((text, i) => (
                <span key={i} className={positions[i]}>
                    {text.isUrl() ? (
                        <Link href={text.replace(/"/ig, "")} target="_blank">{text}</Link>
                    ) : `${text} `}
                </span>
            ))}
        </div>
    )
}

export default VariableEditorShow