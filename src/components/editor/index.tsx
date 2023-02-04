import React from "react"
import CommentaryEditorShow from "./commentary"
import { EditorShowPropsI } from "./editor.interface"
import VariableEditorShow from "./variable"

const EditorShow = ({ items }: EditorShowPropsI) => {
    return (
        <code>
            {items.map((item, i) => {
                if(item.indexOf("//") === 0){
                    return <CommentaryEditorShow>{item}</CommentaryEditorShow>
                }else if(item.indexOf("const ") === 0 || item.indexOf("let ") === 0 || item.indexOf("var ") === 0){
                    return <VariableEditorShow>{item}</VariableEditorShow>
                }

                console.warn("error code:", item)

                return null
            })}
        </code>
    )
}

export default EditorShow