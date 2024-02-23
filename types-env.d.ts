import { StaticImageData } from "next/image"

type NavItemProps = {
    title : string
    url : string
    isSelected : boolean
}

type NavbarProps = {
    pageId : string
}

type FooterLinkProps = {
    text : string
    url : string
}

type ProjectItemProps = {
    name : string
    url : string 
    urlDisplay : string,
    imageSrc : StaticImageData
}