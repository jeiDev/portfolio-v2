import React from "react"

import style from "./bg-blob.module.css"

const BgBlob = () => {

    return (
        <div className={style.container}>
            <svg className={style.blob} viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%">
                <g transform="translate(391, -101)">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "rgb(67, 217, 173)" }}></stop>
                            <stop offset="100%" style={{ stopColor: "rgb(67, 217, 173)" }}></stop>
                        </linearGradient>
                    </defs>
                    <path d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z" fill="url(#gradient)"></path>
                </g>
            </svg>
        </div>
    )
}

export default BgBlob