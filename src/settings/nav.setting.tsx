import Image from "next/image"

export interface IconNavSetting{
    className?: string
}

export const settingNavs = [
    { title: "home.tsx", href: "#", Icon: ({className}: IconNavSetting): JSX.Element => (
        <Image src="/images/react.png" height={17} width={17} alt="react icon" className={className}/>
    ) },
    { title: "about-me.js", href: "#", Icon: ({className}: IconNavSetting): JSX.Element => (
        <Image src="/images/js.png" height={17} width={17} alt="react icon" className={className}/>
    ) },
    { title: "project.py", href: "#", Icon: ({className}: IconNavSetting): JSX.Element => (
        <Image src="/images/python.png" height={17} width={17} alt="react icon" className={className}/>
    ) },
]