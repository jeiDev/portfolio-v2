import React from "react"

const ButtonSnake = () => {
    return (
        <React.Fragment>
            <svg width="28" height="28" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_di_64_2635)">
                    <path d="M15.7305 9.27106C15.7305 12.8609 12.8203 15.7711 9.23047 15.7711C5.64062 15.7711 2.73047 12.8609 2.73047 9.27106C2.73047 5.68121 5.64062 2.77106 9.23047 2.77106C12.8203 2.77106 15.7305 5.68121 15.7305 9.27106Z" fill="url(#paint0_radial_64_2635)" />
                </g>
                <path d="M6.46094 11.5657L9.23022 9.27104M11.9995 6.97635L9.23022 9.27104M6.46094 6.97635L9.23022 9.27104M11.9995 11.5657L9.23022 9.27104" stroke="#114944" />
                <defs>
                    <filter id="filter0_di_64_2635" x="0.730469" y="0.771057" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="2" dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_64_2635" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_64_2635" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.101667 0 0 0 0 0.508333 0 0 0 0 0.466409 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_64_2635" />
                    </filter>
                    <radialGradient id="paint0_radial_64_2635" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.23047 6.27106) rotate(90) scale(9.5)">
                        <stop offset="0.151042" stop-color="#196C6A" />
                        <stop offset="1" stop-color="#114B4A" />
                    </radialGradient>
                </defs>
            </svg>

        </React.Fragment>
    )
}

export default ButtonSnake