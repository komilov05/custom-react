import React from "../../lib/react.js";
import ListItem from "./ListItem.js";
import {links} from "./links.js";
const Navbar = () => {
  return (
    <nav className = 'navbar'>
      <a href="/" className='navbar-brand'>Logo</a>

      <ul className= " navbar-menu">
        {
          links.map(link => {
            return(<ListItem link = {link}/>)
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar