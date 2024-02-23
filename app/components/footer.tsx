import React from 'react'
import FooterLink from './footerLink'

const Footer = () => {
  return (
    <footer className="pt-10 px-8 pb-16 border-t">
 <div className="flex justify-between gap-6">
 <div className="flex gap-6 text-sm font-medium text-zinc-600">
 <FooterLink text={"About Me"} url={"/"} />
 <FooterLink text={"Projects"} url={"/projects"} />
 <FooterLink text={"Essays"} url={"/essays"} />
 </div>
 <p className="text-sm text-zinc-400">© 2023 Grace Huang. All rights
reserved.</p>
 </div>
 </footer>
  )
}

export default Footer