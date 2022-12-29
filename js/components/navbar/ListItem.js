import React from "../../lib/react.js";
const ListItem = ({ link }) => {
    const isActive = link.href === '/' ? 'active' : '';
    return (React.createElement("li", { className: 'navbar-menu__item' },
        React.createElement("a", { href: link.href, className: `navbar-menu__link ${isActive}` }, link.title)));
};
export default ListItem;
