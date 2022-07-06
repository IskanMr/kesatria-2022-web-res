export function GenericPage({ customComponent, className, children }) {
    const Component = customComponent || 'div';
    return (
        <Component className={`py-8 px-4 sm:px-8 min-h-screen ${className}`}>
            {children}
        </Component>
    );
}

export function PageTitle({ className, noMB, text }) {
    return (
        <h1
            className={`text-center font-display text-4xl font-bold ${
                !noMB ? 'mb-4 ' : ''
            }${className}`}
        >
            {text}
        </h1>
    );
}
