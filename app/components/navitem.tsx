import { NavItemProps } from '@/types-env'
import React from 'react'

const NavItem = ({title,url,isSelected}:NavItemProps) => {
 
  return (
    <li>
 <a className={`block px-3 py-2 transition hover:text-teal-500 ${isSelected ? 'text-teal-500' : ''}`}
href={url}>{title} </a>
</li>
  )
}

export default NavItem