const React = {
    createElement(tagName, props, ...children) {
        if (typeof tagName === 'function') {
            return tagName(props, children);
        }
        return {
            tagName,
            props,
            children
        };
    }
};
export default React;
