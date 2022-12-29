import React from "../../lib/react.js";
import ListItem from "./ListItem.js";
import { links } from "./links.js";
const Navbar = () => {
    return (React.createElement("nav", { className: 'navbar' },
        React.createElement("a", { href: "/", className: 'navbar-brand' }, "Logo"),
        React.createElement("ul", { className: " navbar-menu" }, links.map(link => {
            return (React.createElement(ListItem, { link: link }));
        }))));
};
export default Navbar;
