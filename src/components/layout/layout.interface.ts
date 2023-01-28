import { ReactNode } from "react";

export interface HeaderPropsI{
    title?: string
}

export interface FooterPropsI{

}

export interface LayoutPropsI extends HeaderPropsI, FooterPropsI{
    children: ReactNode
}