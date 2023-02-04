import ButtonSnake from "./button"
import style from "./buttonSnakeBox.module.css"

const ButtonSnakeBox = () => {
    return(
        <div className={style.container}>
            <ButtonSnake />
            <ButtonSnake />
        </div>
    )
}

export default ButtonSnakeBox