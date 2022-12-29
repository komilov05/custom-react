import React from './lib/react.js';
import ReactDOM from './lib/ReactDOM.js';
import Navbar from './components/navbar/Navbar.js';
import Header from './components/header/header.js';
const App = () => {
    return (React.createElement("div", { className: 'app' },
        React.createElement(Navbar, null),
        React.createElement(Header, { title: 'Hello Custom React Library', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, odit.', links: [
                { href: 'read-more', title: 'Read More' },
                { href: 'Contact', title: 'Contact Us' }
            ] })));
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
