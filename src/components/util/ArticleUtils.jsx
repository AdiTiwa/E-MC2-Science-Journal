export function Heading({ children }) {
    return (
        <div><p className="bg-white hover:bg-gray-50 text-3xl font-serif px-5 md:px-10 py-2">{children}</p></div>
    )
}

export function SubHeading({ children }) {
    return (
        <p className="bg-white hover:bg-gray-50 text-2xl font-serif px-10 md:px-20 py-2">{children}</p>
    )
}

export function SubSubheading({ children }) {
    return(
        <p className="bg-white hover:bg-gray-50 text-xl font-serif px-15 md:px-20 py-2">{children}</p>
    )
}

export function Paragraph({ children }) {
    return (
        <p className="bg-white hover:bg-gray-50 clear-none">&emsp;{children}</p>
    )
}

export default function Article({ children }) {
    return (
        <div className="px-10 pb-48 md:px-28 lg:px-64">{children}</div>
    )
}