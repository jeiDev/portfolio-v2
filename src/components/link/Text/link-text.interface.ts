import { ReactNode } from "react"
import { UrlObject } from "url"

export interface LinkTextPropsI{
    href: string | UrlObject
    children: ReactNode
    active?: boolean
}