import { ReactElement } from "./react";

const ReactDOM = {
    render(element: ReactElement, rootContainer: HTMLElement) {
        const domElement = document.createElement(element.tagName)

        const props = element.props ? Object.keys(element.props) : null

        if (props) {
            props.forEach(prop => {
                if (prop === 'onClick') {
                    domElement.addEventListener('click', element.props[prop])
                }
                else {
                    domElement[prop] = element.props[prop]
                }
            })
        }

        const children = element.children ? element.children : null

        if (children) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    domElement.appendChild(document.createTextNode(child))
                } else if(Array.isArray(child)){
                    child.forEach(c => {
                        this.render(c, domElement)
                    })
                }else{
                    this.render(child, domElement)
                }
            })
        }

        rootContainer.append(domElement)

    }
}

export default ReactDOM