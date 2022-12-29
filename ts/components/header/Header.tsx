import React from "../../lib/react.js";
import { LinkType } from "../navbar/links.js";

const Header = ({title,desc,links}: {title:string, desc:string,links: LinkType[]}) => {
    return (
        <header className = "header">
          <article className = "header-content">
              <h1 className = "header-title">{title}</h1>
              <p className= "header-desc">{desc}</p>
              {
                links.map(link => {
                  return <a className= "header-link" href={link.href}>{link.title}</a>
                })
              }
          </article>
        </header>
    )

}
export default Header