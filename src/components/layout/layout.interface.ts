import { ReactNode } from "react"

export enum MenuEnum{
    HOME = "/",
    ABOUT_ME = "/about-me",
    PROJECT = "/projects",
    CONTACT_ME = "/contact-me"
}

export type MenuType = "/" | "/about-me" | "/projects" | "/contact-me"

export interface HeaderPropsI{
    title?: string
    activeMenu?: string
}

export interface FooterPropsI{

}

export interface LayoutPropsI extends HeaderPropsI, FooterPropsI{
    children: ReactNode
}