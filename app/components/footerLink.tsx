import { FooterLinkProps } from '@/types-env'
import React from 'react'

const FooterLink = ({text,url}:FooterLinkProps) => (
     <a className="transition hover:text-teal-500" href={url}>{text}</a>
  )


export default FooterLink