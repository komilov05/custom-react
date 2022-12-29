import React from "../../lib/react.js";
const Header = ({ title, desc, links }) => {
    return (React.createElement("header", { className: "header" },
        React.createElement("article", { className: "header-content" },
            React.createElement("h1", { className: "header-title" }, title),
            React.createElement("p", { className: "header-desc" }, desc),
            links.map(link => {
                return React.createElement("a", { className: "header-link", href: link.href }, link.title);
            }))));
};
export default Header;
