export type ReactElement = {
    tagName: keyof HTMLElementTagNameMap,
    props: ElementProps | null,
    children?: ReactElement[] | string[] | (ReactElement | string)[]
}

type ElementProps = {
    className: string,
    id: string | number,
    href: string
    onClick: (event: Event) => void
}

const React = {
    createElement(
        tagName: keyof HTMLElementTagNameMap | Function,
        props: ElementProps | null,
        ...children: ReactElement[] | string[] | (ReactElement | string)[]
    ) {
        if (typeof tagName === 'function') {
            return tagName(props, children)
        }
        return {
            tagName,
            props,
            children
        }
    }
}

export default React