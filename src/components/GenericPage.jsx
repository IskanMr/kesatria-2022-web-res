export function GenericPage({ customComponent, className, children }) {
    const Component = customComponent || 'div';
    return (
        <Component className={`py-8 px-4 sm:px-8 min-h-screen ${className}`}>
            {children}
        </Component>
    );
}
