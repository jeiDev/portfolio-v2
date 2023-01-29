import Image from "next/image"
import { MenuEnum } from "@components/layout/layout.interface"

export interface IconNavSetting{
    className?: string
}

export const settingNavs = [
    { title: "home.tsx", href: MenuEnum.HOME, Icon: ({className}: IconNavSetting): JSX.Element => (
        <Image src="/images/react.png" height={17} width={17} alt="react icon" className={className}/>
    ) },
    { title: "about-me.js", href: MenuEnum.ABOUT_ME, Icon: ({className}: IconNavSetting): JSX.Element => (
        <Image src="/images/js.png" height={17} width={17} alt="react icon" className={className}/>
    ) },
    { title: "projects.py", href:  MenuEnum.PROJECT, Icon: ({className}: IconNavSetting): JSX.Element => (
        <Image src="/images/python.png" height={17} width={17} alt="react icon" className={className}/>
    ) },
]