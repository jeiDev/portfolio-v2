import Image from "next/image"
import React from "react"
import ButtonControl from "./buttonControl"
import ButtonSnakeBox from "./buttonSnakeBox"
import Commentary from "./commentary"
import { DrawButtonControlType } from "./snake.interface"
import style from "./snake.module.css"

const drawButtonControl = (types: DrawButtonControlType[]) => {

    return (
        <React.Fragment>
            {types.map((type, i) => {
                let isUpOrDown = ["up", "down"].includes(type)
                return (
                    <ButtonControl key={i}>
                        <Image src={`/images/row/${type}.png`} alt={`row ${type}`} height={isUpOrDown ? 8 : 10} width={isUpOrDown ? 10 : 8} />
                    </ButtonControl>
                )
            })}
        </React.Fragment>
    )
}

const SnakeGame = () => {

    return (
        <div className={style.container}>
            <div className={style.box}>
                <ButtonSnakeBox />
                <div className={style.main}>
                    <div className={style.boxPlay}>

                    </div>
                    <div className={style.boxControl}>
                        <div className={style.boxControlExample}>
                            <Commentary>
                                use keyboard
                            </Commentary>
                            <Commentary>
                                arrows to play
                            </Commentary>
                            <div className={style.contentControl}>
                                <div>
                                    {drawButtonControl(["up"])}
                                </div>
                                <div>
                                    {drawButtonControl(["left", "down", "right"])}
                                </div>
                            </div>
                        </div>
                        <div className={style.containerFood}>
                            <Commentary>
                                food left
                            </Commentary>
                            <div className={style.boxFood}>
                                <div className={style.food}></div>
                                <div className={style.food}></div>
                                <div className={style.food}></div>
                                <div className={style.food}></div>
                                <div className={style.food}></div>
                                <div className={style.food}></div>
                                <div className={style.food}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonSnakeBox />
            </div>
        </div>
    )
}

export default SnakeGame