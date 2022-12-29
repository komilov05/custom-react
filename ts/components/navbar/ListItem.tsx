import React from "../../lib/react.js";
import { LinkType } from "./links.js";

const ListItem = ({link}: {link: LinkType}) => {
  const isActive = link.href === '/' ? 'active' : ''
    return (
        <li className = 'navbar-menu__item'>
            <a href={link.href} className={`navbar-menu__link ${isActive}`}>{link.title}</a>
        </li>
    )
}

export default ListItem