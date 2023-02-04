import { ButtonControlPropsI } from "./ButtonControl.interface"

import style from "./ButtonControl.module.css"

const ButtonControl = ({ children }: ButtonControlPropsI) => {

    return (
        <div className={style.button}>
            {children}
        </div>
    )
}

export default ButtonControl